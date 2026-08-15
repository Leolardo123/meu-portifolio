import { ProjectDTO } from "./Project.interface";
import "../../../animation.css";
import { motion, useSpring, useMotionValue, useTransform, useMotionTemplate } from "motion/react";
import { twMerge } from "tailwind-merge";
import { animate } from "motion";

interface ProjectProps {
  project: ProjectDTO;
  onClick?: () => void;
  customColor?: string;
}

export default function ProjectItem({
  project,
  onClick,

  /* STYLE */
  customColor,
}: ProjectProps) {
  const mainCategory = project.categories?.[0];


  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseSpringX = useSpring(x, { mass: 1 });
  const mouseSpringY = useSpring(y, { mass: 1 });

  const degLimit = "20.0deg";
  const degLowerLimit = "-20.0deg";
  const rotateX = useTransform(
    mouseSpringX,
    [-0.5, 0.5],
    [degLowerLimit, degLimit],
  );
  const rotateY = useTransform(
    mouseSpringY,
    [-0.5, 0.5],
    [degLimit, degLowerLimit],
  );

  // SHADOW
  const shadowOpacity = useMotionValue(0);

  const shadowR = useTransform(x, [-0.5, 0.5], [255, 0]);
  const shadowG = useTransform(y, [-0.5, 0.5], [0, 255]);
  const shadowB = useTransform(mouseSpringX, [-0.5, 0.5], [100, 255]);

  const boxShadow = useMotionTemplate`0px 0px 8px 1px rgba(${shadowR}, ${shadowG}, ${shadowB}, ${shadowOpacity})`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    animate(shadowOpacity, 0.5, { duration: 0.2 });
  }

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    animate(shadowOpacity, 0, { duration: 0.2 });
  };

  return (
    <motion.div
      className={twMerge(
        "h-64 p-7 hover:bg-gray-800 transition-all hover:scale-110 hover:text-white hover:z-10 group corners-container ",
        customColor
      )}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        boxShadow
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div className="bottom-corners"></div>
      <div className="flex flex-row justify-between">
        <p className="title font-bold text-[20px] truncate">{project.name}</p>
        {mainCategory && (
          <p className="bg-black whitespace-nowrap text-(--font-light) py-1 px-2.25 rounded transition-colors duration-300 group-hover:bg-primary group-hover:text-(--font-dark)">
            {mainCategory}
          </p>
        )}
      </div>
              <p className="text-[11px]">{project.role}</p>
      <div className="card-project-description mt-3.5 text-[13px]">
        <p className="technologies-project truncate text-[10px]">
          {project.technologies?.join(" * ")}
        </p>
        <p className="max-h-24 line-clamp-3 text-[12px] mt-3">
          {project.description}
        </p>
        {project.githubUrl && (
          <a
            href={project.githubUrl || "https://github.com/Leolardo123"}
            className="underline mt-3"
          >
            Ver repositório github
          </a>
        )}

        {onClick && (
          <button onClick={onClick} className="hover:cursor-crosshair font-bold underline">
            Ver contribuições
          </button>
        )}
      </div>
      <div className="corners-bottom absolute opacity-1 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
}
