import React, { useState } from 'react';
import { Sparkles, Bell, Check, Clock } from 'lucide-react';

interface FutureAiPlaceholderProps {
  onNotify: (message: string) => void;
}

export const FutureAiPlaceholder: React.FC<FutureAiPlaceholderProps> = ({ onNotify }) => {
  const [subscribed, setSubscribed] = useState(false);

  const handleComingSoonClick = () => {
    setSubscribed(true);
    onNotify('Preference saved! You will receive notification when the intelligent campus assistant launches.');
  };

  return (
    <section className="relative bg-[#0F172A] py-16 sm:py-20 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/20 p-8 sm:p-12 text-center shadow-2xl">
          {/* Subtle ambient lighting */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Next Generation Evolution</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-4 text-balance">
              CampusConnect is getting smarter.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 text-balance">
              An intelligent campus assistant will soon help students discover information, events and resources faster.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleComingSoonClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                {subscribed ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Notification Saved</span>
                  </>
                ) : (
                  <>
                    <Clock className="w-4 h-4 text-indigo-200" />
                    <span>Coming Soon</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-6 text-xs text-slate-400">
              Modular integration architecture ready for external agent connection.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
