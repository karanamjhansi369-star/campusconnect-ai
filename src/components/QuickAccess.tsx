import React from 'react';
import { Calendar, BookOpen, Building2, Users, ArrowUpRight } from 'lucide-react';

interface QuickAccessProps {
  onNavigate: (sectionId: string) => void;
}

export const QuickAccess: React.FC<QuickAccessProps> = ({ onNavigate }) => {
  const cards = [
    {
      id: 'events',
      title: 'Campus Events',
      description: 'Discover upcoming workshops, hackathons, seminars and college events.',
      icon: Calendar,
      accent: 'from-blue-500/20 to-blue-600/10',
      iconColor: 'text-blue-400',
      borderHover: 'hover:border-blue-500/50',
      buttonBg: 'group-hover:bg-blue-600',
      badgeText: 'Live Calendar'
    },
    {
      id: 'resources',
      title: 'Student Resources',
      description: 'Find useful academic and student resources quickly.',
      icon: BookOpen,
      accent: 'from-indigo-500/20 to-indigo-600/10',
      iconColor: 'text-indigo-400',
      borderHover: 'hover:border-indigo-500/50',
      buttonBg: 'group-hover:bg-indigo-600',
      badgeText: 'Curriculum & Placements'
    },
    {
      id: 'campus-info',
      title: 'Campus Information',
      description: 'Access important information about campus facilities and services.',
      icon: Building2,
      accent: 'from-cyan-500/20 to-cyan-600/10',
      iconColor: 'text-cyan-400',
      borderHover: 'hover:border-cyan-500/50',
      buttonBg: 'group-hover:bg-cyan-600',
      badgeText: 'Facilities & Timings'
    },
    {
      id: 'clubs',
      title: 'Clubs & Activities',
      description: 'Explore clubs, communities and extracurricular activities.',
      icon: Users,
      accent: 'from-purple-500/20 to-purple-600/10',
      iconColor: 'text-purple-400',
      borderHover: 'hover:border-purple-500/50',
      buttonBg: 'group-hover:bg-purple-600',
      badgeText: '50+ Communities'
    }
  ];

  return (
    <section className="relative bg-[#0F172A] py-16 sm:py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold text-indigo-400 tracking-wider uppercase mb-2">
            Campus Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display text-balance">
            Everything You Need, In One Place
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Navigate all essential academic schedules, student services, and extracurricular communities through structured hubs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => onNavigate(card.id)}
                className={`group relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900/90 border border-slate-800 ${card.borderHover} hover:shadow-2xl hover:shadow-indigo-950/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
              >
                {/* Background accent glow */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center ${card.iconColor} group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 tracking-wider">
                      {card.badgeText}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 font-display group-hover:text-indigo-200 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="relative z-10 pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                    Explore Hub
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 ${card.buttonBg} group-hover:text-white transition-all duration-200`}>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
