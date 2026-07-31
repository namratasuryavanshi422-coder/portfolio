import { useCallback, useState } from 'react'
import type { ToastData, ToastType } from '@/components/ui/Toast'

/**
 * Lightweight toast state manager. Render with the `Toast` component:
 * `<Toast toast={toast} onDismiss={dismiss} />`.
 */
export function useToast() {
  const [toast, setToast] = useState<ToastData | null>(null)

  const notify = useCallback((type: ToastType, message: string) => {
    setToast({ type, message })
  }, [])

  const dismiss = useCallback(() => setToast(null), [])

  return { toast, notify, dismiss }
}
