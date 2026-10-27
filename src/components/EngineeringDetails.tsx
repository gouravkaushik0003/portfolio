import React from 'react';
import { Layers, GitCommit, Split } from 'lucide-react';
import { engineeringDetails } from '../data/engineeringPrinciples';

export const EngineeringDetails: React.FC = () => {
  return (
    <section id="engineering" className="py-20 border-b border-border-subtle" aria-labelledby="engineering-heading">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">Architecture & Decision-Making</p>
          <h2 id="engineering-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight text-fg">
            Engineering Details & Case Studies
          </h2>
          <p className="text-sm text-fg-muted max-w-2xl leading-relaxed">
            Practical trade-offs, architecture decisions, and problem-solving methods derived from real project commits.
          </p>
        </div>

        {/* Detailed Cards */}
        <div className="space-y-6">
          {engineeringDetails.map((detail, idx) => (
            <div
              key={detail.title}
              className="p-6 rounded-xl border border-border-default bg-canvas-subtle space-y-4 hover:border-border-hover transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-fg-subtle">
                    0{idx + 1}
                  </span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-canvas-elevated text-accent border border-border-subtle">
                    {detail.category}
                  </span>
                </div>
                <span className="text-xs font-mono text-fg-subtle">
                  Origin: <span className="text-fg-muted">{detail.projectOrigin}</span>
                </span>
              </div>

              <h3 className="text-lg font-semibold text-fg tracking-tight">
                {detail.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed pt-2">
                <div className="p-3.5 rounded-lg bg-canvas-elevated/70 border border-border-subtle space-y-1.5">
                  <div className="flex items-center gap-1.5 font-medium text-fg">
                    <Split className="w-3.5 h-3.5 text-accent" />
                    <span>The Challenge</span>
                  </div>
                  <p className="text-fg-muted">
                    {detail.problem}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-canvas-elevated/70 border border-border-subtle space-y-1.5">
                  <div className="flex items-center gap-1.5 font-medium text-fg">
                    <Layers className="w-3.5 h-3.5 text-success" />
                    <span>The Technical Solution</span>
                  </div>
                  <p className="text-fg-muted">
                    {detail.approach}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-border-subtle flex items-start gap-2 text-xs">
                <GitCommit className="w-3.5 h-3.5 text-fg-subtle shrink-0 mt-0.5" />
                <p className="text-fg-subtle">
                  <span className="font-medium text-fg-muted">Takeaway: </span>
                  {detail.takeaway}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
