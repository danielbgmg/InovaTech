/* eslint-disable react/prop-types */
import "../_prof-card-styles.scss";
import Martin from "../../../assets/iconsProfile/icon-pf-martin.png";
import Daniel from "../../../assets/iconsProfile/icon-pf-daniel.png";
import Gabriel from "../../../assets/iconsProfile/icon-pf-gabriel.png";
import Kleber from "../../../assets/iconsProfile/icon-pf-kleber.png";
import Marco from "../../../assets/iconsProfile/icon-pf-marco.png";
import Mayara from "../../../assets/iconsProfile/icon-pf-mayara.png";
import Renata from "../../../assets/iconsProfile/icon-pf-renata.png";
import Thayssa from "../../../assets/iconsProfile/icon-pf-thayssa.png";
import Weslley from "../../../assets/iconsProfile/icon-pf-weslley.png";
import LinkedinIcon from "../../../assets/img/icon-linkedin.png";
import GithubIcon from "../../../assets/img/icon-git.png";

const teamMembers = [
  {
    image: Martin,
    name: "Martin Vitabar",
    stack: "Front-end",
    linkedin: "https://www.linkedin.com/in/martin-vitabar",
    github: "https://github.com/MVitabar",
  },
  {
    image: Daniel,
    name: "Daniel Gomes",
    stack: "Front-end",
    linkedin: "https://www.linkedin.com/in/danielgomes-front",
    github: "https://github.com/danielbgmg",
  },
  {
    image: Gabriel,
    name: "Gabriel Vasconcelos",
    stack: "Front-end",
    linkedin: "https://www.linkedin.com",
    github: "https://github.com",
  },
  {
    image: Kleber,
    name: "Kleber Barros",
    stack: "Back-end",
    linkedin: "https://www.linkedin.com",
    github: "https://github.com",
  },
  {
    image: Marco,
    name: "Marco Antônio",
    stack: "Back-end",
    linkedin: "https://www.linkedin.com/in/marco-ant%C3%B4nio-9b3b7327a",
    github: "https://github.com/anmarfp",
  },
  {
    image: Mayara,
    name: "Mayara Gonçalves",
    stack: "UX/UI Design",
    linkedin: "https://www.linkedin.com/in/mayaragoncalves-santos",
    github: "https://www.behance.net/mayaragonalves13",
  },
  {
    image: Renata,
    name: "Renata Bastos",
    stack: "UX/UI Design",
    linkedin: "https://www.linkedin.com/in/renata-bastos-design",
    github: "https://github.com",
  },
  {
    image: Thayssa,
    name: "Thayssa Vasconcelos",
    stack: "Back-end",
    linkedin: "https://www.linkedin.com",
    github: "https://github.com",
  },
  {
    image: Weslley,
    name: "Weslley Valério",
    stack: "Back-end",
    linkedin: "https://www.linkedin.com",
    github: "https://github.com",
  },
];

const ProfileCard = ({ image, name, stack, linkedin, github }) => {
  return (
    <div className="prof-card">
      <div className="prof-img">
        <img src={image} alt={`${name}'s Profile Photo`} />
      </div>
      <div className="prof-details">
        <h5 className="prof-name">{name}</h5>
        <p className="prof-stack">{stack}</p>
      </div>
      <div className="icons">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img src={LinkedinIcon} alt="LinkedIn Icon" />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <img src={GithubIcon} alt="GitHub Icon" />
        </a>
      </div>
    </div>
  );
};

export default function SlideCard() {
  return (
    <>
      {teamMembers.map((member, index) => (
        <ProfileCard
          key={index}
          image={member.image}
          name={member.name}
          stack={member.stack}
          linkedin={member.linkedin}
          github={member.github}
        />
      ))}
    </>
  );
}
