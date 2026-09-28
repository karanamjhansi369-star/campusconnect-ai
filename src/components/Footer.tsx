import React from 'react';
import { Mail, Phone, MapPin, Globe, Github, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070D1E] text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-500 flex items-center justify-center shadow-md shadow-indigo-600/30">
                <span className="text-white font-bold text-base tracking-tighter">CC</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                CampusConnect <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Making campus information easier to discover. Centralized collegiate platform for events, academics, student support, and campus communities.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="#home"
                aria-label="Campus Twitter"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#home"
                aria-label="Campus LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#home"
                aria-label="Campus Instagram"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#home"
                aria-label="Campus GitHub"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">Events</a>
              </li>
              <li>
                <a href="#resources" className="hover:text-white transition-colors">Resources</a>
              </li>
              <li>
                <a href="#campus-info" className="hover:text-white transition-colors">Campus Info</a>
              </li>
              <li>
                <a href="#clubs" className="hover:text-white transition-colors">Clubs</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#resources" className="hover:text-white transition-colors">Academic Resources</a>
              </li>
              <li>
                <a href="#resources" className="hover:text-white transition-colors">Career</a>
              </li>
              <li>
                <a href="#resources" className="hover:text-white transition-colors">Coding</a>
              </li>
              <li>
                <a href="#resources" className="hover:text-white transition-colors">Student Services</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <span className="text-slate-300">support@campusconnect.edu</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-slate-300">Campus Help Desk</div>
                  <div className="text-xs text-slate-500 font-mono">+1 (800) 555-0199 (Ext. 4401)</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-xs">
                  Central Admin Block, University Avenue Campus
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 CampusConnect AI. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-slate-400 transition-colors">Student Privacy Notice</a>
            <a href="#home" className="hover:text-slate-400 transition-colors">Terms of Campus Access</a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
