import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { LottieToast, ToastProps } from './LottieToast';

interface ToastContainerProps {
  toasts: ToastProps[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onDismiss }) => {
  // Group toasts by position
  const groupedToasts = toasts.reduce((acc, toast) => {
    const position = toast.position || 'top-right';
    if (!acc[position]) {
      acc[position] = [];
    }
    acc[position].push(toast);
    return acc;
  }, {} as Record<string, ToastProps[]>);

  return (
    <>
      {Object.entries(groupedToasts).map(([position, positionToasts]) => (
        <div key={position} className="fixed z-50 pointer-events-none">
          <AnimatePresence mode="popLayout">
            {positionToasts.map((toast, index) => (
              <div
                key={toast.id}
                style={{
                  marginBottom: index > 0 ? '12px' : '0',
                }}
              >
                <LottieToast
                  {...toast}
                  onDismiss={onDismiss}
                />
              </div>
            ))}
          </AnimatePresence>
        </div>
      ))}
    </>
  );
};