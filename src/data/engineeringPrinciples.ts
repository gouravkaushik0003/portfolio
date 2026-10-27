export interface EngineeringDetail {
  title: string;
  category: string;
  projectOrigin: string;
  problem: string;
  approach: string;
  takeaway: string;
}

export const engineeringDetails: EngineeringDetail[] = [
  {
    title: "Preserving Model Objectivity via Isolated Resampling",
    category: "Machine Learning / Data Leakage",
    projectOrigin: "Customer Churn Prediction",
    problem: "When customer datasets have 75% loyal accounts and 25% churned accounts, models naturally learn to predict the majority class, achieving misleadingly high accuracy while failing to detect actual churners.",
    approach: "Applied SMOTE strictly to the training fold after train-test partitioning. By synthesizing minority instances exclusively in the training split, the test dataset remains an untouched reflection of real production data distributions.",
    takeaway: "High accuracy is meaningless if recall on the critical failure class is near zero. Evaluation must focus on ROC-AUC, Recall, and business risk tiers."
  },
  {
    title: "Lightweight Relational Storage Over Premature Distributed Systems",
    category: "System Design / Practicality",
    projectOrigin: "DYEgram Clothing Business Tracker",
    problem: "Small apparel retail shops require fast, resilient inventory checkout with zero cloud server overhead or subscription costs.",
    approach: "Leveraged an embedded SQLite database with atomic transactions and explicit foreign-key constraints directly connected to a Streamlit single-page UI. Persistent local images match catalog entries without requiring external blob storage.",
    takeaway: "Pick the simplest architecture that completely solves the problem. A robust local SQLite database with zero downtime beats an overengineered cloud stack for a single-store operation."
  },
  {
    title: "Separation of Storage Querying and Statistical Rendering",
    category: "Data Engineering / Query Optimization",
    projectOrigin: "HR Attrition & Analytics",
    problem: "Attempting complex multi-column groupings and aggregations purely in memory with client scripts slows analysis and duplicates logic.",
    approach: "Offloaded heavy cohort grouping, attrition percentage formulas, and categorical filtering to MySQL Workbench using optimized SQL queries before passing refined aggregate matrices to Python's Seaborn and Matplotlib.",
    takeaway: "Let the database engine perform what it was built for (filtering, joins, aggregation) and let visualization libraries handle visual presentation."
  }
];
