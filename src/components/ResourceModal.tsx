import React from 'react';
import { X, ExternalLink, FileText, CheckCircle2, Bookmark } from 'lucide-react';
import { StudentResource } from '../types';

interface ResourceModalProps {
  resource: StudentResource | null;
  onClose: () => void;
  onLinkAccess: (linkTitle: string) => void;
}

export const ResourceModal: React.FC<ResourceModalProps> = ({ resource, onClose, onLinkAccess }) => {
  if (!resource) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl text-white p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1">
            {resource.category}
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            {resource.title}
          </h3>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            {resource.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-6 pb-4 border-b border-slate-800">
          <span className="text-slate-500 font-mono">Category Tags:</span>
          {resource.tags.map((tag, idx) => (
            <span key={idx} className="bg-slate-800/80 px-2 py-0.5 rounded text-slate-300">
              {tag}
            </span>
          ))}
        </div>

        {/* Portals & Direct Links */}
        <div className="space-y-3 mb-8">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
            Available Official Links & Portals
          </h4>
          <div className="space-y-2">
            {resource.quickLinks.map((link, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onLinkAccess(link.label)}
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/60 transition-all text-left group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                    {link.label}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-indigo-300 shrink-0 transition-colors" />
              </button>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
