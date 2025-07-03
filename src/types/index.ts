export interface User {
  id: string;
  name: string;
  email: string;
  role: 'visitor' | 'applicant' | 'admin';
  avatar?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  skills: string[];
  linkedin?: string;
  github?: string;
}

export interface JobApplication {
  id: string;
  name: string;
  email: string;
  position: string;
  experience: string;
  skills: string[];
  resumeUrl?: string;
  coverLetter: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  createdAt: Date;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}

export interface Quote {
  id: string;
  text: string;
  author: string;
}