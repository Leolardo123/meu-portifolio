import { TechnologiesType } from "../technology/Technology";

export interface ProjectDTO {
  name: string;
  techs: string[];
  categories: string[];
  description: string;
  image: string;
  githubUrl: string;
  isOwnProject: boolean;
  updatedAt: string;
}