import { useEffect } from "react";
import { addEventListeners, removeEventListeners } from "./Events";

export const SessionExpire = () => {
  useEffect(() => {
    const createTimeout = () =>
      setTimeout(() => {
        window.location.href = "/";
      }, 300000);
    const listener = () => {
      clearTimeout(timeout);
      timeout = createTimeout();
    };
    let timeout = createTimeout();
    addEventListeners(listener);
    return () => {
      removeEventListeners(listener);
      clearTimeout(timeout);
    };
  });
};
