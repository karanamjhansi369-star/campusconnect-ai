import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900 border border-indigo-500/40 text-white shadow-2xl shadow-black/60">
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        <p className="text-xs sm:text-sm font-medium text-slate-200">{message}</p>
        <button
          onClick={onClose}
          className="ml-auto p-1 rounded-md text-slate-400 hover:text-white transition-colors"
          aria-label="Dismiss message"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
