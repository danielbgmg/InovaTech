import Icon from "../../../assets/img/icon-card-2.png";
import "../../SkillCards/_CardStyles.scss";
export default function TechnologyCard() {
  return (
    <div className="skill-card">
      <img className="skill-icon" src={Icon} alt="" />
      <h6 className="skill-title">Tecnologia</h6>
      <p className="skill-desc">
        Fique à frente com as últimas tendências e inovações tecnológicas.
      </p>
    </div>
  );
}
