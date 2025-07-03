import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export interface ToastProps {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message: string;
  duration?: number;
  onDismiss: (id: string) => void;
  animationData: any;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export const LottieToast: React.FC<ToastProps> = ({
  id,
  type,
  title,
  message,
  duration = 3000,
  onDismiss,
  animationData,
  position = 'top-right'
}) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Start progress bar animation
    if (progressRef.current) {
      progressRef.current.style.transition = `width ${duration}ms linear`;
      progressRef.current.style.width = '0%';
    }

    // Auto dismiss after duration
    timeoutRef.current = setTimeout(() => {
      onDismiss(id);
    }, duration);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [id, duration, onDismiss]);

  const handleDismiss = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    onDismiss(id);
  };

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return 'border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-700';
      case 'info':
        return 'border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-700';
      case 'warning':
        return 'border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-700';
      case 'error':
        return 'border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-700';
      default:
        return 'border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700';
    }
  };

  const getProgressColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'info':
        return 'bg-blue-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getPositionStyles = () => {
    switch (position) {
      case 'top-left':
        return 'top-4 left-4';
      case 'bottom-right':
        return 'bottom-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      default:
        return 'top-4 right-4';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: position.includes('right') ? 100 : -100 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.8, x: position.includes('right') ? 100 : -100 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        opacity: { duration: 0.2 }
      }}
      className={`fixed ${getPositionStyles()} z-50 max-w-sm w-full pointer-events-auto`}
      role="alert"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className={`relative rounded-xl border backdrop-blur-sm shadow-lg overflow-hidden ${getTypeStyles()}`}>
        {/* Progress bar */}
        <div className="absolute top-0 left-0 h-1 bg-gray-200 dark:bg-gray-700 w-full">
          <div
            ref={progressRef}
            className={`h-full ${getProgressColor()} transition-all ease-linear`}
            style={{ width: '100%' }}
          />
        </div>

        <div className="p-4">
          <div className="flex items-start space-x-3">
            {/* Lottie Animation */}
            <div className="flex-shrink-0 w-8 h-8">
              <Lottie
                animationData={animationData}
                loop={false}
                autoplay={true}
                style={{ width: '100%', height: '100%' }}
                aria-hidden="true"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                {title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {message}
              </p>
            </div>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};