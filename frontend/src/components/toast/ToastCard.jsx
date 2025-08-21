import { CheckCircle, X, AlertCircle, Info } from "lucide-react";
import { useEffect } from "react";

const Toast = ({
  id,
  message,
  type = "success",
  duration = 4000,
  onRemove,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(id);
    }, duration);
    return () => clearTimeout(timer);
  }, [id, duration, onRemove]);

  const baseStyles =
    "flex items-center gap-3 p-4 rounded-lg text-white shadow-lg transform transition-all duration-300 ease-in-out min-w-80 max-w-96";

  const styles = {
    success: `${baseStyles} bg-green-600`,
    error: `${baseStyles} bg-red-600`,
    info: `${baseStyles} bg-blue-600`,
  };

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-600" />,
    error: <AlertCircle className="w-5 h-5 text-red-600" />,
    info: <Info className="w-5 h-5 text-blue-600" />,
  };

  return (
    <div className={styles[type] || styles.success}>
      {icons[type] || icons.success}
      <span className="flex-1 font-medium">{message}</span>
      <button
        onClick={() => onRemove(id)}
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;
