import "./_about.scss";
import HeaderSection from '../../components/HeaderSection/HeaderSection';

export default function about() {
  return (
    <div className="main">
      <HeaderSection 
      title="Sobre Nós"
      />

      <section>
        <div className="header-text">
          <div className="about-header">
            <div>
              <h2 className="about-subTitle">Sejam Bem Vindos à</h2>
              <div>
                <img src="/src/assets/img/logo-name.png" alt="" />
              </div>
            </div>
            <p>
              Na InovaTech, nossa paixão por inovação e tecnologia nos impulsiona a entregar soluções de ponta que transformam ideias em realidade. Fundada por entusiastas da tecnologia, nossa missão é capacitar indivíduos e empresas com ferramentas e conhecimentos essenciais para prosperar no mundo digital em constante evolução.
            </p>
          </div>
          <img src="/src/assets/img/logo-icon.png" alt="" className="logo-g"/>
        </div>
        <div>
          <p>
            Nossa equipe é composta por especialistas talentosos em diversas áreas, incluindo desenvolvimento back-end, front-end e design UX/UI. Juntos, combinamos criatividade, expertise técnica e uma abordagem centrada no usuário para desenvolver produtos que não apenas atendem às necessidades atuais, mas também antecipam os desafios futuros.
          </p>
          <p>
            Valorizamos a educação contínua e acreditamos que o aprendizado é a chave para o progresso. Por isso, oferecemos uma ampla gama de cursos e recursos educativos, projetados para aprimorar suas habilidades e mantê-lo à frente das tendências tecnológicas.
          </p>
          <p>
            Na InovaTech, cada projeto é uma nova oportunidade de inovar e exceder expectativas. Estamos comprometidos em criar experiências excepcionais e soluções tecnológicas que impulsionam o sucesso de nossos clientes e parceiros. Junte-se a nós nessa jornada de transformação e descubra como podemos ajudar a levar suas ideias ao próximo nível.
          </p>
        </div>
      </section>

    </div>
  );
}
