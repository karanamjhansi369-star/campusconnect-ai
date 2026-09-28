import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  category?: string;
  fallbackIcon?: React.ReactNode;
  fallbackGradient?: string;
  loading?: 'lazy' | 'eager';
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  category,
  fallbackIcon,
  fallbackGradient = 'from-slate-900 via-indigo-950/80 to-slate-900',
  loading = 'lazy'
}) => {
  const [hasFailed, setHasFailed] = useState(false);

  if (hasFailed || !src) {
    return (
      <div
        className={`w-full h-full relative overflow-hidden bg-gradient-to-br ${fallbackGradient} flex flex-col items-center justify-center p-4 border border-slate-800 select-none`}
        role="img"
        aria-label={alt}
      >
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#6366f115_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center space-y-2">
          <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/70 flex items-center justify-center text-indigo-400 shadow-md">
            {fallbackIcon || <Sparkles className="w-5 h-5 text-indigo-400" />}
          </div>
          {category && (
            <span className="text-[11px] font-mono text-indigo-300 uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-950/70 border border-indigo-500/30">
              {category}
            </span>
          )}
          <span className="text-xs font-semibold text-slate-300 max-w-[200px] truncate">
            {alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-800/80">
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        onError={() => setHasFailed(true)}
        className={className}
      />
    </div>
  );
};
