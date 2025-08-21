import ToastCard from "./ToastCard";

export const ToastContainer = ({ toasts, onRemoveToast }) => (
  <div className="fixed top-4 right-4 z-50 space-y-2">
    {toasts.map((toast) => (
      <ToastCard key={toast.id} {...toast} onRemove={onRemoveToast} />
    ))}
  </div>
);
