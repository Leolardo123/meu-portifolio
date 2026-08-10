import ProjectItem from "./ProjectItem";
import { useEffect, useState } from "react";
import PrimaryButton from "../../elements/primaryButton/PrimaryButton";
import { AnimatePresence, motion } from "motion/react";
import { ProjectDTO } from "./Project.interface";

interface ProjectDisplayProps {
  title: string;
  projects: ProjectDTO[];
  categories: string[];
  loading: boolean;
  error: Error | null;
}

export default function ProjectDisplay({
  title,
  projects,
  categories,
  loading,
  error,
}: ProjectDisplayProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
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
    return (
      <div className="bg-primary text-(--font-dark) min-h-dvh">
        Loading projects...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-primary text-(--font-dark) min-h-dvh">
        Error loading projects: {error.message}
      </div>
    );
  }

  return (
    <div className="inner-section min-h-dvh">
      <div className="flex flex-wrap gap-2 justify-between pb-3.25">
        <h3 className="section-subtitle">Projetos</h3>
        <h3 className="section-subtitle">
          {projects.length + " destaques no total"}
        </h3>
      </div>
      <div id="projects-display" className="flex flex-col gap-4">
        <h1 className="section-title">{title}</h1>
        <p className="section-paragraph">
          Estes são alguns dos projetos que participei em experiência,
        </p>
        <div className="flex flex-wrap gap-4 pt-12.5 pb-12.5">
          {categories && categories.map((category) => (
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
                animate={{ x: isCurtainOpen ? "-200%" : "0%" }}
                initial={{ x: "-200%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-1/2 z-2"
              />
              <motion.div
                key="modal-right"
                animate={{ x: isCurtainOpen ? "300%" : "100%" }}
                initial={{ x: "300%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-1/2 z-2"
              />
            </div>
          </AnimatePresence>

          {projects && projects.map((project, index) => {
            if (
              selectedCategory &&
              !project.categories.includes(selectedCategory)
            ) {
              return null;
            }

            return <ProjectItem key={index} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
}
