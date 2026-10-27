import React from 'react';
import { skillCategories } from '../data/skills';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-b border-border-subtle" aria-labelledby="skills-heading">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">Technical Stack</p>
          <h2 id="skills-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight text-fg">
            Skills & Capabilities
          </h2>
          <p className="text-sm text-fg-muted max-w-2xl leading-relaxed">
            Technologies, libraries, and developer tools actively used across my projects and coursework.
            Grouped by domain with concrete operational context rather than arbitrary proficiency scores.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="p-6 rounded-xl border border-border-default bg-canvas-subtle space-y-4 hover:border-border-hover transition-colors"
            >
              <div>
                <h3 className="text-base font-semibold text-fg tracking-tight">
                  {category.category}
                </h3>
                <p className="text-xs text-fg-subtle pt-1 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills List */}
              <div className="space-y-2.5 pt-2 border-t border-border-subtle">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                    <span className="font-mono font-medium text-fg bg-canvas-elevated px-2 py-0.5 rounded border border-border-subtle self-start">
                      {skill.name}
                    </span>
                    <span className="text-fg-muted sm:text-right text-[11px] leading-relaxed">
                      {skill.context}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
