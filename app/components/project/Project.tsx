import Image from "next/image";
import React from "react";
import { ProjectDTO } from "./Project.interface";

interface ProjectProps {
  imageSize: number;
  project: ProjectDTO;
}

export default function Project(props: ProjectProps) {
  const project = props.project;
  return (
    <div className="card-project">
      <Image
        src={project.image}
        width={props.imageSize}
        height={props.imageSize}
        alt={project.name}
      />
      <div className="card-project-description">
        <p className="categories-project">{project.categories}</p>
        <p className="technologies-project">{project.techs.join(";")}</p>
        <p>{project.description}</p>
        <a href="https://github.com/Leolardo123">Ver repositório github</a>
      </div>
    </div>
  );
}
