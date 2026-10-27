import React, { useState } from 'react';
import { Terminal, Check, Copy } from 'lucide-react';

export const TerminalPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'pipeline'>('profile');
  const [copied, setCopied] = useState(false);

  const profileSnippet = `// gourav_kaushik.json
{
  "name": "Gourav Kaushik",
  "role": "Data Analyst & Data Scientist",
  "education": "B.Tech Computer Engineering (2023 - 2027)",
  "verified_repos": 5,
  "core_stack": [
    "Python", "SQL", "Power BI", "Advanced Excel",
    "Scikit-Learn", "XGBoost", "Data Analysis",
    "Data Cleaning", "Data Visualization"
  ],
  "focus_areas": [
    "Machine Learning & Risk Scoring",
    "Operational Inventory & Retail Tooling",
    "Exploratory Data Analysis & Business Intelligence"
  ],
  "status": "Available for internships & full-time engineering roles"
}`;

  const pipelineSnippet = `# ml_pipeline_workflow.py
def train_retention_pipeline(df):
    """
    End-to-end churn risk pipeline with isolated SMOTE resampling
    and gradient-boosted decision tree scoring.
    """
    X_train, X_test, y_train, y_test = train_test_split(df.drop('churn', axis=1), df['churn'], test_size=0.2)
    
    # Isolate synthetic over-sampling to train set only
    X_res, y_res = SMOTE(random_state=42).fit_resample(X_train, y_train)
    
    model = XGBClassifier(n_estimators=150, learning_rate=0.08)
    model.fit(X_res, y_res)
    
    return evaluate_risk_tiers(model, X_test, y_test)`;

  const currentSnippet = activeTab === 'profile' ? profileSnippet : pipelineSnippet;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border border-border-default bg-canvas-subtle overflow-hidden font-mono text-xs shadow-xl">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-canvas-surface border-b border-border-subtle select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80 inline-block" />
          </div>
          <span className="text-fg-subtle text-[11px] ml-2 flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-accent" />
            <span>developer-inspect</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Tabs */}
          <div className="flex items-center bg-canvas-elevated rounded p-0.5 border border-border-subtle text-[11px]">
            <button
              type="button"
              onClick={() => setActiveTab('profile')}
              className={`px-2 py-0.5 rounded transition-colors ${
                activeTab === 'profile'
                  ? 'bg-canvas text-accent font-medium'
                  : 'text-fg-muted hover:text-fg'
              }`}
            >
              profile.json
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('pipeline')}
              className={`px-2 py-0.5 rounded transition-colors ${
                activeTab === 'pipeline'
                  ? 'bg-canvas text-accent font-medium'
                  : 'text-fg-muted hover:text-fg'
              }`}
            >
              workflow.py
            </button>
          </div>

          {/* Copy Button */}
          <button
            type="button"
            onClick={handleCopy}
            className="p-1 text-fg-subtle hover:text-fg hover:bg-canvas-elevated rounded transition-colors"
            title="Copy snippet"
            aria-label="Copy snippet"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="p-4 overflow-x-auto text-fg-muted leading-relaxed font-mono">
        <pre className="text-fg/90">
          <code>{currentSnippet}</code>
        </pre>
      </div>

      {/* Terminal Footer Bar */}
      <div className="px-3.5 py-1.5 bg-canvas-surface/60 border-t border-border-subtle flex items-center justify-between text-[11px] text-fg-subtle">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
            <span>git:main</span>
          </span>
          <span>utf-8</span>
        </div>
        <span>verified repository data</span>
      </div>
    </div>
  );
};
