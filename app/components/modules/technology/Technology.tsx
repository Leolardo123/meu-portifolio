import RatingRepeat from "../../elements/rating/Rating";
import { IconComponent } from "@/app/interface/icon.interface";

export const technologies = {
  Javascript: 4,
  Typescript: 4,
  PostgreSQL: 4,
  "Node.Js": 4,
  "React(Web)": 4,
  Java: 3,
  Spring: 1,
  "Next.js": 2,
  "C#": 1,
  "C": 1,
  ".NET": 1,
  ReactNative: 1,
};

export type TechnologiesType = keyof typeof technologies;


const techIcons = {
  // Java: JavaIcon,
  // Javascript: JavascriptIcon,
  // PostgreSQL: PostgresqlIcon,
  // Spring: SpringIcon,
} as { [key in keyof typeof technologies]: IconComponent };

export default function Technology() {
  return (
    <section id="technology" className="bg-secondary-3 text-(--font-dark) snap-start snap-always">
      <div className="inner-section">
        <div id="technology-description">
          <h1 className="section-subtitle">Tecnologias</h1>
          <h1 className="section-title">
            Tecnologias que utilizo
          </h1>
          <p className="section-paragraph">
            A classificação abaixo representa meu nível de familiaridade com
            cada tecnologia, considerando minha experiência prática em projetos
            pessoais, acadêmicos e profissionais.
          </p>
        </div>
        <div id="technology-details" className="pt-12.5">
          <div
            id="technology-list"
            className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          >
            {Object.entries(technologies).map(([keyTech, ratingValue]) => {
              const TechIcon = techIcons[keyTech as keyof typeof techIcons];
              return (
                <div
                  key={`technology-rating-${keyTech}`}
                  className="technology-item-rating p-2 flex flex-col shadow-[0px_0px_3px_1px_rgba(0,0,0,0.25)] hover:scale-105 transition-all rounded"
                >
                  <div className="flex items-center gap-0.5">
                    {TechIcon && <TechIcon width={40} height={40} />}
                    <p>{keyTech}</p>
                  </div>
                  <RatingRepeat rating={ratingValue} width={40} height={40} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
