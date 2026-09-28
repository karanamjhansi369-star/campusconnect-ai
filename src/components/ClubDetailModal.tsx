import React, { useState } from 'react';
import { X, Users, Clock, MapPin, Sparkles, Check, ArrowRight } from 'lucide-react';
import { CampusClub } from '../types';

interface ClubDetailModalProps {
  club: CampusClub | null;
  onClose: () => void;
  onJoinSuccess: (clubName: string) => void;
}

export const ClubDetailModal: React.FC<ClubDetailModalProps> = ({ club, onClose, onJoinSuccess }) => {
  const [joined, setJoined] = useState(false);

  if (!club) return null;

  const handleJoin = () => {
    setJoined(true);
    onJoinSuccess(club.name);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-white p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">
            {club.category}
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            {club.name}
          </h3>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            {club.fullDescription}
          </p>
        </div>

        {/* Club Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs mb-6">
          <div className="flex items-center gap-2.5 text-slate-300">
            <Users className="w-4 h-4 text-purple-400 shrink-0" />
            <span>{club.memberCount + (joined ? 1 : 0)} Active Members</span>
          </div>
          <div className="flex items-center gap-2.5 text-slate-300">
            <Clock className="w-4 h-4 text-purple-400 shrink-0" />
            <span>{club.meetingTime}</span>
          </div>
          <div className="flex items-center gap-2.5 text-slate-300">
            <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
            <span>{club.location}</span>
          </div>
          <div className="flex items-center gap-2.5 text-slate-300">
            <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
            <span>Student Lead: {club.lead}</span>
          </div>
        </div>

        {/* Upcoming Activity */}
        <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 mb-6">
          <div className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1 font-mono">
            Next Major Activity
          </div>
          <div className="text-sm text-white font-medium">
            {club.upcomingActivity}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-6 pb-4 border-b border-slate-800">
          <span className="text-slate-500 font-mono">Keywords:</span>
          {club.tags.map((tag, idx) => (
            <span key={idx} className="bg-slate-800/80 px-2 py-0.5 rounded text-slate-300">
              {tag}
            </span>
          ))}
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>

          <button
            type="button"
            onClick={handleJoin}
            disabled={joined}
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-lg transition-all cursor-pointer ${
              joined
                ? 'bg-emerald-600 text-white cursor-default'
                : 'bg-purple-600 hover:bg-purple-500 text-white shadow-purple-900/40'
            }`}
          >
            {joined ? (
              <>
                <Check className="w-4 h-4" />
                <span>Membership Application Sent</span>
              </>
            ) : (
              <>
                <span>Join {club.name}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
