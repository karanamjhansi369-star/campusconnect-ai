import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight, Bot } from 'lucide-react';
import { openN8nChat } from './N8nChatWidget';

interface NavbarProps {
  onExploreCampus: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onExploreCampus }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link highlight on scroll
      const sections = ['home', 'events', 'resources', 'campus-info', 'clubs', 'about'];
      const scrollPos = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Events', href: '#events', id: 'events' },
    { name: 'Resources', href: '#resources', id: 'resources' },
    { name: 'Campus Info', href: '#campus-info', id: 'campus-info' },
    { name: 'Clubs', href: '#clubs', id: 'clubs' },
    { name: 'About', href: '#about', id: 'about' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B132B]/90 backdrop-blur-md border-b border-indigo-950/60 shadow-lg shadow-black/20 py-3.5'
          : 'bg-[#0B132B] border-b border-slate-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark (Display Face, Single Text Element) */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-white hover:opacity-95 transition-opacity group"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-500 flex items-center justify-center shadow-md shadow-indigo-600/30 group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-base tracking-tighter">CC</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5 font-display">
                CampusConnect <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-extrabold text-sm">AI</span>
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Clean Text with Hover Underline) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Highlighted Primary Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              type="button"
              onClick={openN8nChat}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-indigo-300 bg-indigo-950/60 hover:bg-indigo-900/60 border border-indigo-500/30 rounded-lg hover:text-white transition-all cursor-pointer whitespace-nowrap"
            >
              <Bot className="w-4 h-4 text-indigo-400" />
              <span>AI Chat</span>
            </button>

            <button
              onClick={onExploreCampus}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg shadow-sm shadow-indigo-600/30 hover:shadow-indigo-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              <span>Explore Campus</span>
              <ArrowRight className="w-4 h-4 text-blue-200" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B132B] border-b border-indigo-950/80 px-4 pt-3 pb-5 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid gap-1 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-indigo-950/60 text-indigo-300 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-800/60 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openN8nChat();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-indigo-300 bg-indigo-950/80 border border-indigo-500/30 rounded-lg hover:text-white transition-colors"
            >
              <Bot className="w-4 h-4 text-indigo-400" />
              <span>Ask Campus AI Assistant</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onExploreCampus();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-sm"
            >
              <span>Explore Campus</span>
              <ArrowRight className="w-4 h-4 text-blue-200" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
