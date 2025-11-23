import { useMemo } from "react";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

export const useNotification = (defaultDuration: number = 2000) => {
  const notyf = useMemo(() => {
    return new Notyf({
      duration: defaultDuration,
      position: { x: "right", y: "top" },
      dismissible: true,
      types: [
        {
          type: "info",
          icon: false,
        },
        {
          type: "success",
          icon: false,
        },
        {
          type: "error",
          icon: false,
        },
      ],
    });
  }, [defaultDuration]);

  const success = (message: string, duration?: number) => {
    notyf.success({
      message,
      duration: duration ?? defaultDuration,
    });
  };

  const error = (message: string, duration?: number) => {
    notyf.error({
      message,
      duration: duration ?? defaultDuration,
    });
  };

  return { success, error };
};

export default useNotification;
