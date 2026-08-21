import { Certification } from "@/types";

export const certifications: Certification[] = [
  {
    name: "BSc Computer Science First Class Honours",
    issuer: "Caleb University",
    verifyUrl: null, // Internal University Record
    image: null, // Add degree image if available
    featured: true
  },
  {
    name: "Networking, Security & Maintenance",
    issuer: "CUL Technologies · Caleb University",
    verifyUrl: "https://www.itf.caleb.university/itf-certificate?cert_hash=8c8510068e75315a",
    image: "/certificates/networkingsecmain.jpg",
    featured: false
  },
  {
    name: "ITF+ Setting Up & Using Computers",
    issuer: "CUL Technologies · Caleb University",
    verifyUrl: "https://www.itf.caleb.university/itf-certificate?cert_hash=3b955bdf6a0a3329",
    image: "/certificates/itfsetting.jpg",
    featured: false
  },
  {
    name: "Cloud Computing Fundamentals",
    issuer: "CUL Technologies · Caleb University",
    verifyUrl: "https://www.learn.cultechnologies.com/cul-certificate?cert_hash=e4e48bad4161412b",
    image: "/certificates/cloudcomp.jpg",
    featured: false
  },
  {
    name: "Microsoft Office 365",
    issuer: "CUL Technologies · Caleb University",
    verifyUrl: null,
    image: "/certificates/365.jpg",
    featured: false
  },
  {
    name: "Mastery of Information Technology Ethics",
    issuer: "CUL Technologies · Caleb University",
    verifyUrl: null,
    image: "/certificates/mastery.JPG",
    featured: false
  },
  {
    name: "CompTIA IT Fundamentals (ITF+) — Computer Basics",
    issuer: "CUL Technologies · Caleb University",
    verifyUrl: null,
    image: "/certificates/itfcompbasics.jpg",
    featured: false
  },
  {
    name: "Databases and Software Development",
    issuer: "CUL Technologies · Caleb University",
    verifyUrl: null,
    image: "/certificates/dbandswdev.jpg",
    featured: false
  },
  {
    name: "IBM SkillsBuild - Cybersecurity",
    issuer: "IBM",
    verifyUrl: null,
    image: "/certificates/ibmcybersec.jpeg",
    featured: false
  },
  {
    name: "IBM SkillsBuild - Web Development Fundamentals",
    issuer: "IBM",
    verifyUrl: null,
    image: "/certificates/ibmwebdev.jpeg",
    featured: false
  },
   {
    name: "Cisco Networking Academy - Introduction to Cybersecurity",
    issuer: "Cisco",
    verifyUrl: null,
    image: "/certificates/ciscocyb.jpeg",
    featured: false
  },
    {
    name: "IBM SkillsBuild - AI Fundamentals",
    issuer: "IBM",
    verifyUrl: null, // or add your link like "https://..."
    image: null,
    featured: false
  }
];
