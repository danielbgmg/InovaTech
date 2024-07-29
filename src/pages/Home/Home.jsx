import "./_home.scss";
import Image from "../../assets/img/robos-home.png";
import SoftSkillCard from "../../components/SkillCards/SoftSkills/SoftSkillCard";
import TechnologyCard from "../../components/SkillCards/Technology/TechnologyCard";
import EducationCard from "../../components/SkillCards/Education/EducationCard";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import TrabalhoCard from "../../components/CoursesCards/Trabalho/TrabalhoCard";
import ComunicacaoCard from "../../components/CoursesCards/Comunicacao/ComunicacaoCard";
import GestaoCard from "../../components/CoursesCards/Gestao/GestaoCard";
import LiderancaCard from "../../components/CoursesCards/Lideranca/LiderancaCard";
import Button from "../../components/Button/Button";

export default function Home() {
  return (
    <div className="main">
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
      <section className="about">
        <article className="about-us">
          <h2 className="title-about">Sobre Nós</h2>
          <p className="desc-about">
          Na InovaTech, nossa paixão por inovação e tecnologia nos impulsiona a entregar soluções de ponta que transformam ideias em realidade. Fundada por entusiastas da tecnologia, nossa missão é capacitar indivíduos e empresas com ferramentas e conhecimentos essenciais para prosperar no mundo digital em constante evolução.
          </p>
          <Button 
            to='/about'
            name='Saiba Mais'
          />
        </article>
        <img className="robos-home" src={Image} alt="Robos da InovaTech" />
      </section>
      <section className="team">
        <div className="team-box">
          <h2 className="team-title">Nossa Equipe</h2>
          <p className="team-desc">
            Conheça os profissionais dedicados que fazem parte da InovaTech.
            Nossa equipe é formada por especialistas em back-end, front-end e
            UX/UI design, comprometidos em criar soluções tecnológicas
            inovadoras e eficazes.
          </p>
        </div>
        <div className="slider-box">
          <HomeSlider />
        </div>
        <Button 
            to='/team'
            name='Saiba Mais'
          />
      </section>
      <section className="courses">
        <div className="courses-details">
          <h2 className="courses-title">Nossos Cursos</h2>
          <p className="courses-desc">
            Melhore suas habilidades interpessoais e torne-se um profissional
            mais completo com nossos cursos de soft skills. Aprenda comunicação
            eficaz, liderança, gestão de tempo e muito mais para alcançar o
            sucesso em sua carreira.
          </p>
        </div>
        <div className="courses-card-box">
          <TrabalhoCard />
          <ComunicacaoCard />
          <GestaoCard />
          <LiderancaCard />
        </div>
        <Button 
            to='/courses'
            name='Ver Cursos'
          />
      </section>
      <section className="blog"></section>
    </div>
  );
}
