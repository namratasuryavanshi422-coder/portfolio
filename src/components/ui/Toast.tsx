import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheckCircle, FiXCircle, FiX } from 'react-icons/fi'
import { cn } from '@/lib/utils'

export type ToastType = 'success' | 'error'

export type ToastData = {
  type: ToastType
  message: string
}

type ToastProps = {
  toast: ToastData | null
  onDismiss: () => void
}

export function Toast({ toast, onDismiss }: ToastProps) {
  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(onDismiss, 5000)
    return () => clearTimeout(timer)
  }, [toast, onDismiss])

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            'fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border px-5 py-4 shadow-lg backdrop-blur-xl sm:bottom-8 sm:right-8',
            toast?.type === 'success'
              ? 'border-accent-primary/20 bg-accent-primary/10'
              : 'border-red-500/20 bg-red-500/10',
          )}
          role="alert"
        >
          {toast && (
            <>
              {toast.type === 'success' ? (
                <FiCheckCircle className="h-5 w-5 shrink-0 text-accent-primary" />
              ) : (
                <FiXCircle className="h-5 w-5 shrink-0 text-red-400" />
              )}
              <p className="text-sm font-medium text-white/80 break-words">{toast.message}</p>
              <button
                type="button"
                onClick={onDismiss}
                className="ml-2 rounded-lg p-1 text-white/30 transition-colors hover:text-white/60"
                aria-label="Dismiss notification"
              >
                <FiX className="h-4 w-4" />
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
