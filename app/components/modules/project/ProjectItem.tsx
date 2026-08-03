import Image from "next/image";
import { ProjectDTO } from "./Project.interface";

interface ProjectProps {
  project: ProjectDTO;
}

export default function ProjectItem(props: ProjectProps) {
  const project = props.project;
  return (
    <div className="h-64 p-7">
      <div className="flex flex-row gap-3">
        <Image src={project.image} width={30} height={30} alt={project.name} />
        <p className="title font-bold text-[20px]">Teste</p>
      </div>
      <div className="card-project-description mt-3.5 text-[13px]">
        <p className="categories-project mt-3">{project.categories}</p>
        <p className="technologies-project truncate text-[10px]">
          {project.techs.join(" * ")}
        </p>
        <p className="max-h-24 line-clamp-3 text-[12px] mt-3">
          {project.description}
        </p>
        <a href="https://github.com/Leolardo123" className="underline mt-3">
          Ver repositório github
        </a>
      </div>
    </div>
  );
}
