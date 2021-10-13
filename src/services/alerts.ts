import Swal from 'sweetalert2'

/**
 * ALERT FUNCTION USING SWEETALERT
 * @param {*} header: string ==> display title
 * @param {*} string: string ==> display message
 * @param {*} icon: any ==> display icon {OPTIONAL} || info
 */

const alert = (header: string, message: string, icon?: any) => {
    Swal.fire(`${header}`,`${message}`, icon || "info");
}

/**
 * TOAST FUNCTION USING SWEETALERT
 * @param {*} value : Pass the message
 * @param {*} title?: Pass the title {OPTIONAL} || Default = ""
 * @param {*} toastIcon? Pass the Icon {OPTIONAL} || Default = INFO
 * ?? ICON-TYPES : error, info, success, warning, question
 * @returns ToastModal at the top right corner of the screen.
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const toast = (
    value: string,
    title?: string,
    toastIcon?: any,
    time?: number
  ): void => {
    Swal.fire({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: time || 3500,
      icon: toastIcon || "info",
      title: title || "",
      text: value,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
  };

export { alert, toast };