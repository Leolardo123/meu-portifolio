"use client"

import { useTheme } from "next-themes";
import React, { useState } from "react";

const links = [
  {
    label: "Introdução",
    href: "#introduction",
  },
  {
    label: "Tecnologias",
    href: "#technology",
  },
  {
    label: "Projetos",
    href: "#projects",
  },
  {
    label: "Contato",
    href: "#contacts",
  },
];

export default function Header() {
  const {theme, setTheme} = useTheme();
  const [themeIndex, setThemeIndex] = useState(0);

  const toggleTheme = () => {
    const themes = [
      'dark-theme',
      'light-theme'
    ];

    setThemeIndex((prev) => (prev+1) % themes.length);
    console.log(themes[themeIndex]);
    setTheme(themes[themeIndex]);
  }

  return (
    <header className="bg-(--color-theme) flex items-center justify-between h-17.75 p-10 gap-4 sticky top-0 z-10">
      <span className="uppercase text-[19px] font-bold">Leoferstos</span>
      <nav className="flex gap-7.5">
        {links.map((link, index) => (
          <a
            key={index}
            className="text-[12px] font-bold uppercase"
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="flex gap-2.5">
        <button
          onClick={toggleTheme}
          type="button"
          className="text-[11px] font-bold uppercase rounded-3xl border p-2.25"
        >
          Alterar Tema
        </button>
        <button
          type="button"
          className="text-[11px] font-bold uppercase rounded-3xl border p-2.25"
        >
          Pt-Br
        </button>
        <span className="text-[11px] font-bold uppercase rounded-3xl border p-2.25">
          Open To Work
        </span>
      </div>
    </header>
  );
};
