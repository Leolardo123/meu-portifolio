import { ProjectDTO } from "./Project.interface";
import { technologies } from "../technology/Technology";
import { pickNoRepeat } from "@/app/utils/helpers";
import ProjectItem from "./ProjectItem";
import { useEffect, useState } from "react";
import '../../../animation.css';

const randomizeProject = () => {
  const imgRand = Math.floor(Math.random() * 10);

  const techRandAmount = Math.floor(Math.random() * 3) + 1; // de 1 a 4 itens
  const techsUnselected = Object.keys(technologies);
  const techsSelected = pickNoRepeat(techsUnselected, techRandAmount);

  return {
    name: "Placeholder",
    techs: techsSelected,
    categories: [],
    description: `Donec odio magna, lobortis id faucibus sit amet,
                        condimentum in odio. Maecenas porta, nibh eget facilisis
                        varius, mauris libero viverra velit, et placerat dui
                        dolor vel ligula.`,
    image: `https://picsum.photos/300/300?random=${imgRand}`,
    githubUrl: `https://github.com/Leolardo123/`,
    isOwnProject: true,
    updatedAt: new Date(),
  } as ProjectDTO;
};

export default function Project() {
  const [categoryList, setCategoryList] = useState<StackType | "all">("all");
  const [projectList, setProjectList] = useState<ProjectDTO[]>([]);
  const showlist = ['292635733', '525946744', '1316550267', '348147494', '311440886'];

  const handleLoadRepositories = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/Leolardo123/repos",
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar repositórios");
      }

      const repos = await response.json();

      const projects: ProjectDTO[] = repos
        .filter((repo: any) => !repo.fork && showlist.includes(String(repo.id)))
        .sort((p1, p2) => new Date(p2.created_at).getTime() - new Date(p1.created_at).getTime())
        .map((repo: any) => ({
          name: repo.name,
          description: repo.description ?? "Sem descrição.",
          techs: repo.language ? [repo.language] : [],
          categories: [],
          image: "/images/default-project.png",
          isOwnProject: true,
          githubUrl: repo.html_url,
          updatedAt: repo.updated_at
        }));

      setProjectList(projects);
    } catch (err) {
      console.error(err);
    }
  };

  const stacks = ['teste'];
  type StackType = typeof stacks;

  const handleSelectCategory = (stack: StackType) => {
    if (categoryList === stack) return setCategoryList("all");
    setCategoryList(stack);
  };

  useEffect(() => {
    handleLoadRepositories();
  }, []);

  return (
    <section
      id="projects"
      className="bg-primary text-(--font-dark) py-15 px-25 lg:px-75.5 "
    >
      {/* PROJETOS PESSOAIS */}
      <div className="flex justify-between pb-3.25">
        <h1 className="text-[11px]">Projetos</h1>
        <h1 className="text-[11px]">{projectList.length + " no total"}</h1>
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
        {/* <div className="flex gap-2 pt-12.5">
          {stacks.map((stack) => (
            <PrimaryButton
              key={stack}
              title={stack}
              onClick={() => handleSelectCategory(stack)}
            />
          ))}
        </div> */}
        <div
          id="projects-made"
          className="bg-(--color-theme) grid grid-cols-1 gap-1.25 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
        >
          {projectList.map((project, index) => {
            if (
              categoryList !== "all" &&
              !project.categories.includes(categoryList)
            ) {
              return;
            }

            return <ProjectItem key={index} project={project} />;
          })}
        </div>
        <div id="projects-participated">{/* PROJETOS PARTICIPADOS */}</div>
      </div>
    </section>
  );
}
