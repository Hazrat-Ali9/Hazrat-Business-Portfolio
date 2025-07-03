import { useState, useCallback } from 'react';
import { ToastProps } from '../components/chat/LottieToast';
import { lottieAnimations } from '../data/lottieAnimations';

interface ToastOptions {
  type?: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message: string;
  duration?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = useCallback((options: ToastOptions) => {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    
    // Get appropriate animation based on type
    const getAnimationData = (type: string) => {
      switch (type) {
        case 'success':
          return lottieAnimations.messageSent;
        case 'info':
          return lottieAnimations.newMessage;
        case 'warning':
          return lottieAnimations.userOffline;
        case 'error':
          return lottieAnimations.error;
        default:
          return lottieAnimations.newMessage;
      }
    };

    const newToast: ToastProps = {
      id,
      type: options.type || 'info',
      title: options.title,
      message: options.message,
      duration: options.duration || 3000,
      position: options.position || 'top-right',
      animationData: getAnimationData(options.type || 'info'),
      onDismiss: removeToast,
    };

    setToasts(prev => [...prev, newToast]);
    return id;
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const removeAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  // Convenience methods
  const success = useCallback((title: string, message: string, options?: Partial<ToastOptions>) => {
    return addToast({ ...options, type: 'success', title, message });
  }, [addToast]);

  const info = useCallback((title: string, message: string, options?: Partial<ToastOptions>) => {
    return addToast({ ...options, type: 'info', title, message });
  }, [addToast]);

  const warning = useCallback((title: string, message: string, options?: Partial<ToastOptions>) => {
    return addToast({ ...options, type: 'warning', title, message });
  }, [addToast]);

  const error = useCallback((title: string, message: string, options?: Partial<ToastOptions>) => {
    return addToast({ ...options, type: 'error', title, message });
  }, [addToast]);

  return {
    toasts,
    addToast,
    removeToast,
    removeAllToasts,
    success,
    info,
    warning,
    error,
  };
};