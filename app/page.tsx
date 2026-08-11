"use client";

import Header from "./components/modules/header/Header";
import Introduction from "./components/modules/introduction/Introduction";
import Technology from "./components/modules/technology/Technology";
import Project from "./components/modules/project/Project";
import Contact from "./components/modules/contact/Contact";

import './style.css';
import Splash from "./components/modules/splash/Splash";

export default function Home() {
  return (
    <div>
      <main>
        <Splash></Splash>
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
