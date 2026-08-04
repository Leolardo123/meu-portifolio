"use client"

import { useTheme } from "next-themes";
import React, { useState } from "react";

const links = [
  { label: "Introdução", href: "#introduction" },
  { label: "Tecnologias", href: "#technology" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contacts" },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [themeIndex, setThemeIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    const themes = ['dark-theme', 'light-theme'];
    setThemeIndex((prev) => (prev + 1) % themes.length);
    setTheme(themes[themeIndex]);
  };

  return (
    <header className="bg-(--color-theme) flex items-center justify-between h-17.75 p-10 gap-4 sticky top-0 z-10">
      {/* Logo */}
      <span className="uppercase text-[19px] font-bold order-1 md:order-1">
        Leoferstos
      </span>

      {/* Hamburger Button (Left on mobile, hidden on desktop) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block md:hidden focus:outline-none order-2"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </button>

      {/* Navigation Container (Hidden on mobile unless isOpen, flex on desktop) */}
      <div
        className={`${isOpen ? "flex" : "hidden"} md:flex absolute top-17.75 left-0 w-full bg-(--color-theme) p-10 flex-col gap-4 border-b border-gray-700 md:static md:w-auto md:p-0 md:flex-row md:border-b-0 order-4 md:order-2`}
      >
        <nav className="flex flex-col gap-4 md:flex-row md:gap-7.5 border-t border-(--font-grey) md:border-0">
          {links.map((link, index) => (
            <a
              key={index}
              className="text-[12px] font-bold uppercase block pt-5 md:p5-0"
              href={link.href}
              onClick={() => setIsOpen(false)} // Closes menu when a link is clicked
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Action Buttons (Right side) */}
      <div className={`${isOpen ? "flex" : "hidden"} gap-2.5 order-3 md:flex`}>
        <button
          onClick={toggleTheme}
          type="button"
          className="text-[11px] font-bold uppercase rounded-3xl border p-2.25"
        >
          {theme == "light-theme" ? "☀️" : "🌙"}
        </button>
        <button
          type="button"
          className="text-[11px] font-bold uppercase rounded-3xl border p-2.25"
        >
          Pt-Br
        </button>
        <span className="hidden lg:block md:hidden text-[11px] font-bold uppercase rounded-3xl border p-2.25">
          Open To Work
        </span>
      </div>
    </header>
  );
};
