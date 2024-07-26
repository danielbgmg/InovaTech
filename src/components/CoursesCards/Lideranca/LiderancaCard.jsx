import "../_CoursesCardStyles.scss";
import Icon from "../../../assets/img/icon-card-7.png";
export default function EducationCard() {
  return (
    <div className="course-card">
      <img className="course-icon" src={Icon} alt="" />
      <h2 className="course-title">Liderança</h2>
      <p className="course-desc">
        Desenvolva habilidades de liderança para inspirar e motivar equipes,
        tomando decisões assertivas e estratégicas.{" "}
      </p>
    </div>
  );
}
