import { EmailIcon } from "@/app/icons/EmailIcon";
import GithubIcon from "@/app/icons/GithubIcon";
import LinkedinIcon from "@/app/icons/LinkedinIcon";
import { IconComponent } from "@/app/interface/icon.interface";

const contactIconSize = 25;
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
      className="bg-primary text-(--font-dark) px-25 pt-11.25"
    >
      <div className="inner-section">
        <h1 className="text-[11px]">Contato</h1>
        <h3 className="uppercase font-bold text-[54px] max-w-2xl">Fale Comigo</h3>
        <p className="text-justify whitespace-normal max-w-2xl leading-relaxed">
          Estou sempre aberto a novas oportunidades, projetos e troca de
          experiências. Caso queira entrar em contato, utilize um dos canais
          abaixo.
        </p>
        <div className="pt-11.25">
          {Object.entries(contacts).map(([contactType, contactlink]) => {
            const ContactIcon = contactIcons[contactType];
            return (
              <a key={contactType} href={contactlink} className="flex gap-2.5">
                {ContactIcon ? (
                  <ContactIcon
                    height={contactIconSize}
                    width={contactIconSize}
                  />
                ) : (
                  contactType + ":"
                )}
                {contactlink}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
