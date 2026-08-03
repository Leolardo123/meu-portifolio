"use client";

import Header from "./components/modules/header/Header";
import Introduction from "./components/modules/introduction/Introduction";
import Technology from "./components/modules/technology/Technology";
import Project from "./components/modules/project/Project";
import Contact from "./components/modules/contact/Contact";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <div id="content-main" >
          {/* INTRODUÇÃO */}
          <Introduction/>
          {/* PROJETOS */}
          <Project />
          {/* TECNOLOGIAS */}
          <Technology/>
          {/* CONTATO */}
          <Contact/>
        </div>
      </main>
    </div>
  );
}
