// hooks/useRepositories.ts
import { useState, useEffect } from 'react';
import { ProjectDTO } from '../components/modules/project/Project.interface';
import { technologies } from '../components/modules/technology/Technology';
import { pickNoRepeat } from '../utils/helpers';

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  fork: boolean;
  topics: string[];
  language: string | null;
  html_url: string;
  updated_at: string;
  created_at: string;
  languages_url: string;
}

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  fork: boolean;
  topics: string[];
  language: string | null;
  html_url: string;
  updated_at: string;
  created_at: string;
  languages_url: string;
}

interface GithubLanguages {
  [key: string]: number;
}

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
    updatedAt: (new Date()).toISOString(),
  } as ProjectDTO;
};

export function useGitRepositories() {
  const [projectList, setProjectList] = useState<ProjectDTO[]>([]);
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const showlist = ['292635733', '525946744', '1316550267', '348147494', '311440886'];

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.github.com/users/Leolardo123/repos",
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar repositórios");
        }

        const repos: GithubRepo[] = await response.json();
        const topics = new Set<string>([]);

        const filteredRepos = repos
          .filter((repo) => !repo.fork && showlist.includes(String(repo.id)))
          .sort((p1, p2) => new Date(p2.created_at).getTime() - new Date(p1.created_at).getTime());

        const projects: ProjectDTO[] = await Promise.all(
          filteredRepos.map(async (repo) => {
            repo.topics.forEach((t: string) => topics.add(t));

            let techs: string[] = [];
            try {
              const langResponse = await fetch(repo.languages_url);
              if (langResponse.ok) {
                const langsObj: GithubLanguages = await langResponse.json();
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
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  return { projectList, categoryList, loading, error };
}