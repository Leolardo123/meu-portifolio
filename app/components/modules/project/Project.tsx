import { ProjectDTO } from "./Project.interface";
import { technologies } from "../technology/Technology";
import { pickNoRepeat } from "@/app/utils/helpers";
import ProjectItem from "./ProjectItem";
import PrimaryButton from "../../elements/primaryButton/PrimaryButton";
import { useState } from "react";

const stacks = ["backend", "frontend", "fullstack"] as const;
type Stack = (typeof stacks)[number];

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

const projects = Array.from({ length: 8 }, (_, index) =>
  randomizeProject(),
) as ProjectDTO[];

export default function Project() {
  const [categoryList, setCategoryList] = useState<Stack | "all">("all");

  const handleSelectCategory = (stack: Stack) => {
    if (categoryList === stack) return setCategoryList("all");
    setCategoryList(stack);
  };

  return (
    <section
      id="projects"
      className="bg-primary text-(--font-dark) px-25 lg:px-75.5 "
    >
      {/* PROJETOS PESSOAIS */}
      <div className="flex justify-between pt-15 pb-3.25">
        <h1 className="text-[11px]">
          Projetos
        </h1>
        <h1 className="text-[11px]">
          {projects.length + " no total"}
        </h1>
      </div>
      <div id="projects-display">
        <h1 className="uppercase font-bold text-[54px]">O que ja fiz</h1>
        <p className="w-150 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          nec elementum nisl, ut eleifend nisl. Aliquam sollicitudin blandit
          metus, vel laoreet libero varius id. Ut dictum, leo in ultricies
          facilisis, leo lectus maximus elit, eget luctus ipsum mi id lorem.
          Praesent consequat fermentum arcu, in cursus orci ullamcorper sed.
        </p>
        <div className="flex gap-2 pt-12.5">
          {stacks.map((stack) => (
            <PrimaryButton
              key={stack}
              title={stack}
              onClick={() => handleSelectCategory(stack)}
            />
          ))}
        </div>
        <div className="projects-made grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => {
            if (
              categoryList !== "all" &&
              !project.categories.includes(categoryList)
            ) {
              return;
            }

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
