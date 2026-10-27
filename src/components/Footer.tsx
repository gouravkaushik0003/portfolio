import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-canvas text-xs text-fg-subtle">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright & Engineering Note */}
        <div className="space-y-1 text-center sm:text-left">
          <p className="text-fg-muted font-medium">
            © {new Date().getFullYear()} {profile.name}.
          </p>
          <p className="font-mono text-[11px] text-fg-subtle">
            Engineered with React, TypeScript & Tailwind CSS. Designed with restraint.
          </p>
        </div>

        {/* Center / Right: Nav & Links */}
        <div className="flex items-center gap-6">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg transition-colors flex items-center gap-1.5"
            aria-label="GitHub profile"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg transition-colors flex items-center gap-1.5"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <div className="h-3 w-px bg-border-subtle" />

          <button
            type="button"
            onClick={scrollToTop}
            className="hover:text-fg transition-colors flex items-center gap-1 font-mono text-[11px]"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
