import React, { useState } from 'react';
import { Github, Code2, ChevronDown, ChevronUp, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

  return (
    <article
      className="p-6 sm:p-8 rounded-xl border border-border-default bg-canvas-subtle hover:border-border-hover transition-all duration-200 space-y-6"
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Header: Title, Category & Links */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-fg-subtle">
              #{String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-canvas-elevated text-accent border border-border-subtle">
              {project.category}
            </span>
          </div>
          <h3
            id={`project-title-${project.id}`}
            className="text-xl sm:text-2xl font-semibold text-fg tracking-tight hover:text-accent transition-colors"
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <span>{project.title}</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </h3>
          <p className="text-xs font-mono text-fg-subtle">
            Role: <span className="text-fg-muted">{project.role}</span>
          </p>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3 self-start">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono text-fg hover:text-accent bg-canvas-elevated border border-border-default hover:border-accent/40 transition-colors focus:outline-none"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <Github className="w-3.5 h-3.5" />
            <span>Source Code</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium text-canvas bg-accent hover:bg-accent/90 transition-colors"
            >
              <span>Live Demo</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      {/* Problem & Solution Editorial Block */}
      <div className="space-y-3 text-sm text-fg-muted leading-relaxed">
        <div>
          <span className="text-fg font-medium">The Problem: </span>
          <span>{project.problem}</span>
        </div>
        <div>
          <span className="text-fg font-medium">The Implementation: </span>
          <span>{project.solution}</span>
        </div>
      </div>

      {/* Tech Stack Monospace Tags */}
      <div className="space-y-2">
        <p className="text-[11px] font-mono uppercase tracking-wider text-fg-subtle">Stack & Libraries</p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded bg-canvas-elevated text-fg-muted font-mono text-xs border border-border-subtle"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Engineering Highlights List */}
      <div className="space-y-2 pt-1 border-t border-border-subtle">
        <p className="text-[11px] font-mono uppercase tracking-wider text-fg-subtle pt-2">Key Engineering Decisions</p>
        <ul className="space-y-2 text-xs text-fg-muted">
          {project.engineeringHighlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
              <span className="leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Metrics Row if present */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="grid grid-cols-3 gap-3 pt-2">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="p-2.5 rounded bg-canvas-elevated border border-border-subtle">
              <p className="text-[10px] font-mono uppercase tracking-wider text-fg-subtle">{metric.label}</p>
              <p className="text-xs font-mono font-medium text-fg pt-0.5">{metric.value}</p>
            </div>
          ))}
        </div>
      )}

      {/* Technical Code / Schema Deep Dive Toggle */}
      {project.technicalSnippet && (
        <div className="pt-2 border-t border-border-subtle">
          <button
            type="button"
            onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
            className="w-full flex items-center justify-between py-2 text-xs font-mono text-accent hover:text-accent/80 transition-colors focus:outline-none"
            aria-expanded={showTechnicalDetails}
          >
            <span className="flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>
                {showTechnicalDetails ? 'Hide Implementation Snippet' : 'Inspect Architecture / Code Excerpt'}
              </span>
            </span>
            {showTechnicalDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showTechnicalDetails && (
            <div className="mt-3 rounded-lg border border-border-subtle bg-canvas overflow-hidden animate-in fade-in duration-150">
              <div className="px-3.5 py-1.5 bg-canvas-elevated border-b border-border-subtle flex items-center justify-between text-[11px] font-mono text-fg-subtle">
                <span>{project.technicalSnippet.filename}</span>
                <span className="uppercase">{project.technicalSnippet.language}</span>
              </div>
              <pre className="p-4 text-xs font-mono text-fg-muted overflow-x-auto leading-relaxed bg-[#0a0d12]">
                <code>{project.technicalSnippet.code}</code>
              </pre>
              <div className="px-3.5 py-2 bg-canvas-surface border-t border-border-subtle text-[11px] text-fg-subtle font-sans">
                {project.technicalSnippet.caption}
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
};
