import React from 'react';
import { Code2, Bot, Leaf, Palette, Rocket, Camera, ArrowRight, Users, Clock, MapPin } from 'lucide-react';
import { CampusClub } from '../types';
import { CAMPUS_CLUBS } from '../data/clubs';

interface CampusClubsProps {
  onSelectClub: (club: CampusClub) => void;
}

export const CampusClubs: React.FC<CampusClubsProps> = ({ onSelectClub }) => {
  const getClubIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return Code2;
      case 'Bot':
        return Bot;
      case 'Leaf':
        return Leaf;
      case 'Palette':
        return Palette;
      case 'Rocket':
        return Rocket;
      case 'Camera':
      default:
        return Camera;
    }
  };

  return (
    <section id="clubs" className="relative bg-[#0F172A] py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold text-purple-400 tracking-wider uppercase mb-2">
            Student Life & Extracurriculars
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display text-balance">
            Discover Campus Clubs
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Find your community, collaborate on ambitious projects, and pursue your passions beyond the lecture hall.
          </p>
        </div>

        {/* 6 Club Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CAMPUS_CLUBS.map((club) => {
            const Icon = getClubIcon(club.iconName);
            return (
              <div
                key={club.id}
                className="group flex flex-col justify-between p-7 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-950/40 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Users className="w-3.5 h-3.5 text-slate-500" />
                      <span className="font-mono">{club.memberCount}+ members</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-purple-300 transition-colors">
                    {club.name}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {club.shortDescription}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-800 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>{club.meetingTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span className="truncate">{club.location}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    Led by: <span className="text-slate-300">{club.lead.split('&')[0]}</span>
                  </span>

                  <button
                    type="button"
                    onClick={() => onSelectClub(club)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-purple-600 text-xs font-semibold text-purple-300 hover:text-white transition-all cursor-pointer"
                  >
                    <span>Explore Club</span>
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
