import "../_CoursesCardStyles.scss";
import Icon from "../../../assets/img/icon-card-6.png";
export default function EducationCard() {
  return (
    <div className="course-card">
      <img className="course-icon" src={Icon} alt="" />
      <h2 className="course-title">Gestão de tempo</h2>
      <p className="course-desc">
        Melhore sua capacidade de gerenciar o tempo, aumentar a produtividade e
        equilibrar o trabalho e da vida pessoal.{" "}
      </p>
    </div>
  );
}
