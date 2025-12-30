import type { FC, PropsWithChildren } from "react";
import type { NotifyType } from "./types";
import { toast, ToastContainer, type ToastOptions } from "react-toastify";
import { NotifyContext } from "./NotifyContext";

const { Provider } = NotifyContext;

export const NotifyProvider: FC<PropsWithChildren> = ({ children }) => {
  const showNotify = (message: string, type: NotifyType) => {
    const options: ToastOptions = {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      type: type,
      className: type === "success" ? "toast-success" : "toast-error",
    };
    toast(message, options);
  };

  return (
    <Provider value={{ showNotify }}>
      {children}
      <ToastContainer />
    </Provider>
  );
};
