import { toast } from "sonner"

export const useToast = () => {
  const showSuccess = (message: string, description?: string) => {
    toast.success(message, {
      description,
      duration: 4000,
    })
  }

  const showError = (message: string, description?: string) => {
    toast.error(message, {
      description,
      duration: 5000,
    })
  }

  const showInfo = (message: string, description?: string) => {
    toast.info(message, {
      description,
      duration: 4000,
    })
  }

  const showWarning = (message: string, description?: string) => {
    toast.warning(message, {
      description,
      duration: 4000,
    })
  }

  const showLoading = (message: string) => {
    return toast.loading(message)
  }

  const dismiss = (toastId?: string | number) => {
    toast.dismiss(toastId)
  }

  return {
    showSuccess,
    showError,
    showInfo,
    showWarning,
    showLoading,
    dismiss,
  }
}

export const handleApiResponse = (
  response: { error?: string; data?: any },
  successMessage?: string,
  errorMessage?: string
) => {
  const { showSuccess, showError } = useToast()

  if (response.error) {
    showError(errorMessage || "Operation failed", response.error)
    return false
  } else {
    if (successMessage) {
      showSuccess(successMessage)
    }
    return true
  }
}

// Utility for async operations with loading toast
export const withLoadingToast = async <T>(
  operation: () => Promise<T>,
  loadingMessage: string,
  successMessage?: string,
  errorMessage?: string
): Promise<T | null> => {
  const { showSuccess, showError, showLoading, dismiss } = useToast()
  
  const toastId = showLoading(loadingMessage)
  
  try {
    const result = await operation()
    dismiss(toastId)
    
    if (successMessage) {
      showSuccess(successMessage)
    }
    
    return result
  } catch (err) {
    dismiss(toastId)
    showError(
      errorMessage || "Operation failed",
      err instanceof Error ? err.message : "An unexpected error occurred"
    )
    return null
  }
}