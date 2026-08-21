import { TimelineEntry } from "@/types";

export const personal = {
  name: "Obinna Okeke",
  headline: "Computer Science Graduate · Full-Stack & AI Systems Developer",
  location: "Lagos, Nigeria",
  status: "Open to internships / junior roles", // editable flag
  email: "obinnaokeke15@yahoo.com", // TODO: Obinna add real email
  whatsapp: +2347040896864, // TODO: Obinna add real number or link
  github: "https://github.com/trapzobinna", // TODO: Obinna add real github
  linkedin: "https://www.linkedin.com/in/obinna-okeke-48b6632b7",
  resumeFilename: "obinnaokekecv.pdf", // in /public/obinnaokekecv.pdf
  
  bioShort: "I build full-stack AI-assisted products end-to-end.BSc Computer Science graduate First Class Honours specializing in applied deep learning for cybersecurity and modern web architectures.",
  
  bioLong: "I am a Computer Science graduate from Caleb University with a First Class Honours degree. My work bridges the gap between complex AI models and user-facing applications. I build full-stack systems from crafting fine-tuned models to developing the front-end interfaces that make them accessible. I focus on writing clean, scalable code and leverage agentic workflows to accelerate development without compromising on quality.",

  education: [
    {
      title: "BSc Computer Science",
      organization: "Caleb University, Imota-Lagos",
      date: "2027",
      description: "First Class Honours.",
      type: "education" as const
    }
  ] as TimelineEntry[],

  experience: [
    {
      title: "IT Student / Tech Instructor",
      organization: "CVhub4Africa",
      date: "May 2025 – October 2025",
      bullets: [
        "Taught technology fundamentals and programming basics to students, ensuring high engagement and comprehension.",
        "Provided technical support and assisted in the maintenance of IT infrastructure.",
        "Developed instructional materials and guided hands-on coding sessions."
      ],
      type: "experience" as const
    }
  ] as TimelineEntry[],

  howIWork: [
    {
      step: "1. Prompt-Driven Spec",
      description: "I write comprehensive, edge-case-aware markdown specifications before touching any code."
    },
    {
      step: "2. Agentic Build",
      description: "I leverage agentic tools to scaffold and draft the heavy lifting, acting as the architect."
    },
    {
      step: "3. Review & Refine",
      description: "I manually review the generated architecture, enforcing design tokens, correcting hallucinations, and ensuring security."
    },
    {
      step: "4. Ship & Iterate",
      description: "Deploying to Vercel, monitoring logs, and iterating based on real-world usage."
    }
  ],

  offDuty: [
    "Seeking constant self-improvement physically and mentally.",
    "Following latest trends and updates on the tech space and areas of interest."
  ]
};
