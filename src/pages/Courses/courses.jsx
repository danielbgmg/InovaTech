import Button from "../../components/Button/Button";
import HeaderPages from "../../components/HeaderSection/HeaderSection";
import "./_courses.scss";
export default function courses() {
  return (
    <div className="main">
      <HeaderPages 
        title='Cursos'
        parag='Aprimore suas habilidades e avance em sua carreira com nossos cursos especializados. Descubra uma variedade de programas de aprendizado projetados para desenvolver suas competências em tecnologia, soft skills e muito mais.'
      />
      <div className="courses-container">
        <div className="courses-cardInfo">
          <h5 className="courses-cardTitle">Inteligência Emocional</h5>
          <p className="courses-cardText">Aprenda a gerenciar suas emoções e fortalecer suas relações interpessoais com nosso curso de Inteligência Emocional.</p>
          <Button 
           to='/courses'
           name='Ver curso'
           width={209}
          />
        </div>
        <div className="courses-cardInfo">
          <h5 className="courses-cardTitle">Ambiente de Trabalho Tóxico</h5>
          <p className="courses-cardText">Identifique os sinais de um ambiente de trabalho tóxico e aprenda estratégias para lidar com esses desafios.</p>
          <Button 
           to='/courses'
           name='Ver curso'
           width={209}
          />
        </div>
        <div className="courses-cardInfo">
          <h5 className="courses-cardTitle">Inteligência Emocional</h5>
          <p className="courses-cardText">Aprenda a gerenciar suas emoções e fortalecer suas relações interpessoais com nosso curso de Inteligência Emocional.</p>
          <Button 
           to='/courses'
           name='Ver curso'
           width={209}
          />
        </div>
      </div>
    </div>
  );
}
