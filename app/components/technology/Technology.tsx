import JavaIcon from "@/app/icons/JavaIcon";
import JavascriptIcon from "@/app/icons/JavascriptIcon";
import PostgresqlIcon from "@/app/icons/PostgresqlIcon";
import SpringIcon from "@/app/icons/SpringIcon";
import React, { ComponentType, SVGProps } from "react";
import RatingRepeat from "../rating/Rating";
import { IconComponent } from "@/app/interface/icon.interface";

export const technologies = {
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

const techIcons = {
  Java: JavaIcon,
  Javascript: JavascriptIcon,
  PostgreSQL: PostgresqlIcon,
  Spring: SpringIcon,
} as { [key in keyof typeof technologies]: IconComponent };

export default function Technology() {
  return (
    <section id="technology">
      <div id="technology-description">
        <h1>Tecnologias</h1>
        <p>
          Morbi tristique a turpis ut commodo. Praesent pellentesque, erat quis
          laoreet pharetra, augue metus luctus quam, a lacinia arcu est vitae
          libero. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; In vel nunc non justo elementum
          porttitor. Vestibulum vestibulum ex et dolor elementum tempus. Sed ut
          velit porttitor magna pretium cursus. In luctus, tortor at aliquam
          interdum, nisl magna egestas metus, non auctor neque eros quis nisl.
          Aliquam varius libero sem, nec feugiat quam lobortis quis.
        </p>
      </div>
      <div className="separator mt-6.5"></div>
      <div id="technology-details">
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
                <RatingRepeat rating={ratingValue} width={40} height={40} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
