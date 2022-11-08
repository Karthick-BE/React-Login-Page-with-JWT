import { useEffect } from "react";

import { addEventListeners, removeEventListeners } from "./Events";

export const SessionExpire = () => {
  useEffect(() => {
    const createTimeout2 = () =>
      setTimeout(() => {
        window.location.href = "/";
      }, 5000);

    const listener = () => {
      clearTimeout(timeout);
      timeout = createTimeout2();
    };

    let timeout = createTimeout2();
    addEventListeners(listener);

    return () => {
      removeEventListeners(listener);
      clearTimeout(timeout);
    };
  });
};
