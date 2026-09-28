import React, { useState } from 'react';
import {
  Building2,
  BookMarked,
  Cpu,
  FlaskConical,
  UtensilsCrossed,
  HeartHandshake,
  Clock,
  BookOpen,
  Compass,
  ShieldAlert,
  LifeBuoy,
  Phone,
  Mail,
  MapPin,
  Check,
  Copy
} from 'lucide-react';
import { CampusFacility, ImportantInfoItem } from '../types';
import { CAMPUS_FACILITIES, IMPORTANT_CAMPUS_INFO } from '../data/campusInfo';
import { SafeImage } from './SafeImage';

interface CampusInfoProps {
  onShowToast: (message: string) => void;
}

export const CampusInfo: React.FC<CampusInfoProps> = ({ onShowToast }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const getFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return Building2;
      case 'BookMarked':
        return BookMarked;
      case 'Cpu':
        return Cpu;
      case 'FlaskConical':
        return FlaskConical;
      case 'UtensilsCrossed':
        return UtensilsCrossed;
      case 'HeartHandshake':
      default:
        return HeartHandshake;
    }
  };

  const getInfoIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock':
        return Clock;
      case 'BookOpen':
        return BookOpen;
      case 'Compass':
        return Compass;
      case 'ShieldAlert':
        return ShieldAlert;
      case 'LifeBuoy':
      default:
        return LifeBuoy;
    }
  };

  const handleAction = (item: ImportantInfoItem) => {
    if (item.category === 'contact') {
      navigator.clipboard.writeText(item.value);
      setCopiedId(item.id);
      onShowToast(`Emergency contact copied to clipboard: ${item.value}`);
      setTimeout(() => setCopiedId(null), 2500);
    } else if (item.category === 'support') {
      onShowToast(`Connected to Student Support: ${item.value}`);
    } else {
      onShowToast(`${item.title}: ${item.value}`);
    }
  };

  return (
    <section id="campus-info" className="relative bg-[#0B132B] py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subsection 1: Explore Your Campus */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2">
            Infrastructure & Facilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display text-balance">
            Explore Your Campus
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Discover cutting-edge academic spaces, research laboratories, recreational hubs, and student amenity centers across our grounds.
          </p>
        </div>

        {/* 6 Facilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {CAMPUS_FACILITIES.map((fac) => {
            const Icon = getFacilityIcon(fac.iconName);
            return (
              <div
                key={fac.id}
                className="group flex flex-col justify-between rounded-2xl bg-slate-900/85 border border-slate-800 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-950/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Visual Image Header */}
                {fac.image && (
                  <div className="relative h-44 w-full overflow-hidden bg-slate-800">
                    <SafeImage
                      src={fac.image}
                      alt={fac.title}
                      category={fac.category}
                      fallbackIcon={<Icon className="w-6 h-6 text-cyan-400" />}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-medium text-cyan-300 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-cyan-500/30 shadow-sm">
                        {fac.category}
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center gap-1.5 text-xs text-slate-300 pointer-events-none">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{fac.location}</span>
                    </div>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-200 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white font-display group-hover:text-cyan-200 transition-colors">
                        {fac.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      {fac.description}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-slate-800">
                      {fac.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-5 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Hours:</span>
                    <span className="font-mono text-slate-200 font-medium">{fac.hours}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subsection 2: Important Campus Information */}
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 to-[#0F172A] border border-slate-800 p-8 sm:p-10 shadow-2xl">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-semibold text-indigo-400 tracking-wider uppercase mb-1.5">
              Verified Essentials
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
              Important Campus Information
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Official operating hours, 24/7 emergency dispatch, and administrative helpdesk contact details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {IMPORTANT_CAMPUS_INFO.map((item) => {
              const Icon = getInfoIcon(item.iconName);
              const isCopied = copiedId === item.id;
              return (
                <div
                  key={item.id}
                  className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-indigo-500/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-slate-200">
                        {item.title}
                      </h4>
                    </div>

                    <div className="text-base sm:text-lg font-bold text-white font-mono mb-1.5">
                      {item.value}
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.subtext}
                    </p>
                  </div>

                  {item.actionText && (
                    <div className="pt-3 mt-4 border-t border-slate-800/60">
                      <button
                        type="button"
                        onClick={() => handleAction(item)}
                        className="w-full flex items-center justify-between text-xs font-semibold text-indigo-300 hover:text-white bg-slate-900 hover:bg-indigo-600/80 px-3 py-2 rounded-lg border border-slate-800 hover:border-indigo-500/50 transition-all cursor-pointer"
                      >
                        <span className="truncate">{item.actionText}</span>
                        {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
