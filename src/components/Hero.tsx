import React from 'react';
import { Calendar, BookOpen, Sparkles, ArrowRight, ShieldCheck, Zap, Building } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface HeroProps {
  onExploreEvents: () => void;
  onExploreResources: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreEvents, onExploreResources }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#0B132B] via-[#0F172A] to-[#111827] text-white pt-12 pb-20 md:pt-16 md:pb-28">
      {/* Ambient Glows and Tech Grid Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-3xl transform translate-x-1/3"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/20 text-indigo-300 text-xs font-medium tracking-wide shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Unified Smart Campus Portal · Academic Year 2026–2027</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-display text-balance">
              Your Campus. <br className="hidden sm:inline" />
              Your Information. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                All in One Place.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed text-balance">
              Discover campus events, student resources, clubs and important information through one smart campus platform.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onExploreEvents}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-blue-200" />
                <span>Explore Events</span>
                <ArrowRight className="w-4 h-4 text-white/80" />
              </button>

              <button
                type="button"
                onClick={onExploreResources}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 hover:text-white border border-slate-700/60 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
              >
                <BookOpen className="w-4 h-4 text-indigo-400" />
                <span>Explore Resources</span>
              </button>
            </div>

            {/* Quick Proof Badges */}
            <div className="pt-4 border-t border-slate-800/60 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">150+</div>
                <div className="text-xs text-slate-400 font-medium">Campus Events</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">24/7</div>
                <div className="text-xs text-slate-400 font-medium">Resource Access</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">50+</div>
                <div className="text-xs text-slate-400 font-medium">Active Clubs</div>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Campus Visual with Tech Abstract Elements */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gradient border */}
              <div className="relative p-1.5 rounded-3xl bg-gradient-to-tr from-blue-500/30 via-indigo-500/40 to-purple-500/30 shadow-2xl shadow-indigo-950/60 backdrop-blur-sm">
                <div className="relative rounded-[22px] overflow-hidden bg-slate-900 border border-slate-800 h-80 sm:h-96">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
                    alt="Modern University Campus with students collaborating"
                    category="Smart Campus"
                    fallbackIcon={<Building className="w-8 h-8 text-indigo-400" />}
                    loading="eager"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Contrast gradient overlay scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none"></div>

                  {/* Campus Tag Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                        <span className="text-xs font-semibold text-slate-200">Campus Central Quad</span>
                      </div>
                      <span className="text-[11px] font-mono text-indigo-300">Live Campus Hub</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Academic, technical, and student extracurricular ecosystem connected in real time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Tech Indicator Badges (Zero-Chatbot, pure campus technology indicators) */}
              <div className="absolute -top-4 -left-4 sm:-left-6 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-indigo-500/30 shadow-xl shadow-black/40 hidden sm:flex items-center gap-3 animate-bounce [animation-duration:5s]">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Smart Architecture</div>
                  <div className="text-[11px] text-slate-400">Zero Fragmented Portals</div>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-4 sm:-right-6 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-purple-500/30 shadow-xl shadow-black/40 hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Verified Timings</div>
                  <div className="text-[11px] text-slate-400">Labs & Library Sync</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
