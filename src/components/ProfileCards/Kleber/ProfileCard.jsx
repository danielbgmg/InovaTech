import "../_prof-card-styles.scss";
import Kleber from "../../../assets/iconsProfile/icon-pf-kleber.png";
import Github from "../../../assets/img/icon-git.png";
import Linkedin from "../../../assets/img/icon-linkedin.png";
export default function ProfileCard() {
  return (
    <>
      <div className="prof-card">
        <div className="prof-img">
          <img src={Kleber} alt="Profile Photo" />
        </div>
        <div className="prof-details">
          <h5 className="prof-name">Kleber Barros</h5>
          <p className="prof-stack">Back-end</p>
        </div>
        <div className="icons">
          <img src={Github} alt="Github Icon" />
          <img src={Linkedin} alt="Linkedin Icon" />
        </div>
      </div>
    </>
  );
}
