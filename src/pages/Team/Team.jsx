import TeamCard from "../../components/ProfileCards/TeamCard/TeamCard";
import "./_team.scss";
export default function Team() {
  return (
    <div className="team-page">
      <section className="team">
        <h1 className="team-title">Nossa Equipe</h1>
        <p className="team-desc">
          Conheça os talentos por trás da InovaTech. Nossa equipe é formada por
          especialistas em back-end,
          <br /> front-end e UX/UI design, cada um trazendo suas habilidades
          únicas para criar soluções tecnológicas inovadoras.
        </p>
      </section>
      <section className="profiles">
        <TeamCard />
      </section>
    </div>
  );
}
