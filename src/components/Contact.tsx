import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight, Clock } from 'lucide-react';
import { profile } from '../data/profile';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-b border-border-subtle" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">Get in Touch</p>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg">
            Let's build something useful.
          </h2>
          <p className="text-base text-fg-muted leading-relaxed font-normal">
            I am currently seeking software engineering and data analytics internship opportunities for 2025/2026.
            Whether you have an interesting problem to solve, want to review my code, or wish to connect, feel free to reach out.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Email Card with Copy & Mailto */}
          <div className="p-6 rounded-xl border border-border-default bg-canvas-subtle hover:border-border-hover transition-colors space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="p-2 w-fit rounded-lg bg-canvas-elevated border border-border-subtle text-accent">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold text-fg">Direct Email</h3>
              <p className="text-xs text-fg-muted font-mono break-all">
                {profile.email}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="flex-1 text-center py-2 px-3 rounded-md text-xs font-medium bg-canvas-elevated hover:bg-canvas-overlay text-fg border border-border-default transition-colors"
              >
                Send Email
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-md bg-canvas-elevated hover:bg-canvas-overlay text-fg-muted hover:text-fg border border-border-default transition-colors focus:outline-none"
                title="Copy email to clipboard"
                aria-label="Copy email address to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* LinkedIn Profile Card */}
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl border border-border-default bg-canvas-subtle hover:border-border-hover transition-colors space-y-4 flex flex-col justify-between group focus:outline-none"
          >
            <div className="space-y-2">
              <div className="p-2 w-fit rounded-lg bg-canvas-elevated border border-border-subtle text-accent group-hover:border-accent/40 transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-fg group-hover:text-accent transition-colors">LinkedIn</h3>
                <ArrowUpRight className="w-4 h-4 text-fg-subtle group-hover:text-accent transition-colors" />
              </div>
              <p className="text-xs text-fg-muted leading-relaxed">
                Connect for professional networking, recommendations, and career updates.
              </p>
            </div>
            <span className="text-xs font-mono text-accent pt-2 block">
              /in/gourav-kaushik-45aa66307
            </span>
          </a>

          {/* GitHub Profile Card */}
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl border border-border-default bg-canvas-subtle hover:border-border-hover transition-colors space-y-4 flex flex-col justify-between group focus:outline-none"
          >
            <div className="space-y-2">
              <div className="p-2 w-fit rounded-lg bg-canvas-elevated border border-border-subtle text-accent group-hover:border-accent/40 transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-fg group-hover:text-accent transition-colors">GitHub</h3>
                <ArrowUpRight className="w-4 h-4 text-fg-subtle group-hover:text-accent transition-colors" />
              </div>
              <p className="text-xs text-fg-muted leading-relaxed">
                Explore source repositories, commit history, issue discussions, and project setups.
              </p>
            </div>
            <span className="text-xs font-mono text-accent pt-2 block">
              @gouravkaushik0003
            </span>
          </a>

        </div>

        {/* Availability Footer Note */}
        <div className="p-4 rounded-lg bg-canvas-subtle border border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-fg-muted">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent shrink-0" />
            <span>Timezone: IST (UTC+5:30) • Flexible for global remote collaboration</span>
          </div>
          <span className="font-mono text-fg-subtle">
            Response time: usually within 24 hours
          </span>
        </div>

      </div>
    </section>
  );
};
