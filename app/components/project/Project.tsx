import { ProjectDTO } from "./Project.interface";
import { technologies } from "../technology/Technology";
import { pickNoRepeat } from "@/app/utils/helpers";
import ProjectItem from "./ProjectItem";

const projects = [] as ProjectDTO[];
const stacks = ["backend", "frontend", "fullstack"];

const randomizeProject = () => {
  const imgRand = Math.round(Math.random() * 10);
  const stackPos = Math.round(Math.random() * 3);

  const techRandAmount = Math.round(Math.random() * 3) + 1; // de 1 a 4 itens
  const techsUnselected = Object.keys(technologies);
  const techsSelected = pickNoRepeat(techsUnselected, techRandAmount);

  return {
    name: "Placeholder",
    techs: techsSelected,
    categories: [stacks[stackPos]],
    description: `Donec odio magna, lobortis id faucibus sit amet,
                        condimentum in odio. Maecenas porta, nibh eget facilisis
                        varius, mauris libero viverra velit, et placerat dui
                        dolor vel ligula.`,
    image: `https://picsum.photos/300/300?random=${imgRand}`,
    isOwnProject: true,
  } as ProjectDTO;
};

export default function Project() {
  return (
    <section id="projects">
      {/* PROJETOS PESSOAIS*/}
      <div id="projects-display">
        <div className="projects-made grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => {
            const project = randomizeProject();
            return <ProjectItem key={index} project={project} />;
          })}
        </div>
        <div className="projects-participated">
          {/* PROJETOS PARTICIPADOS */}
        </div>
      </div>
    </section>
  );
}
