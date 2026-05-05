import toast from 'react-hot-toast'

export const showSuccessToast = (message) => {
  return toast.success(message, {
    duration: 3000,
    position: 'top-right',
  })
}

export const showErrorToast = (message) => {
  return toast.error(message, {
    duration: 4000,
    position: 'top-right',
  })
}

export const showLoadingToast = (message) => {
  return toast.loading(message, {
    position: 'top-right',
  })
}

export const showInfoToast = (message) => {
  return toast(message, {
    duration: 3000,
    position: 'top-right',
    icon: 'ℹ️',
  })
}

export const dismissToast = (toastId) => {
  toast.dismiss(toastId)
}

export const updateToast = (toastId, type, message) => {
  if (type === 'success') {
    toast.success(message, { id: toastId })
  } else if (type === 'error') {
    toast.error(message, { id: toastId })
  }
}
