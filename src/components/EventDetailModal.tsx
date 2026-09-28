import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Users, Sparkles, Check, Share2 } from 'lucide-react';
import { CampusEvent } from '../types';

interface EventDetailModalProps {
  event: CampusEvent | null;
  onClose: () => void;
  onRsvpSuccess: (eventName: string) => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({ event, onClose, onRsvpSuccess }) => {
  const [hasRsvpd, setHasRsvpd] = useState(false);

  if (!event) return null;

  const handleRsvp = () => {
    setHasRsvpd(true);
    onRsvpSuccess(event.title);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-56 sm:h-64 w-full bg-slate-800">
          <img
            src={event.image}
            alt={event.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/70 hover:bg-slate-950 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category & Date badge */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <span className="text-xs font-mono text-blue-300 bg-blue-950/90 border border-blue-500/40 px-3 py-1 rounded-lg">
              {event.category}
            </span>
            <span className="text-xs font-mono text-slate-300 bg-slate-950/90 border border-slate-700 px-3 py-1 rounded-lg">
              {event.displayDate}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              {event.title}
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Organized by {event.organizer}
            </p>
          </div>

          {/* Event Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs">
            <div className="flex items-center gap-2.5 text-slate-300">
              <Calendar className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>{event.displayDate}</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-300">
              <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-300">
              <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-300">
              <Users className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>
                {event.seatsBooked + (hasRsvpd ? 1 : 0)} / {event.seatsTotal} registered
              </span>
            </div>
          </div>

          {/* Speaker */}
          {event.speaker && (
            <div className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-200">
              <span className="font-semibold text-white">Featured Presenter: </span>
              {event.speaker}
            </div>
          )}

          {/* Full description */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">
              About This Event
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {event.fullDescription}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 font-mono">
              Program Highlights
            </h4>
            <ul className="space-y-2">
              {event.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Modal Actions */}
          <div className="pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
            >
              Close
            </button>

            <button
              type="button"
              onClick={handleRsvp}
              disabled={hasRsvpd}
              className={`inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-xl shadow-lg transition-all cursor-pointer ${
                hasRsvpd
                  ? 'bg-emerald-600 text-white cursor-default'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-indigo-600/30'
              }`}
            >
              {hasRsvpd ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>RSVP Confirmed</span>
                </>
              ) : (
                <>
                  <span>Reserve Seat</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
