import React from 'react';
import { LayoutGrid, Search, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { WHY_CAMPUS_FEATURES } from '../data/whyFeatures';

export const WhyCampusConnect: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'LayoutGrid':
        return LayoutGrid;
      case 'Search':
        return Search;
      case 'Users':
        return Users;
      case 'Sparkles':
      default:
        return Sparkles;
    }
  };

  return (
    <section id="about" className="relative bg-[#0B132B] py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
            The Campus Portal Paradigm
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display text-balance">
            Why CampusConnect?
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Engineered to overcome fragmentation, streamline student discovery, and provide a single authoritative collegiate digital experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CAMPUS_FEATURES.map((feat, idx) => {
            const Icon = getIcon(feat.iconName);
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-950/70 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-2xl font-bold text-white font-mono mb-1">
                    {feat.metric}
                  </div>
                  <div className="text-xs font-medium text-indigo-400 mb-4 font-mono">
                    {feat.metricLabel}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 font-display">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Verified standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
