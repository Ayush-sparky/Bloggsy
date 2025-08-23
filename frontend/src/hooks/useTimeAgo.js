import { useState, useEffect } from "react";
import { formatDistanceToNow, format } from "date-fns";

export function useTimeAgo(date, cutoffDays = 7) {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    function getFormattedTime() {
      const d = new Date(date);
      const now = new Date();

      const diffInDays = Math.floor((now - d) / (1000 * 60 * 60 * 24));

      if (diffInDays < cutoffDays) {
        return formatDistanceToNow(d, { addSuffix: true });
      } else {
        return format(d, "MMM d, yyyy"); 
      }
    }

    setTimeAgo(getFormattedTime());

    const interval = setInterval(() => {
      setTimeAgo(getFormattedTime());
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, [date, cutoffDays]);

  return timeAgo;
}
