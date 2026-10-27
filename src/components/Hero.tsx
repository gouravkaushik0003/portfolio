import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';
import { TerminalPreview } from './TerminalPreview';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-border-subtle" aria-labelledby="hero-heading">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-canvas-elevated border border-border-default text-xs font-mono text-fg-muted">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
          </span>
          <span className="text-fg/90 font-medium">B.Tech Computer Engineering (2027)</span>
          <span className="text-fg-subtle">•</span>
          <span className="text-accent">{profile.status}</span>
        </div>

        {/* Main Introduction */}
        <div className="space-y-4 max-w-3xl">
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-fg font-sans leading-[1.15]"
          >
            Hi, I'm Gourav Kaushik.
          </h1>
          <p className="text-xl sm:text-2xl text-fg-muted font-normal tracking-tight leading-relaxed">
            Data Analyst & Data Scientist focused on building <span className="text-fg font-medium">useful</span>,{' '}
            <span className="text-fg font-medium">reliable</span>, and{' '}
            <span className="text-fg font-medium">well-crafted</span> systems.
          </p>
          <p className="text-base text-fg-muted leading-relaxed pt-2 max-w-2xl font-normal">
            I build data-driven applications, machine learning workflows, and practical business tools.
            My work revolves around solving operational friction—whether that means designing a single-page inventory
            system for local retail, building predictive churn models with XGBoost, or dissecting multi-year datasets with SQL and Python.
          </p>
        </div>

        {/* Action Controls & External Links */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            type="button"
            onClick={() => scrollTo('projects')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-fg text-fg-onAccent font-medium text-sm hover:bg-fg/90 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md bg-canvas-elevated hover:bg-canvas-overlay text-fg text-sm font-medium border border-border-default transition-colors focus:outline-none"
          >
            <Mail className="w-4 h-4 text-fg-muted" />
            <span>Get in Touch</span>
          </button>

          <div className="h-5 w-px bg-border-default mx-1 hidden sm:block" />

          <div className="flex items-center gap-2">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-mono text-fg-muted hover:text-fg hover:bg-canvas-elevated border border-border-subtle transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-mono text-fg-muted hover:text-accent hover:bg-canvas-elevated border border-border-subtle transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>

        {/* Code / System Terminal Preview */}
        <div className="pt-4 max-w-3xl">
          <TerminalPreview />
        </div>

      </div>
    </section>
  );
};
