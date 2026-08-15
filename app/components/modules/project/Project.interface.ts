import { TechnologiesType } from "../technology/Technology";

export interface ProjectDTO {
  name: string;
  technologies: string[];
  categories: string[];
  description: string;
  image?: string;
  role?: string;
  githubUrl?: string;
  isOwnProject?: boolean;
  updatedAt?: string;
}