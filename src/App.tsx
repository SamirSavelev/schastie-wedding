import { RouterProvider } from "react-router-dom";
import { router } from "@app/router";
import { NotifyProvider } from "./context/Notify/NotifyProvider";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("Service Worker зарегистрирован", registration);
        })
        .catch((error) => {
          console.error("Ошибка регистрации Service Worker", error);
        });
    }
  }, []);

  return (
    <NotifyProvider>
      <RouterProvider router={router} />
    </NotifyProvider>
  );
}
