import { toast } from 'react-toastify';

export const SuccessNotify = (text, duration = 5000) => {
  toast.success(text, {
    position: 'top-right',
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

export const InfoNotify = (text, duration = 5000) => {
  toast.info(text, {
    position: 'top-right',
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

export const WarningNotify = (text, duration = 5000) => {
  toast.warn(text, {
    position: 'top-right',
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};

export const ErrorNotify = (text, duration = 5000) => {
  toast.error(text, {
    position: 'top-right',
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};
