import { useRef } from "react";
import { ProjectDTO } from "./Project.interface";
import "../../../animation.css";

interface ProjectProps {
  project: ProjectDTO;
}

export default function ProjectItem(props: ProjectProps) {
  const project = props.project;
  const mainCategory = project.categories?.[0];
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 1.0;
    const y = (e.clientY - rect.top) / rect.height - 1.0;

    const maxRotation = 15;

    card.style.setProperty("--rX", `${-y * maxRotation}deg`);
    card.style.setProperty("--rY", `${x * maxRotation}deg`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.setProperty("--rX", "0deg");
    card.style.setProperty("--rY", "0deg");
  };

  return (
    <div
      className="bg-primary h-64 p-7 tilt-card camera-corners group"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={cardRef}
    >
      <div className="flex flex-row justify-between">
        <p className="title font-bold text-[20px] truncate">{project.name}</p>
        {mainCategory && (
          <p className="bg-black text-(--font-light) py-1 px-2.25 rounded-[3px] transition-colors duration-300 group-hover:bg-primary group-hover:text-(--font-dark)">
            {mainCategory}
          </p>
        )}
      </div>
      <div className="card-project-description mt-3.5 text-[13px]">
        <p className="technologies-project truncate text-[10px]">
          {project.techs.join(" * ")}
        </p>
        <p className="max-h-24 line-clamp-3 text-[12px] mt-3">
          {project.description}
        </p>
        <a
          href={project.githubUrl || "https://github.com/Leolardo123"}
          className="underline mt-3"
        >
          Ver repositório github
        </a>
      </div>
    </div>
  );
}
