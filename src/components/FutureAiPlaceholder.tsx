import React from 'react';
import { Sparkles, MessageSquare, ArrowRight, Bot, Zap, Calendar, BookOpen, Users } from 'lucide-react';
import { openN8nChat } from './N8nChatWidget';

interface FutureAiPlaceholderProps {
  onNotify: (message: string) => void;
}

export const FutureAiPlaceholder: React.FC<FutureAiPlaceholderProps> = ({ onNotify }) => {
  const handleOpenChat = () => {
    const opened = openN8nChat();
    if (!opened) {
      onNotify('Opening Campus AI Assistant in the bottom right corner...');
    }
  };

  const samplePrompts = [
    { label: 'Upcoming workshops & hackathons', icon: Calendar },
    { label: 'Library hours & study rooms', icon: BookOpen },
    { label: 'How to join Robotics or Coding Club?', icon: Users },
  ];

  return (
    <section id="ai-assistant" className="relative bg-[#0F172A] py-16 sm:py-20 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950/50 to-slate-900 border border-indigo-500/30 p-8 sm:p-12 text-center shadow-2xl">
          {/* Subtle ambient lighting */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Smart Assistant Live · Connected via n8n</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-4 text-balance">
              CampusConnect AI is Live.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 text-balance">
              Your intelligent campus assistant is ready to help you discover events, library hours, clubs, and academic resources instantly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleOpenChat}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <Bot className="w-4 h-4 text-indigo-200" />
                <span>Open Campus AI Chat</span>
                <ArrowRight className="w-4 h-4 text-indigo-200" />
              </button>
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Try asking questions like:
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {samplePrompts.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={handleOpenChat}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700/60 text-xs text-slate-300 hover:text-white transition-all cursor-pointer"
                    >
                      <Icon className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 text-[11px] font-mono text-slate-500">
              Direct webhook integration active on n8n Cloud
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
