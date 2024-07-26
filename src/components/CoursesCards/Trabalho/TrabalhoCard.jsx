import "../_CoursesCardStyles.scss";
import Icon from "../../../assets/img/icon-card-5.png";
export default function EducationCard() {
  return (
    <div className="course-card">
      <img className="course-icon" src={Icon} alt="" />
      <h2 className="course-title">Trabalho em Equipe</h2>
      <p className="course-desc">
        Aprenda a trabalhar eficazmente em equipes, promovendo colaboração e
        alcançando objetivos comuns.{" "}
      </p>
    </div>
  );
}
