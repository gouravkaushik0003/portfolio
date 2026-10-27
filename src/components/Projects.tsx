import React, { useState } from 'react';
import { Github, FolderGit2, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { profile } from '../data/profile';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'Full-Stack & Tools' | 'Machine Learning' | 'Data Analytics'>('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const categories = [
    { label: 'All Projects', value: 'all', count: projects.length },
    { label: 'Full-Stack & Tools', value: 'Full-Stack & Tools', count: projects.filter(p => p.category === 'Full-Stack & Tools').length },
    { label: 'Machine Learning', value: 'Machine Learning', count: projects.filter(p => p.category === 'Machine Learning').length },
    { label: 'Data Analytics', value: 'Data Analytics', count: projects.filter(p => p.category === 'Data Analytics').length },
  ];

  return (
    <section id="projects" className="py-20 border-b border-border-subtle" aria-labelledby="projects-heading">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">Featured Work</p>
            <h2 id="projects-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight text-fg">
              Selected Projects
            </h2>
            <p className="text-sm text-fg-muted max-w-xl">
              Real software and analytical pipelines verified from my public GitHub repositories.
              Each project addresses a specific operational requirement with clean architecture and reproducible code.
            </p>
          </div>

          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-fg-muted hover:text-accent transition-colors self-start sm:self-auto"
          >
            <Github className="w-3.5 h-3.5" />
            <span>View all repos on GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 border-b border-border-subtle pb-4">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveFilter(cat.value as any)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors flex items-center gap-2 ${
                activeFilter === cat.value
                  ? 'bg-fg text-canvas font-semibold'
                  : 'bg-canvas-elevated text-fg-muted hover:text-fg border border-border-subtle'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeFilter === cat.value ? 'bg-canvas/20 text-canvas' : 'bg-canvas text-fg-subtle'}`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Editorial Project List */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub Footnote */}
        <div className="p-4 rounded-lg border border-border-subtle bg-canvas-subtle flex items-center justify-between text-xs font-mono text-fg-muted">
          <span className="flex items-center gap-2">
            <FolderGit2 className="w-4 h-4 text-accent" />
            <span>Continuous learning & new open source projects hosted at github.com/gouravkaushik0003</span>
          </span>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-1 shrink-0 ml-4"
          >
            <span>Browse Repositories</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
};
