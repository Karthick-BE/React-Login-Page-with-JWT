import { useEffect } from "react";
// import { ExpireWarning } from "./ExpireWarning";
import { addEventListeners, removeEventListeners } from "./Events";

export const SessionExpire = () => {
  useEffect(() => {
   
    const createTimeout2 = () =>
      setTimeout(() => {
        // Implement a sign out function here
        window.location.href = "/";
      }, 5000);

    const listener = () => {
    //   if (!isWarningModalOpen) {
        clearTimeout(timeout);
        timeout = createTimeout2();
    //   }
    };

    // Initialization
    let timeout = createTimeout2();
    addEventListeners(listener);

    // Cleanup
    return () => {
      removeEventListeners(listener);
      clearTimeout(timeout);
    };
  });
};
