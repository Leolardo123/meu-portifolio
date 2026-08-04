import { TechnologiesType } from "../technology/Technology";

export interface ProjectDTO {
  name: string;
  techs: TechnologiesType[];
  categories: string[];
  description: string;
  image: string;
  githubUrl: string;
  isOwnProject: boolean;
  updatedAt: Date;
}