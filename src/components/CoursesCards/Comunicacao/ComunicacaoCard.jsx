import "../_CoursesCardStyles.scss";
import Icon from "../../../assets/img/icon-card-4.png";
export default function EducationCard() {
  return (
    <div className="course-card">
      <img className="course-icon" src={Icon} alt="" />
      <h2 className="course-title">Comunicação eficaz</h2>
      <p className="course-desc">
        Aprenda técnicas para melhorar a clareza e a eficácia da sua
        comunicação, tanto verbal quanto escrita.{" "}
      </p>
    </div>
  );
}
