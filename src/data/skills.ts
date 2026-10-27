export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    context: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    description: "Core programming and query languages used for systems, data analysis, and tooling.",
    skills: [
      { name: "Python", context: "Primary language for ML, scripting, data pipelines & Streamlit apps" },
      { name: "SQL", context: "Relational data querying, cohort aggregation, and MySQL / SQLite management" },
      { name: "C / C++", context: "Foundational computer science, data structures, and algorithms" },
      { name: "TypeScript / JavaScript", context: "Modern web interfaces, component architecture, and API integration" },
      { name: "HTML5 / CSS3", context: "Semantic web layouts, accessible styling, and responsive design" }
    ]
  },
  {
    category: "Machine Learning & Data Science",
    description: "Algorithms, feature engineering, and statistical modeling applied to real-world datasets.",
    skills: [
      { name: "Scikit-Learn", context: "Classification models, cross-validation, and preprocessing pipelines" },
      { name: "XGBoost", context: "Gradient-boosted decision trees and feature importance extraction" },
      { name: "SMOTE (Imbalanced-Learn)", context: "Synthetic minority over-sampling for skewed class distributions" },
      { name: "Data Cleaning & Preprocessing", context: "Null imputation, categorical encoding, outlier handling, and pipeline hygiene" },
      { name: "Data Analysis & EDA", context: "Hypothesis testing, multi-variate correlation, and distribution analysis" }
    ]
  },
  {
    category: "Databases & Storage",
    description: "Relational modeling, transaction integrity, and local persistence.",
    skills: [
      { name: "SQLite3", context: "Lightweight transactional persistence for desktop and embedded apps" },
      { name: "MySQL", context: "Relational schema management, complex joins, and analytical querying" },
      { name: "MySQL Workbench", context: "Visual schema design, query profiling, and index inspection" },
      { name: "Schema Design", context: "Normalization, primary & foreign key constraints, and audit logging" }
    ]
  },
  {
    category: "Business Intelligence & Visualization",
    description: "Interactive reporting tools, executive dashboards, and statistical plots.",
    skills: [
      { name: "Power BI", context: "Executive dashboards, interactive KPI tracking, and automated data reporting" },
      { name: "Advanced Excel", context: "Pivot tables, advanced lookups (XLOOKUP/VLOOKUP), data cleaning & conditional formulas" },
      { name: "Data Visualization", context: "Interactive dashboards and publication-ready analytical charts" },
      { name: "Streamlit & Plotly", context: "Rapid full-stack interactive data apps and responsive charts" },
      { name: "Matplotlib & Seaborn", context: "Statistical distribution graphs and correlation heatmaps" },
      { name: "React & Tailwind CSS", context: "Modern responsive web applications and dashboards" }
    ]
  },
  {
    category: "Developer Tools & Workflow",
    description: "Version control, development environments, and build pipelines.",
    skills: [
      { name: "Git & GitHub", context: "Feature branching, commit hygiene, pull requests, and documentation" },
      { name: "VS Code", context: "Configured developer environment with Jupyter & Python extensions" },
      { name: "Jupyter Notebooks", context: "Iterative analytical modeling and documented research runs" },
      { name: "Vite", context: "Fast modern bundler and frontend development server" }
    ]
  }
];
