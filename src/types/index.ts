export interface Project {
  title: string;
  slug: string;
  summary: string;
  problem: string;
  approach: string;
  architecture: string;
  techStack: string[];
  metrics: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  demoVideo: string | null; // path to sped-up screen recording in /public/demos/
  status: "live" | "in-progress";
  tags: string[];
  featured?: boolean;
}

export interface Skill {
  name: string;
  tier: "learning" | "working-knowledge" | "comfortable";
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface Certification {
  name: string;
  issuer: string;
  verifyUrl: string | null;
  featured?: boolean;
}

export interface TimelineEntry {
  title: string;
  organization: string;
  date: string;
  description?: string;
  bullets?: string[];
  type: "education" | "experience";
}
