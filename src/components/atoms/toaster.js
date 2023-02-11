import { Toaster } from "../../utils";

export const ToastMessage = (icon, title, text) => {
  Toaster.fire({
    icon,
    title,
    text,
  });
};
