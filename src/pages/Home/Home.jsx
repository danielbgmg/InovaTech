import "./_home.scss";
import SoftSkillCard from "../../components/SkillCards/SoftSkills/SoftSkillCard";
import TechnologyCard from "../../components/SkillCards/Technology/TechnologyCard";
import EducationCard from "../../components/SkillCards/Education/EducationCard";
export default function Home() {
  return (
    <div>
      <section className="hero">
        <article className="welcome">
          <h1 className="welcome-title">Bem-vindo à InovaTech</h1>
          <p className="welcome-text">
            Transforme seu futuro com tecnologia e softSkill.
            <br /> Descubra cursos, desenvolva suas habilidades e fique à frente
            no mundo digital
          </p>
        </article>
      </section>
      <section className="skill-cards">
        <SoftSkillCard />
        <TechnologyCard />
        <EducationCard />
      </section>
    </div>
  );
}
