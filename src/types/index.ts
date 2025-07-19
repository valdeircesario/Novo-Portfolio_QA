export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  demoImages?: string[];
  features?: string[];
}

export interface Course {
  id: number;
  title: string;
  institution: string;
  duration: string;
  year: number;
  certificateUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'hard' | 'soft';
}

export interface TestCase {
  id: number;
  name: string;
  status: 'passed' | 'failed' | 'pending';
  description: string;
}