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
    <section
      id="technology"
      className="bg-secondary-3 text-(--font-dark)"
    >
      <div className="inner-section">
        <div id="technology-description">
          <h1 className="text-[11px]">Tecnologias</h1>
          <h1 className="uppercase font-bold text-[54px]">
            Principais Linguagens & Frameworks
          </h1>
          <p className="w-150 text-justify">
            Essa lista foi feita baseada na afinidade com cada tecnologia,
            quanto mais estrelas maior a facilidade em utilizar no dia-a-dia.
          </p>
        </div>
        <div id="technology-details">
          <div
            id="technology-list"
            className="grid grid-cols-1 sm:grid-cols-2 mt-12.25"
          >
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
