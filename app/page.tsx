"use client";

import { RatingRepeat } from "./components/rating/Rating";
import LinkedinIcon from "./icons/LinkedinIcon";
import GithubIcon from "./icons/GithubIcon";
import Image from "next/image";
import Header from "./components/header/Header";
import Project from "./components/project/Project";
import { ProjectDTO } from './components/project/Project.interface';
import { ComponentType, SVGProps } from "react";
import JavaIcon from "./icons/JavaIcon";
import JavascriptIcon from "./icons/JavascriptIcon";
import PostgresqlIcon from "./icons/PostgresqlIcon";
import SpringIcon from "./icons/SpringIcon";

const contacts = {
  linkedin:
    "https://www.linkedin.com/in/leonardo-ferreira-dos-santos-629813181/",
  github: "https://github.com/Leolardo123",
};

// -------------------- IMAGE CONFIG
const contactIconSize = 50;
const techIconSize = 50;
const projectImageSize = 100;

// ------------------- TECHNOLOGIES
const technologies = {
  Javascript: 4,
  PostgreSQL: 4,
  "Node.Js": 4,
  "React(Web)": 4,
  Java: 3,
  Spring: 1,
  "Next.js": 2,
  "C#": 1,
  ".NET": 1,
  ReactNative: 1,
};

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const techIcons = {
  Java: JavaIcon,
  Javascript: JavascriptIcon,
  PostgreSQL: PostgresqlIcon,
  Spring: SpringIcon
} as { [key in keyof typeof technologies]: IconComponent };

// ------------------- HELPERS

const pickNoRepeat = (list: string[], amount: number) => {
  const copyOfList = [...list];
  const pickedItems = Array.from({ length: amount }, () => {
    const pos = Math.round(Math.random() * (copyOfList.length - 1));
    const sel = copyOfList.splice(pos, 1);
    return sel[0];
  });

  return pickedItems
}

// ------------------ PROJECTS

const projects = [] as ProjectDTO[];
const stacks = ['backend','frontend','fullstack'];

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
  } as ProjectDTO
}


export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <div id="content-main">
          {/* INTRODUÇÃO */}
          <section id="introduction">
            <h1> Introdução </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vitae arcu sed sem egestas iaculis vel quis mi. Vivamus ex eros,
              pulvinar quis blandit ut, fringilla eu nibh. Duis a mollis lectus.
              Quisque interdum elit hendrerit, congue neque sed, facilisis erat.
              Vestibulum ultrices vehicula lorem venenatis dapibus. In eleifend
              purus et congue dapibus. Donec augue nisi, convallis in erat a,
              pretium blandit magna. Etiam tellus ex, aliquet eu ultrices vitae,
              cursus a leo. Curabitur posuere ligula felis, nec vehicula libero
              interdum quis. Aliquam dignissim erat lorem, ut placerat neque
              lacinia ut. Mauris ut tristique neque, blandit fermentum metus.
              Vestibulum egestas turpis mauris, sed porta mauris cursus cursus.
              Praesent ligula lacus, vehicula non lobortis ac, volutpat a massa.
              Maecenas ac eros fermentum, pharetra ex aliquet, ultricies nisi.
              Etiam blandit eros nulla, eu pulvinar sem euismod a.
            </p>
          </section>
          {/* TECNOLOGIAS */}
          <section id="technology" className="bg-primary">
            <div id="technology-description">
              <h1>Tecnologias</h1>
              <p>
                Morbi tristique a turpis ut commodo. Praesent pellentesque, erat
                quis laoreet pharetra, augue metus luctus quam, a lacinia arcu
                est vitae libero. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; In vel nunc non justo
                elementum porttitor. Vestibulum vestibulum ex et dolor elementum
                tempus. Sed ut velit porttitor magna pretium cursus. In luctus,
                tortor at aliquam interdum, nisl magna egestas metus, non auctor
                neque eros quis nisl. Aliquam varius libero sem, nec feugiat
                quam lobortis quis.
              </p>
            </div>
            <div id="technology-details" className="bg-secondary-2">
              <div id="technology-list" className="grid grid-cols-1 sm:grid-cols-2">
                {Object.entries(technologies).map(([keyTech, ratingValue]) => {
                  const TechIcon = techIcons[keyTech as keyof typeof techIcons];
                  return (
                    <div
                      key={`technology-rating-${keyTech}`}
                      className="technology-item-rating flex flex-col"
                    >
                      <div className="flex items-center gap-0.5">
                        {TechIcon && <TechIcon width={40} height={40} />}
                        <p>{keyTech}</p>
                      </div>
                      <RatingRepeat
                        rating={ratingValue}
                        width={40}
                        height={40}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          {/* PROJETOS */}
          <section id="projects">
            {/* PROJETOS PESSOAIS*/}
            <div id="projects-display">
              <div className="projects-made grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, index) => {
                  const project = randomizeProject();
                  return (
                    <Project
                      key={index}
                      imageSize={projectImageSize}
                      project={project}
                    />
                  );
                })}
              </div>
              <div className="projects-participated">
                {/* PROJETOS PARTICIPADOS */}
              </div>
            </div>
          </section>
          {/* CONTATO */}
          <section id="contacts">
            {/* TODO::MAKE CLICKABLE AGAIN */}
            <div>
              <a href={contacts.linkedin}>
                <LinkedinIcon
                  height={contactIconSize}
                  width={contactIconSize}
                />
              </a>
              <a href={contacts.github}>
                <GithubIcon height={contactIconSize} width={contactIconSize} />
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
