import { createContext, useContext, useState } from "react";
import { ToastContainer } from "../components/toast/ToastContainer";

const ToastContext = createContext();


export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "success", duration = 4000) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type, duration }]);
    return id;
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const showSuccess = (msg) => addToast(msg, "success");
  const showError = (msg) => addToast(msg, "error");
  const showInfo = (msg) => addToast(msg, "info");

  return (
    <ToastContext.Provider
      value={{ showSuccess, showError, showInfo, addToast, removeToast }}
    >
      {children}
      {/* Keep container mounted globally */}
      <ToastContainer toasts={toasts} onRemoveToast={removeToast} />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
