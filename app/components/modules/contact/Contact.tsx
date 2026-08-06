import { EmailIcon } from "@/app/icons/EmailIcon";
import GithubIcon from "@/app/icons/GithubIcon";
import LinkedinIcon from "@/app/icons/LinkedinIcon";
import { IconComponent } from "@/app/interface/icon.interface";
import Tooltip from "../../elements/tooltip/Tooltip";

const contactIconSize = 100;
const contacts = {
  email: "leoferstos5@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/leonardo-ferreira-dos-santos-629813181/",
  github: "https://github.com/Leolardo123",
};

const contactIcons = {
  email: EmailIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon
} as { [key: string]: IconComponent }

export default function Contact() {
  return (
    <section
      id="contacts"
      className="bg-primary text-(--font-dark) px-25 pt-11.25 snap-start snap-always"
    >
      <div className="inner-section">
        <h2 className="section-subtitle">Contato</h2>
        <h1 className="section-title">Fale Comigo</h1>
        <p className="section-paragraph">
          Estou sempre aberto a novas oportunidades, projetos e troca de
          experiências. Caso queira entrar em contato, utilize um dos canais
          abaixo.
        </p>
        <div className="flex flex-wrap gap-4 pt-12 content-center m-auto mt-0">
          {Object.entries(contacts).map(([contactType, contactlink]) => {
            const ContactIcon = contactIcons[contactType];
            return (
              <a
                key={contactType}
                href={contactlink}
                className="flex flex-col gap-2.5 group content-center text-center  hover:-translate-y-1 transition-all"
              >
                {ContactIcon ? (
                  <ContactIcon
                    height={contactIconSize}
                    width={contactIconSize}
                  />
                ) : (
                  contactType
                )}
                <Tooltip content={contactType}/>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
