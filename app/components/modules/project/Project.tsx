import { useGitRepositories } from "@/app/hooks/useGitRepositories";
import ProjectDisplay from "./ProjectDisplay";
import { projectParticipatedList } from "./data/projects.data";
import { ProjectDTO } from "./Project.interface";


export default function Project() {
  const { projectList, categoryList, loading, error } = useGitRepositories();

  const getProjectsCategories = (projects: ProjectDTO[]) => {
    const categoriesUnique: string[] = [];
    
    projects.forEach((p) => {
      const notFoundCategories = p.categories.filter(
        (pc) => !categoriesUnique.find(un => un === pc),
      );
      categoriesUnique.push(...notFoundCategories);
    });

    console.log(projects, categoriesUnique)
    return categoriesUnique;
  }

  return (
    <section
      id="projects"
      className="bg-primary text-(--font-dark) snap-start snap-always"
    >
      {/* PROJETOS PESSOAIS */}
      <div>
        <ProjectDisplay
          title="Projetos Pessoais"
          projects={projectList}
          categories={getProjectsCategories(projectList)}
          error={error}
          loading={loading}
        />
      </div>
      <div>
        {/* PROJETOS QUE PARTICIPEI */}
        <ProjectDisplay
          title="Projetos Que Participei"
          projects={projectParticipatedList}
          categories={getProjectsCategories(projectParticipatedList)}
          error={null}
          loading={false}
        />
      </div>
    </section>
  );
}
