import Icon from "../../../assets/img/icon-card-3.png";
import "../../SkillCards/_CardStyles.scss";
export default function EducationCard() {
  return (
    <div className="skill-card">
      <img className="skill-icon" src={Icon} alt="" />
      <h6 className="skill-title">Educação e Aprendizado</h6>
      <p className="skill-desc">Invista no seu futuro com cursos essenciais.</p>
    </div>
  );
}
