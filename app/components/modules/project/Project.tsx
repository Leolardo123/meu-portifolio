import ProjectItem from "./ProjectItem";
import { useState } from "react";
import PrimaryButton from "../../elements/primaryButton/PrimaryButton";
import { useGitRepositories } from "@/app/hooks/useGitRepositories";
import { AnimatePresence, motion } from 'motion/react';

export default function Project() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { projectList, categoryList, loading, error } = useGitRepositories();

  const [isCurtainOpen, setIsCurtainOpen] = useState(true);

  const handleSelectCategory = (stack: string) => {
    setIsCurtainOpen(false);

    let delaySelectedCategory = null;

    delaySelectedCategory = setTimeout(() => {
      if (selectedCategory === stack) {
        setSelectedCategory(null);
      } else {
        setSelectedCategory(stack);
      }

      setIsCurtainOpen(true);
    }, 1000);

    delaySelectedCategory = null;
  };

  if (loading) {
    return <div className="bg-primary text-(--font-dark) min-h-dvh">Loading projects...</div>;
  }

  if (error) {
    return <div className="bg-primary text-(--font-dark) min-h-dvh">Error loading projects: {error.message}</div>;
  }

  return (
    <section
      id="projects"
      className="bg-primary text-(--font-dark) snap-start snap-always"
    >
      {/* PROJETOS PESSOAIS */}
      <div className="inner-section min-h-dvh">
        <div className="flex flex-wrap gap-2 justify-between pb-3.25">
          <h3 className="section-subtitle">Projetos</h3>
          <h3 className="section-subtitle">
            {projectList.length + " destaques no total"}
          </h3>
        </div>
        <div id="projects-display" className="flex flex-col gap-4">
          <h1 className="section-title">Projetos em destaque</h1>
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
            className="bg-(--color-theme) relative grid grid-cols-1 md:gap-1.25 gap-px sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
          >
            <AnimatePresence>
                <div className="absolute inset-0 overflow-x-hidden">
                  <motion.div
                    key="modal-left"
                    animate={{ x: isCurtainOpen ? '-200%' : '0%'}}
                    initial={{ x: '-200%' }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="bg-primary absolute inset-0 w-1/2 z-2"
                  />
                  <motion.div
                    key="modal-right"
                    animate={{ x: isCurtainOpen ? '300%' : '100%'}}
                    initial={{ x: "300%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="bg-primary absolute inset-0 w-1/2 z-2"
                  />
                </div>
            </AnimatePresence>

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