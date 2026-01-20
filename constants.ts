import { Certificate, Experience, Project, Skill, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Arun D Nair",
  role: "Engineering Student & Developer",
  location: "Kottayam, Kerala",
  email: "arundnair5404@gmail.com",
  phone: "+91 7306606376",
  about: "B.Tech engineering student at VISAT engineering college, Elanji with strong technical and problem-solving skills. Eager to learn, contribute and apply knowledge to real-world projects. Passionate about building a successful engineering career."
};

export const PROJECTS: Project[] = [
  {
    title: "LumiSense",
    category: "Final Year Project",
    description: "A proactive AI Co-pilot designed to assist the visually impaired, enhancing navigation and environmental awareness through sensory feedback.",
    year: "2025 - Present",
    tech: ["AI/ML", "Python", "IoT", "Computer Vision"]
  },
  {
    title: "LuxeCart",
    category: "Mini Project",
    description: "A fully functional e-commerce application featuring robust product listing, cart management, and user authentication systems.",
    year: "2024 - Present",
    tech: ["Flutter", "Dart", "Firebase"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Flutter Intern",
    company: "WeCodeLife, Ernakulam",
    year: "2023",
    description: "Learned and worked on Flutter framework for cross-platform mobile application development.",
    type: "Internship"
  },
  {
    role: "B.Tech - Computer Science Engineering",
    company: "VISAT Engineering College, Ernakulam",
    year: "2022 - 2026",
    description: "Current CGPA: 6.3. Focusing on software development and core engineering principles.",
    type: "Education"
  },
  {
    role: "Higher Secondary (Class XII)",
    company: "Aravinda Vidyamandiram, Kottayam",
    year: "2022",
    description: "Completed with 78.6% marks.",
    type: "Education"
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    title: "Galactic Problem Solver",
    issuer: "NASA International Space Apps Challenge",
    date: "Oct 2025",
    tags: ["NASA", "Innovation", "Problem Solving"]
  },
  {
    title: "Ethical Hacking Internship",
    issuer: "Retechnox Technologies LLP",
    date: "July 2025",
    tags: ["Security", "Ethical Hacking", "Internship"]
  },
  {
    title: "IoT and Blockchain Technologies",
    issuer: "IIIT Kottayam & CyberLabs",
    date: "July 2025",
    tags: ["IoT", "Blockchain", "Add-on Course"]
  },
  {
    title: "Component X (Ideathon) - 3rd Position",
    issuer: "Mulearn & Cyborgs",
    date: "Sept 2025",
    tags: ["Ideathon", "Competition", "Innovation"]
  },
  {
    title: "Gemini Write-off Participation",
    issuer: "Google Student Ambassador Program",
    date: "Nov 2025",
    tags: ["Google", "AI", "Gemini"]
  },
  {
    title: "Android-Flutter App Development",
    issuer: "Luminar Technolab Pvt Ltd",
    date: "March 2024",
    tags: ["Flutter", "Android", "Mobile Dev"]
  },
  {
    title: "Machine Learning Training School",
    issuer: "IIIT Kottayam",
    date: "Nov 2023",
    tags: ["Machine Learning", "Python", "AI"]
  },
  {
    title: "Python Pulse Programming",
    issuer: "MSME-Technology Development Centre",
    date: "June 2023",
    tags: ["Python", "Programming", "MSME"]
  }
];

export const SKILLS: Skill[] = [
  { name: "Python", level: 85, category: "Technical" },
  { name: "Flutter", level: 80, category: "Technical" },
  { name: "GitHub", level: 75, category: "Technical" },
  { name: "VS Code", level: 90, category: "Technical" },
  { name: "Problem Solving", level: 85, category: "Soft" },
  { name: "Communication", level: 80, category: "Soft" },
  { name: "Adaptability", level: 90, category: "Soft" },
  { name: "Time Management", level: 75, category: "Soft" }
];

export const SOCIALS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/arundnair", icon: "linkedin" },
  { platform: "GitHub", url: "https://github.com/Arundnair", icon: "github" },
  { platform: "Email", url: "mailto:arundnair5404@gmail.com", icon: "mail" }
];