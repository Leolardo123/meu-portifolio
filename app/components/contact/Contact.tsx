import GithubIcon from "@/app/icons/GithubIcon";
import LinkedinIcon from "@/app/icons/LinkedinIcon";
import { IconComponent } from "@/app/interface/icon.interface";
import React, { ComponentType, SVGProps } from "react";

const contactIconSize = 25;
const contacts = {
  email: "leoferstos5@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/leonardo-ferreira-dos-santos-629813181/",
  github: "https://github.com/Leolardo123",
};

const contactIcons = {
  linkedin: LinkedinIcon,
  github: GithubIcon
} as { [key: string]: IconComponent }

export default function Contact() {
  return (
    <section id="contacts">
      {/* TODO::MAKE CLICKABLE AGAIN */}
      <div>
        {Object.entries(contacts).map(([contactType, contactlink]) => {
          const ContactIcon = contactIcons[contactType];
          return (
            <a key={contactType} href={contactlink} className="flex">
              {ContactIcon ? (
                <ContactIcon height={contactIconSize} width={contactIconSize} />
              ) : (
                contactType + ":"
              )}
              {contactlink}
            </a>
          );
        })}
      </div>
    </section>
  );
}
