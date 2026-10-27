import React from 'react';
import { Terminal, Database, Cpu, Compass } from 'lucide-react';
import { profile } from '../data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-border-subtle" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">Background & Focus</p>
          <h2 id="about-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight text-fg">
            About Me
          </h2>
        </div>

        {/* Narrative */}
        <div className="space-y-5 text-fg-muted leading-relaxed text-base sm:text-lg font-normal max-w-3xl">
          <p>
            I am an undergraduate student pursuing my <span className="text-fg font-medium">{profile.degree}</span> (expected graduation {profile.graduationYear}).
            My engineering work centers on building software that solves concrete problems—ranging from operational business workflows to end-to-end data pipelines.
          </p>
          <p>
            When tackling a project, I prefer clarity and pragmatism over technical complexity for its own sake. When building{' '}
            <span className="text-fg font-medium">DYEgram</span>, that meant choosing an embedded SQLite database and a reactive single-page layout so retail operations could run reliably with zero cloud latency.
            When building the <span className="text-fg font-medium">Customer Churn Risk Engine</span>, it meant prioritizing data hygiene and isolating SMOTE over-sampling strictly within training folds to avoid misleading evaluation metrics.
          </p>
          <p>
            I spend most of my time working in <span className="text-fg font-medium">Python</span>, writing analytical <span className="text-fg font-medium">SQL</span> queries,
            experimenting with classification pipelines using <span className="text-fg font-medium">Scikit-Learn</span> and <span className="text-fg font-medium">XGBoost</span>, and developing web interfaces that prioritize usability and responsiveness.
          </p>
        </div>

        {/* Engineering Tenets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <div className="p-5 rounded-lg border border-border-default bg-canvas-subtle space-y-3">
            <div className="flex items-center gap-2.5 text-fg font-medium text-sm">
              <Database className="w-4 h-4 text-accent" />
              <span>Data Hygiene & Integrity</span>
            </div>
            <p className="text-xs text-fg-muted leading-relaxed">
              Machine learning models and analytical dashboards are only as reliable as the underlying dataset. I prioritize rigorous null handling, categorical encoding, and preventing data leakage before model tuning.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-border-default bg-canvas-subtle space-y-3">
            <div className="flex items-center gap-2.5 text-fg font-medium text-sm">
              <Terminal className="w-4 h-4 text-accent" />
              <span>Pragmatic Architecture</span>
            </div>
            <p className="text-xs text-fg-muted leading-relaxed">
              I favor the simplest stack that reliably fulfills business requirements. A well-indexed SQLite database and a clean single-script runner often outperforms distributed systems in maintenance and operational speed.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-border-default bg-canvas-subtle space-y-3">
            <div className="flex items-center gap-2.5 text-fg font-medium text-sm">
              <Cpu className="w-4 h-4 text-accent" />
              <span>Measurable Business Impact</span>
            </div>
            <p className="text-xs text-fg-muted leading-relaxed">
              Rather than viewing software as isolated code, I tie features to tangible business outcomes: reducing inventory stockouts, identifying high-risk churn cohorts, or highlighting unprofitable discount tiers.
            </p>
          </div>

          <div className="p-5 rounded-lg border border-border-default bg-canvas-subtle space-y-3">
            <div className="flex items-center gap-2.5 text-fg font-medium text-sm">
              <Compass className="w-4 h-4 text-accent" />
              <span>Transparent Documentation</span>
            </div>
            <p className="text-xs text-fg-muted leading-relaxed">
              Every repository includes clear setup instructions, architecture breakdowns, schema definitions, and reproducible workflow steps to ensure peer review and ongoing maintainability.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
