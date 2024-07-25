import Icon from "../../../assets/img/icon-card-1.png";
import "../../SkillCards/_CardStyles.scss";

export default function SoftSkillCard() {
  return (
    <div className="skill-card">
      <img className="skill-icon" src={Icon} alt="" />
      <h2 className="skill-title">SoftSkills</h2>
      <p className="skill-desc">
        Aprimore suas habilidades interpessoais e lidere com confiança.
      </p>
    </div>
  );
}
