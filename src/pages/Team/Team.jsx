import ProfileCard1 from "../../components/ProfileCards/Gabriel/ProfileCard";
import ProfileCard2 from "../../components/ProfileCards/Daniel/ProfileCard";
import ProfileCard3 from "../../components/ProfileCards/Kleber/ProfileCard";
import ProfileCard9 from "../../components/ProfileCards/Marco/ProfileCard";

import ProfileCard4 from "../../components/ProfileCards/Martin/ProfileCard";
import ProfileCard5 from "../../components/ProfileCards/Mayara/ProfileCard";
import ProfileCard6 from "../../components/ProfileCards/Renata/ProfileCard";
import ProfileCard7 from "../../components/ProfileCards/Thayssa/ProfileCard";
import ProfileCard8 from "../../components/ProfileCards/Wesley/ProfileCard";
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
        <ProfileCard1 />
        <ProfileCard2 />
        <ProfileCard3 />
        <ProfileCard4 />
        <ProfileCard5 />
        <ProfileCard6 />
        <ProfileCard7 />
        <ProfileCard8 />
        <ProfileCard9 />
      </section>
    </div>
  );
}
