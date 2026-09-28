import React from 'react';
import { BookOpen, Briefcase, Terminal, Library, FileText, GraduationCap, ArrowRight, ExternalLink } from 'lucide-react';
import { StudentResource } from '../types';
import { STUDENT_RESOURCES } from '../data/resources';

interface StudentResourcesProps {
  onSelectResource: (resource: StudentResource) => void;
}

export const StudentResources: React.FC<StudentResourcesProps> = ({ onSelectResource }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'BookOpen':
        return BookOpen;
      case 'Briefcase':
        return Briefcase;
      case 'Terminal':
        return Terminal;
      case 'Library':
        return Library;
      case 'FileText':
        return FileText;
      case 'GraduationCap':
      default:
        return GraduationCap;
    }
  };

  return (
    <section id="resources" className="relative bg-[#0F172A] py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold text-indigo-400 tracking-wider uppercase mb-2">
            Academic & Career Tools
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display text-balance">
            Student Resources
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Essential academic portals, research repositories, career launchpads, and administrative requests compiled in one place.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {STUDENT_RESOURCES.map((res) => {
            const Icon = getIcon(res.iconName);
            return (
              <div
                key={res.id}
                className="group flex flex-col justify-between p-7 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-950/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium text-slate-400">
                      {res.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 font-display group-hover:text-indigo-200 transition-colors">
                    {res.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {res.description}
                  </p>

                  {/* Sample Quick Links Preview */}
                  <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-1.5">
                    {res.quickLinks.slice(0, 2).map((link, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/80" />
                        <span className="truncate">{link.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">
                    {res.quickLinks.length} portals available
                  </span>

                  <button
                    type="button"
                    onClick={() => onSelectResource(res)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-indigo-600 text-xs font-semibold text-indigo-300 hover:text-white transition-all cursor-pointer"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
