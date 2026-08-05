import { ProjectDTO } from "./Project.interface";
import "../../../animation.css";
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react'
interface ProjectProps {
  project: ProjectDTO;
}

export default function ProjectItem(props: ProjectProps) {
  const project = props.project;
  const mainCategory = project.categories?.[0];

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseSpringX = useSpring(x, { mass: 1 });
  const mouseSpringY = useSpring(y, { mass: 1 });

  const degLimit = '20.0deg';
  const degLowerLimit = '-20.0deg';
  const rotateX = useTransform(mouseSpringX, [-0.5, 0.5], [degLowerLimit, degLimit]);
  const rotateY = useTransform(mouseSpringY, [-0.5, 0.5], [degLimit, degLowerLimit]);

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
  }

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  }


  return (
    <motion.div
      className="bg-primary h-64 p-7 hover:bg-black hover:text-white group corners-container"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bottom-corners"></div>
      <div className="flex flex-row justify-between">
        <p className="title font-bold text-[20px] truncate">{project.name}</p>
        {mainCategory && (
          <p className="bg-black whitespace-nowrap text-(--font-light) py-1 px-2.25 rounded-[3px] transition-colors duration-300 group-hover:bg-primary group-hover:text-(--font-dark)">
            {mainCategory}
          </p>
        )}
      </div>
      <div className="card-project-description mt-3.5 text-[13px] ">
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
       <div className="corners-bottom absolute opacity-1 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
}
