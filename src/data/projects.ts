export interface Project {
  id: string;
  title: string;
  role: string;
  category: 'Full-Stack & Tools' | 'Machine Learning' | 'Data Analytics';
  problem: string;
  solution: string;
  stack: string[];
  engineeringHighlights: string[];
  technicalSnippet?: {
    language: string;
    filename: string;
    code: string;
    caption: string;
  };
  metrics?: { label: string; value: string }[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'dyegram-clothing-tracker',
    title: 'DYEgram Clothing Business Tracker',
    role: 'Full-Stack Developer & Designer',
    category: 'Full-Stack & Tools',
    problem: 'Independent retail apparel businesses often rely on disconnected notebooks or complex spreadsheets, leading to inventory discrepancies, slow in-store checkout, and fragmented cash-flow tracking.',
    solution: 'Engineered a modern, single-page operations tracker optimized for quick shop-floor usage with dynamic image-supported catalog management, real-time stock depletion, and instant WhatsApp receipt generation.',
    stack: ['Python', 'Streamlit', 'SQLite3', 'Pandas', 'Plotly Express'],
    engineeringHighlights: [
      'Designed a normalized SQLite schema with foreign-key constraints linking catalogs, sales transactions, and overhead expenses.',
      'Implemented atomic-like inventory updates to ensure stock counts decrement immediately upon confirmed sale.',
      'Added automated threshold detection flagging catalogs with ≤ 5 units remaining to trigger timely reorders.',
      'Constructed a dynamic WhatsApp receipt link generator encoding transaction itemization directly into URL query parameters for zero-friction client sharing.',
      'Integrated interactive Plotly Express financial dashboards comparing revenue vs. expenses with direct CSV export capabilities.'
    ],
    technicalSnippet: {
      language: 'sql',
      filename: 'database.py (Schema Design)',
      code: `CREATE TABLE IF NOT EXISTS catalogs (
    catalog_id INTEGER PRIMARY KEY AUTOINCREMENT,
    catalog_name TEXT UNIQUE NOT NULL,
    total_pieces INTEGER NOT NULL,
    sold_pieces INTEGER DEFAULT 0,
    cost_price REAL NOT NULL,
    selling_price REAL NOT NULL
);

CREATE TABLE IF NOT EXISTS sales (
    sale_id INTEGER PRIMARY KEY AUTOINCREMENT,
    catalog_id INTEGER,
    pieces_sold INTEGER NOT NULL,
    total_amount REAL NOT NULL,
    sale_date DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (catalog_id) REFERENCES catalogs (catalog_id)
);`,
      caption: 'Relational schema enforcing referential integrity and audit trails for retail inventory movements.'
    },
    metrics: [
      { label: 'Architecture', value: 'Single-Page Reactive' },
      { label: 'Storage', value: 'SQLite Local' },
      { label: 'Alert Threshold', value: '≤ 5 Units Low Stock' }
    ],
    githubUrl: 'https://github.com/gouravkaushik0003/dyegram-clothing-tracker',
    featured: true
  },
  {
    id: 'customer-churn-prediction',
    title: 'Telco Customer Churn Prediction & Risk Engine',
    role: 'ML Engineer & Data Analyst',
    category: 'Machine Learning',
    problem: 'Subscription telecommunications providers suffer heavy recurring revenue loss when at-risk customers cancel without early intervention.',
    solution: 'Built an end-to-end Machine Learning pipeline that cleans and transforms customer telemetry, counters severe class imbalance with SMOTE, benchmarks multiple classifiers, and generates stratified customer risk scores.',
    stack: ['Python', 'Scikit-Learn', 'XGBoost', 'SMOTE (Imbalanced-Learn)', 'Pandas', 'NumPy', 'Seaborn'],
    engineeringHighlights: [
      'Identified and resolved severe target class imbalance using SMOTE (Synthetic Minority Over-sampling Technique) strictly on training partitions to prevent data leakage.',
      'Constructed a comparative evaluation harness evaluating Logistic Regression, Random Forest, and XGBoost across ROC-AUC, Recall, and F1-Score metrics.',
      'Extracted global feature importances isolating month-to-month contracts, fiber optic internet, and electronic check payments as primary churn drivers.',
      'Formulated risk-scoring thresholds categorizing accounts into High, Medium, and Low risk bands, paired with actionable retention strategies (e.g., auto-pay migration incentives).'
    ],
    technicalSnippet: {
      language: 'python',
      filename: 'churn_pipeline.py (Balancing & Training)',
      code: `# Address class imbalance to prevent bias toward majority class
from imblearn.over_sampling import SMOTE
from xgboost import XGBClassifier

smote = SMOTE(random_state=42)
X_train_res, y_train_res = smote.fit_resample(X_train, y_train)

# Train gradient-boosted tree model for non-linear feature interaction
model = XGBClassifier(
    n_estimators=150,
    max_depth=4,
    learning_rate=0.08,
    eval_metric='logloss',
    random_state=42
)
model.fit(X_train_res, y_train_res)`,
      caption: 'Synthetic over-sampling applied strictly to training partitions to preserve unbiased validation test distributions.'
    },
    metrics: [
      { label: 'Dataset', value: 'Telco Churn' },
      { label: 'Imbalance Handling', value: 'SMOTE Resampling' },
      { label: 'Algorithms', value: 'LR, RF, XGBoost' }
    ],
    githubUrl: 'https://github.com/gouravkaushik0003/customer-churn-prediction',
    featured: true
  },
  {
    id: 'hr-analytics-employee-attrition',
    title: 'HR Analytics & Workforce Attrition Intelligence',
    role: 'Data Analyst & SQL Specialist',
    category: 'Data Analytics',
    problem: 'High employee turnover creates significant recruitment overhead and knowledge loss, yet organizational leaders frequently lack granular visibility into the true root drivers of attrition.',
    solution: 'Executed an exploratory data analysis combining structured SQL querying with Python statistical visualizations across 1,470 employee records to isolate flight risks.',
    stack: ['Python', 'MySQL Workbench', 'SQL', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    engineeringHighlights: [
      'Wrote multi-table SQL queries in MySQL Workbench to aggregate employee cohorts and compute normalized attrition baselines (16.12% overall turnover).',
      'Demonstrated a statistically significant divergence in attrition among employees clocking OverTime versus regular work schedules.',
      'Correlated Job Satisfaction tiers against turnover rates, revealing Level 1 satisfaction triggered 22.8% attrition compared to 11.3% for satisfied peers.',
      'Mapped correlation matrices across compensation, total working years, and promotional stagnation points.'
    ],
    technicalSnippet: {
      language: 'sql',
      filename: 'attrition_queries.sql',
      code: `-- Cohort Attrition Rate & OverTime Impact Analysis
SELECT 
    OverTime,
    COUNT(*) AS total_employees,
    SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) AS churned_count,
    ROUND(SUM(CASE WHEN Attrition = 'Yes' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS attrition_rate_pct
FROM employee_records
GROUP BY OverTime;`,
      caption: 'SQL aggregation demonstrating dramatic turnover variance driven by overtime workload distribution.'
    },
    metrics: [
      { label: 'Sample Size', value: '1,470 Employees' },
      { label: 'Baseline Rate', value: '16.12% Attrition' },
      { label: 'Query Engine', value: 'MySQL' }
    ],
    githubUrl: 'https://github.com/gouravkaushik0003/hr-analytics-employee-attrition',
    featured: false
  },
  {
    id: 'superstore-sales-eda',
    title: 'Superstore Retail Sales & Regional Profitability EDA',
    role: 'Data Analyst',
    category: 'Data Analytics',
    problem: 'Aggregated top-line sales figures often conceal regional margin erosion and unprofitable product category discount patterns.',
    solution: 'Analyzed 9,800+ commercial transactions using Python to dissect multi-year seasonal demand, geographic profitability hubs, and category performance.',
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
    engineeringHighlights: [
      'Cleaned and processed raw transaction records, parsing temporal attributes to extract quarterly and monthly seasonal spikes.',
      'Revealed that while Technology generated peak sales revenue (~$827K), aggressive discounting in specific Furniture sub-categories severely compressed net margins.',
      'Clustered geographic sales concentration, highlighting California and New York as primary revenue drivers for targeted supply chain prioritization.'
    ],
    technicalSnippet: {
      language: 'python',
      filename: 'eda_profitability.py',
      code: `# Segment category margins against discount elasticity
category_margins = df.groupby('Category').agg({
    'Sales': 'sum',
    'Profit': 'sum',
    'Discount': 'mean'
}).assign(
    Profit_Margin_Pct=lambda x: (x['Profit'] / x['Sales']) * 100
).sort_values(by='Sales', ascending=False)`,
      caption: 'Dynamic margin analysis exposing how discounting policies impact real bottom-line profitability.'
    },
    metrics: [
      { label: 'Records', value: '9,800+ Orders' },
      { label: 'Top Revenue', value: 'Technology ($827K)' },
      { label: 'Analysis', value: 'Time-Series & Geo' }
    ],
    githubUrl: 'https://github.com/gouravkaushik0003/superstore-sales-eda',
    featured: false
  }
];
