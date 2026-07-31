import "./main-page.css";
import { RatingRepeat } from "./components/rating/rating";
import PlaceholderIcon from "./icons/PlaceholderIcon";
import FirebaseIcon from "./icons/FirebaseIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import GithubIcon from "./icons/GithubIcon";

const contacts = {
  linkedin:
    "https://www.linkedin.com/in/leonardo-ferreira-dos-santos-629813181/",
  github: "https://github.com/Leolardo123",
};

// -------------------- ICON CONFIG
const contactIconSize = 50;
const techIconSize = 50;
const projectIconSize = 100;

// ------------------- TECHNOLOGIES
const technologies = {
  javascript: 4,
  postgresql: 4,
  java: 3,
  'C#': 1,
  dotnet: 1
};

export default function Home() {
  return (
    <div>
      <main>
        <div id="navigation-main">
          <button>Introdução</button>
          <button>Tecnologias</button>
          <button>Projetos</button>
          <button>Contato</button>
        </div>
        <div id="content-main">
          {/* INTRODUÇÃO */}
          <section>
            <div id="introduction">
              <h1> Introdução </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent vitae arcu sed sem egestas iaculis vel quis mi. Vivamus
                ex eros, pulvinar quis blandit ut, fringilla eu nibh. Duis a
                mollis lectus. Quisque interdum elit hendrerit, congue neque
                sed, facilisis erat. Vestibulum ultrices vehicula lorem
                venenatis dapibus. In eleifend purus et congue dapibus. Donec
                augue nisi, convallis in erat a, pretium blandit magna. Etiam
                tellus ex, aliquet eu ultrices vitae, cursus a leo. Curabitur
                posuere ligula felis, nec vehicula libero interdum quis. Aliquam
                dignissim erat lorem, ut placerat neque lacinia ut. Mauris ut
                tristique neque, blandit fermentum metus. Vestibulum egestas
                turpis mauris, sed porta mauris cursus cursus. Praesent ligula
                lacus, vehicula non lobortis ac, volutpat a massa. Maecenas ac
                eros fermentum, pharetra ex aliquet, ultricies nisi. Etiam
                blandit eros nulla, eu pulvinar sem euismod a.

                {"====>"}
              </p>
            </div>
          </section>
          {/* TECNOLOGIAS */}
          <section>
            <div id="technology">
              <div id="technology-description">
                <h1>Tecnologias</h1>
                <p>
                  Morbi tristique a turpis ut commodo. Praesent pellentesque,
                  erat quis laoreet pharetra, augue metus luctus quam, a lacinia
                  arcu est vitae libero. Vestibulum ante ipsum primis in
                  faucibus orci luctus et ultrices posuere cubilia curae; In vel
                  nunc non justo elementum porttitor. Vestibulum vestibulum ex
                  et dolor elementum tempus. Sed ut velit porttitor magna
                  pretium cursus. In luctus, tortor at aliquam interdum, nisl
                  magna egestas metus, non auctor neque eros quis nisl. Aliquam
                  varius libero sem, nec feugiat quam lobortis quis.
                </p>
              </div>
              <div id="technology-details">
                <div id="technology-list">
                  {Object.entries(technologies).map(
                    ([keyTech, ratingValue]) => {
                      return (
                        <div
                          key={`technology-rating-${keyTech}`}
                          className="technology-item-rating"
                        >
                          <RatingRepeat rating={ratingValue} />
                          <label>
                            {keyTech}                            
                          </label>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            </div>
          </section>
          {/* PROJETOS */}
          <section>
            <div id="projects">
              <div id="projects-display">
                {Array.from({ length: 8 }, (_, index) => {
                  return (
                    <div
                      key={`technology-card-${index}`}
                      className="card-project"
                    >
                      <PlaceholderIcon
                        width={projectIconSize}
                        height={projectIconSize}
                      />
                      <div className="card-project-description">
                        <p>
                          Donec odio magna, lobortis id faucibus sit amet,
                          condimentum in odio. Maecenas porta, nibh eget
                          facilisis varius, mauris libero viverra velit, et
                          placerat dui dolor vel ligula.
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          {/* CONTATO */}
          <section>
            {/* TODO::MAKE CLICKABLE AGAIN */}
            <div id="contacts">
              <a href={contacts.linkedin} className="unclickable">
                <LinkedinIcon
                  height={contactIconSize}
                  width={contactIconSize}
                />
              </a>
              <a href={contacts.github} className="unclickable">
                <GithubIcon height={contactIconSize} width={contactIconSize} />
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
