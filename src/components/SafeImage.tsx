import React, { useState } from 'react';
import { Sparkles, Image as ImageIcon } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  category?: string;
  fallbackIcon?: React.ReactNode;
  fallbackGradient?: string;
  loading?: 'lazy' | 'eager';
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackSrc,
  category,
  fallbackIcon,
  fallbackGradient = 'from-slate-900 via-indigo-950/80 to-slate-900',
  loading = 'lazy'
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasFailed, setHasFailed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setHasFailed(true);
    }
  };

  if (hasFailed || !currentSrc) {
    return (
      <div
        className={`w-full h-full relative overflow-hidden bg-gradient-to-br ${fallbackGradient} flex flex-col items-center justify-center p-4 border border-slate-800`}
        aria-label={alt}
      >
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#6366f115_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center space-y-2">
          <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-indigo-400 shadow-md">
            {fallbackIcon || <Sparkles className="w-5 h-5 text-indigo-400" />}
          </div>
          {category && (
            <span className="text-[11px] font-mono text-indigo-300 uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/20">
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
    <div className="w-full h-full relative overflow-hidden bg-slate-900">
      {/* Skeleton / Gradient Placeholder behind image */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient} transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />

      <img
        src={currentSrc}
        alt={alt}
        loading={loading}
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
