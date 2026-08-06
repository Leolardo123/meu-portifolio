import ProjectItem from "./ProjectItem";
import { useState } from "react";
import PrimaryButton from "../../elements/primaryButton/PrimaryButton";
import { useGitRepositories } from "@/app/hooks/useGitRepositories";

export default function Project() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { projectList, categoryList, loading, error } = useGitRepositories();

  const handleSelectCategory = (stack: string) => {
    if (selectedCategory === stack) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(stack);
    }
  };

  if (loading) {
    return <div className="bg-primary text-(--font-dark) min-h-dvh">Loading projects...</div>;
  }

  if (error) {
    return <div className="bg-primary text-(--font-dark) min-h-dvh">Error loading projects: {error.message}</div>;
  }

  return (
    <section id="projects" className="bg-primary text-(--font-dark) snap-start snap-always">
      {/* PROJETOS PESSOAIS */}
      <div className="inner-section min-h-dvh">
        <div className="flex flex-wrap gap-2 justify-between pb-3.25">
          <h3 className="section-subtitle">Projetos</h3>
          <h3 className="section-subtitle">
            {projectList.length + " destaques no total"}
          </h3>
        </div>
        <div id="projects-display" className="flex flex-col gap-4">
          <h1 className="section-title">
            Projetos em destaque
          </h1>
          <p className="section-paragraph">
            Estes são alguns dos projetos que desenvolvi durante estudos,
            projetos pessoais e atividades acadêmicas. Cada repositório
            representa diferentes tecnologias, desafios e soluções implementadas
            ao longo da minha evolução como desenvolvedor.
          </p>
          <div className="flex flex-wrap gap-4 pt-12.5 pb-12.5">
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
                !project.categories.includes(selectedCategory)
              ) {
                return null;
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