import { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", tier: "comfortable" },
      { name: "JavaScript/TypeScript", tier: "comfortable" },
      { name: "SQL", tier: "working-knowledge" },
      { name: "Java", tier: "learning" },
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", tier: "comfortable" },
      { name: "Tailwind CSS", tier: "comfortable" },
      { name: "HTML/CSS", tier: "comfortable" },
      { name: "Vite", tier: "working-knowledge" },
      { name: "Next.js", tier: "working-knowledge" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "FastAPI", tier: "comfortable" },
      { name: "Node.js/Express", tier: "working-knowledge" },
      { name: "REST APIs", tier: "comfortable" }
    ]
  },
  {
    category: "AI/ML",
    skills: [
      { name: "Prompt Engineering", tier: "comfortable" },
      { name: "Agentic Workflows", tier: "comfortable" },
      { name: "Claude API", tier: "working-knowledge" },
      { name: "Gemini API", tier: "working-knowledge" },
      { name: "DistilBERT", tier: "working-knowledge" },
      { name: "BiLSTM", tier: "working-knowledge" },
      { name: "sentence-transformers", tier: "learning" }
    ]
  },
  {
    category: "Cybersecurity",
    skills: [
      { name: "Network Security", tier: "comfortable" },
      { name: "Threat Detection", tier: "working-knowledge" },
      { name: "PCAP Analysis", tier: "working-knowledge" },
      { name: "Scapy", tier: "working-knowledge" }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git/GitHub", tier: "comfortable" },
      { name: "Streamlit", tier: "comfortable" },
      { name: "SQLite", tier: "comfortable" },
      { name: "PowerShell Scripting", tier: "working-knowledge" },
      { name: "Paystack Integration", tier: "working-knowledge" }
    ]
  }
];
