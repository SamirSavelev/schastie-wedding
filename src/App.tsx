import { RouterProvider } from "react-router-dom";
import { router } from "@app/router";
import { NotifyProvider } from "./context/Notify/NotifyProvider";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { ModalProvider } from "@context/Modal/ModalProvider";

export default function App() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js");
    }
  }, []);

  return (
    <HelmetProvider>
      <NotifyProvider>
        <ModalProvider>
          <RouterProvider router={router} />
        </ModalProvider>
      </NotifyProvider>
    </HelmetProvider>
  );
}
