import { ProjectDTO } from "./Project.interface";
import { technologies } from "../technology/Technology";
import { pickNoRepeat } from "@/app/utils/helpers";
import ProjectItem from "./ProjectItem";
import { useEffect, useState } from "react";
import PrimaryButton from "../../elements/primaryButton/PrimaryButton";

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
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [projectList, setProjectList] = useState<ProjectDTO[]>([]);
  const showlist = ['292635733', '525946744', '1316550267', '348147494', '311440886'];
  
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const handleLoadRepositories = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/Leolardo123/repos",
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar repositórios");
      }

      const repos = await response.json();
      const topics = new Set<string>([]);

      const filteredRepos = repos
        .filter((repo: any) => !repo.fork && showlist.includes(String(repo.id)))
        .sort((p1: any, p2: any) => new Date(p2.created_at).getTime() - new Date(p1.created_at).getTime());

      const projects: ProjectDTO[] = await Promise.all(
        filteredRepos.map(async (repo: any) => {
          repo.topics.forEach((t: string) => topics.add(t));

          let techs: string[] = [];
          try {
            const langResponse = await fetch(repo.languages_url);
            if (langResponse.ok) {
              const langsObj = await langResponse.json();
              techs = Object.keys(langsObj);
            }
          } catch (langError) {
            console.error(`Erro ao buscar linguagens do repo ${repo.name}:`, langError);
            techs = repo.language ? [repo.language] : [];
          }

          return {
            name: repo.name,
            description: repo.description ?? "Sem descrição.",
            techs: techs,
            categories: repo.topics,
            image: "/images/default-project.png",
            isOwnProject: true,
            githubUrl: repo.html_url,
            updatedAt: repo.updated_at
          };
        })
      );

      setProjectList(projects);
      setCategoryList([...topics]);
    } catch (err) {
      console.error(err);
    }
  };


  const stacks = ['teste'];
  type StackType = typeof stacks;

  const handleSelectCategory = (stack: string) => {
    if (selectedCategory === stack) return setSelectedCategory('');
    setSelectedCategory(stack || '');
  };

  useEffect(() => {
    handleLoadRepositories();
  }, []);

  return (
    <section
      id="projects"
      className="bg-primary text-(--font-dark)"
    >
      {/* PROJETOS PESSOAIS */}
      <div className="inner-section">
        <div className="flex justify-between pb-3.25">
          <h1 className="text-[11px]">Projetos</h1>
          <h1 className="text-[11px]">{projectList.length + " no total"}</h1>
        </div>
        <div id="projects-display">
          <h1 className="uppercase font-bold text-[54px]">O que já fiz</h1>
          <p className="w-150 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque nec elementum nisl, ut eleifend nisl. Aliquam
            sollicitudin blandit metus, vel laoreet libero varius id. Ut dictum,
            leo in ultricies facilisis, leo lectus maximus elit, eget luctus
            ipsum mi id lorem. Praesent consequat fermentum arcu, in cursus orci
            ullamcorper sed.
          </p>
          <div className="flex gap-2 pt-12.5 pb-12.5">
            {categoryList.map((category) => (
              <PrimaryButton
                key={category}
                title={category}
                onClick={() => handleSelectCategory(category)}
                isActive={selectedCategory === category}
              />
            ))}
          </div>
          <div
            id="projects-made"
            className="bg-(--color-theme) grid grid-cols-1 md:gap-1.25 gap-px sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
          >
            {projectList.map((project, index) => {
              if (
                selectedCategory &&
                !project.categories.includes(selectedCategory || "")
              ) {
                return;
              }

              return <ProjectItem key={index} project={project} />;
            })}
          </div>
          <div id="projects-participated">{/* PROJETOS PARTICIPADOS */}</div>
        </div>
      </div>
    </section>
  );
}
