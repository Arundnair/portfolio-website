export interface Project {
  title: string;
  category: string;
  description: string;
  year: string;
  tech: string[];
}

export interface Experience {
  role: string;
  company: string;
  year: string;
  description: string;
  type: 'Education' | 'Internship';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Technical' | 'Soft';
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  tags: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}