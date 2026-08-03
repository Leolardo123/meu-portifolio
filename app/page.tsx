"use client";

import Header from "./components/header/Header";
import Introduction from "./components/introduction/Introduction";
import Technology from "./components/technology/Technology";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <div id="content-main" className="px-25 lg:px-75.5">
          {/* INTRODUÇÃO */}
          <Introduction/>
          <div className="separator mt-6.5"></div>
          {/* TECNOLOGIAS */}
          <Technology/>
          <div className="separator mt-6.5"></div>
          {/* PROJETOS */}
          <Project />
          <div className="separator mt-6.5"></div>
          {/* CONTATO */}
          <Contact/>
        </div>
      </main>
    </div>
  );
}
