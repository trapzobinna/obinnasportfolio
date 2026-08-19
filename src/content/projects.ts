import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Guardian AI v4.1",
    slug: "guardian-ai",
    summary: "Hybrid DistilBERT + BiLSTM phishing email detection system. Achieved 98.97% accuracy on a 46,744-email composite dataset.",
    problem: "Traditional phishing detection relies on static heuristics that fail against sophisticated, AI-generated attacks.",
    approach: "Designed a hybrid model using DistilBERT for contextual embeddings and BiLSTM for sequential pattern recognition, deployed via an interactive Streamlit dashboard.",
    architecture: "Transformer + BiLSTM hybrid architecture with a local inference pipeline and Streamlit front-end.",
    techStack: ["Python", "DistilBERT", "BiLSTM", "Streamlit", "PyTorch"],
    metrics: ["98.97% Accuracy", "0.9993 ROC-AUC", "46,744 emails analyzed"],
    githubUrl: null, // TODO: Obinna add real link
    liveUrl: null, // TODO: Obinna add real link
    demoVideo: "/demos/guardian-ai.mp4", // TODO: Add sped-up screen recording at /public/demos/
    status: "live",
    tags: ["AI/ML", "Cybersecurity", "Academic"],
    featured: true
  },
  {
    title: "Lucid",
    slug: "lucid",
    summary: "AI-powered information diet aggregator with dynamic Google News RSS pipeline and relevance scoring.",
    problem: "Information overload from diverse news sources makes it difficult to extract relevant signal from noise.",
    approach: "Built a pipeline that ingests RSS feeds, processes them via sentence-transformers, and uses Claude API to summarize and score relevance based on user preferences.",
    architecture: "FastAPI backend orchestrating the pipeline, SQLite for storage, and a React/Vite frontend for consumption.",
    techStack: ["FastAPI", "React", "Vite", "SQLite", "Claude API", "sentence-transformers"],
    metrics: ["Automated RSS Pipeline", "AI Summarization"],
    githubUrl: null, // TODO: Obinna add real link
    liveUrl: null, // TODO: Obinna add real link
    demoVideo: null, // TODO: Add sped-up screen recording at /public/demos/
    status: "live",
    tags: ["AI/ML", "Full-Stack"],
    featured: true
  },
  {
    title: "Mastery / Tsrlearning",
    slug: "mastery-tsrlearning",
    summary: "Gamified universal learning platform that generates skill trees and quizzes using Gemini 2.5 Flash API.",
    problem: "Learning complex topics lacks structured progression and engagement outside of formal courses.",
    approach: "Developed an ingestion engine that processes any material to auto-generate skill trees, spaced repetition quizzes, and tracks progress via an XP/streak system.",
    architecture: "React frontend integrated with Gemini 2.5 Flash API and a DB-level caching architecture for fast retrieval.",
    techStack: ["React", "Gemini API", "DB Caching"],
    metrics: ["Dynamic Skill Trees", "Gamified XP System"],
    githubUrl: null, // TODO: Obinna add real link
    liveUrl: null, // TODO: Obinna add real link
    demoVideo: null, // TODO: Add sped-up screen recording at /public/demos/
    status: "live",
    tags: ["AI/ML", "Full-Stack"],
    featured: true
  },
  {
    title: "NetGuard-SOC",
    slug: "netguard-soc",
    summary: "Streamlit + Scapy PCAP analyzer for rule-based threat detection with Plotly dashboards.",
    problem: "Network threat analysis often requires complex tools with steep learning curves.",
    approach: "Created a user-friendly analyzer that ingests PCAP files, applies rule-based detection for common attacks (port scans, ARP spoofing), and visualizes the results.",
    architecture: "Python/Scapy backend for packet analysis, Streamlit for the dashboard, Plotly for visualizations.",
    techStack: ["Python", "Scapy", "Streamlit", "Plotly"],
    metrics: ["Rule-based detection", "Interactive Dashboards"],
    githubUrl: null, // TODO: Obinna add real link
    liveUrl: null, // TODO: Obinna add real link
    demoVideo: null, // TODO: Add sped-up screen recording at /public/demos/
    status: "live",
    tags: ["Cybersecurity", "Python"],
    featured: false
  },
  {
    title: "Hostel Student Marketplace",
    slug: "hostel-marketplace",
    summary: "Marketplace with anti-snipe auction logic and school-domain email restriction.",
    problem: "Students need a secure, verified platform to buy and sell items within the campus ecosystem.",
    approach: "Built a marketplace with JWT auth restricted to school emails, integrated Paystack, and implemented anti-snipe auctions.",
    architecture: "Node.js/Express backend, React/Vite frontend, SQLite database, Paystack webhooks.",
    techStack: ["Node.js", "Express", "React", "Vite", "SQLite", "Paystack", "JWT"],
    metrics: ["Anti-snipe logic (60s extend)", "Verified domain auth"],
    githubUrl: null, // TODO: Obinna add real link
    liveUrl: null, // TODO: Obinna add real link
    demoVideo: null, // TODO: Add sped-up screen recording at /public/demos/
    status: "live",
    tags: ["Full-Stack"],
    featured: false
  },
  {
    title: "AeroGuard-CI",
    slug: "aeroguard-ci",
    summary: "Multi-component Python flight telemetry simulation & CI pipeline with a live dashboard.",
    problem: "Testing flight telemetry systems requires robust simulation and continuous integration.",
    approach: "Developed a telemetry simulator and integrated it with a CI pipeline to ensure reliability, visualizing data via a live dashboard.",
    architecture: "Python simulation components connected to a Streamlit live dashboard.",
    techStack: ["Python", "Streamlit", "CI/CD"],
    metrics: ["Live telemetry", "Automated CI"],
    githubUrl: null, // TODO: Obinna add real link
    liveUrl: null, // TODO: Obinna add real link
    demoVideo: null, // TODO: Add sped-up screen recording at /public/demos/
    status: "live",
    tags: ["Python", "DevOps"],
    featured: false
  },
  {
    title: "Aurel",
    slug: "aurel",
    summary: "Premium streetwear e-commerce app.",
    problem: "Need for a customized, premium shopping experience for streetwear.",
    approach: "Designing a responsive, high-performance e-commerce platform with premium UI/UX.",
    architecture: "Modern stack (TBD)",
    techStack: ["React", "Tailwind CSS"],
    metrics: [],
    githubUrl: null, // TODO: Obinna add real link
    liveUrl: null, // TODO: Obinna add real link
    demoVideo: null, // TODO: Add sped-up screen recording at /public/demos/
    status: "in-progress",
    tags: ["Full-Stack", "Frontend"],
    featured: false
  },
  {
    title: "Campus Navigation App",
    slug: "campus-navigation",
    summary: "Indoor/outdoor routing via QR codes for university campus.",
    problem: "Navigating complex university campuses is difficult for new students and visitors.",
    approach: "Building a progressive web app that allows users to scan QR codes at key locations to get step-by-step routing.",
    architecture: "React PWA, Graph-based routing algorithms.",
    techStack: ["React", "Algorithms"],
    metrics: [],
    githubUrl: null, // TODO: Obinna add real link
    liveUrl: null, // TODO: Obinna add real link
    demoVideo: null, // TODO: Add sped-up screen recording at /public/demos/
    status: "in-progress",
    tags: ["Full-Stack", "Algorithms"],
    featured: false
  }
];
