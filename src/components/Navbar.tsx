import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Engineering', href: '#engineering' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-canvas/90 backdrop-blur-md border-b border-border-subtle py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a
          href="#"
          className="flex items-center gap-2 group text-fg focus:outline-none"
          aria-label="Gourav Kaushik - Home"
        >
          <span className="font-mono text-xs font-semibold px-2 py-1 rounded bg-canvas-elevated border border-border-default text-accent group-hover:border-accent/40 transition-colors">
            GK
          </span>
          <span className="font-medium text-sm tracking-tight text-fg group-hover:text-accent transition-colors hidden sm:inline">
            gourav.dev
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          <ul className="flex items-center gap-6 text-sm text-fg-muted">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="hover:text-fg transition-colors font-medium py-1"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-px bg-border-subtle" />

          {/* External Social Profiles */}
          <div className="flex items-center gap-3">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-fg-muted hover:text-fg hover:bg-canvas-elevated rounded transition-colors"
              aria-label="GitHub Profile (opens in new tab)"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-fg-muted hover:text-accent hover:bg-canvas-elevated border border-border-subtle hover:border-accent/30 rounded transition-colors"
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-fg-muted hover:text-fg hover:bg-canvas-elevated rounded-md border border-border-subtle transition-colors focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-canvas-subtle border-b border-border-subtle px-6 py-4 animate-in fade-in duration-150">
          <ul className="flex flex-col space-y-3 text-sm text-fg-muted">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block py-1 hover:text-fg transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-4 mt-3 border-t border-border-subtle flex items-center gap-4 text-xs">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-fg-muted hover:text-fg"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-accent hover:underline"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
