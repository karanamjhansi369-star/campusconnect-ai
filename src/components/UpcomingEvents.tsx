import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ArrowRight, CheckCircle2, Filter, Layers, Sparkles } from 'lucide-react';
import { CampusEvent, EventCategory } from '../types';
import { CAMPUS_EVENTS } from '../data/events';
import { SafeImage } from './SafeImage';

interface UpcomingEventsProps {
  onSelectEvent: (event: CampusEvent) => void;
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ onSelectEvent }) => {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('All');
  const [showAll, setShowAll] = useState(false);

  const categories: EventCategory[] = ['All', 'Technology', 'Coding', 'Seminar', 'Club'];

  const filteredEvents = CAMPUS_EVENTS.filter((evt) => {
    if (selectedCategory === 'All') return true;
    return evt.category === selectedCategory;
  });

  // By default, display the first 4 events if showAll is false, or all if true
  const displayedEvents = showAll ? filteredEvents : filteredEvents.slice(0, 4);

  return (
    <section id="events" className="relative bg-[#0B132B] py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
              Schedules & Symposia
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display text-balance">
              Upcoming Campus Events
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Stay ahead of collegiate tech hackathons, faculty guest seminars, and student developer meetups.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedEvents.map((evt) => (
            <div
              key={evt.id}
              className="group flex flex-col justify-between rounded-2xl bg-slate-900/85 border border-slate-800 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-950/40 transition-all duration-300 overflow-hidden"
            >
              {/* Event Image Banner with Scrim */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                <SafeImage
                  src={evt.image}
                  alt={evt.title}
                  category={evt.category}
                  fallbackIcon={<Sparkles className="w-6 h-6 text-blue-400" />}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />

                {/* Date & Category Badge Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="text-[11px] font-mono tracking-tight text-white bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700/60 shadow-sm">
                    {evt.displayDate}
                  </span>
                  <span className="text-[11px] font-medium text-blue-300 bg-blue-950/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-blue-500/30 shadow-sm">
                    {evt.category}
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 flex items-center gap-1.5 text-xs text-slate-300 pointer-events-none">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span className="truncate">{evt.location}</span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-mono">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{evt.time}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display leading-snug group-hover:text-blue-300 transition-colors">
                    {evt.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                    {evt.shortDescription}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400">
                    <span className="font-semibold text-slate-300">{evt.seatsTotal - evt.seatsBooked}</span> seats left
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectEvent(evt)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 group-hover:translate-x-0.5 transition-all cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Toggle Button */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700/80 hover:border-slate-600 transition-all cursor-pointer shadow-sm hover:-translate-y-0.5"
          >
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>{showAll ? 'Show Fewer Events' : 'View All Events'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
