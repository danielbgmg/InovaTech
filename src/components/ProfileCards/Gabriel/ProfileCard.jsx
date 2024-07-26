import "../_prof-card-styles.scss";
import Gabriel from "../../../assets/iconsProfile/icon-pf-gabriel.png";
import Github from "../../../assets/img/icon-git.png";
import Linkedin from "../../../assets/img/icon-linkedin.png";
export default function ProfileCard() {
  return (
    <>
      <div className="prof-card">
        <div className="prof-img">
          <img src={Gabriel} alt="Profile Photo" />
        </div>
        <div className="prof-details">
          <h5 className="prof-name">Gabriel Vasconcelos</h5>
          <p className="prof-stack">Front-end</p>
        </div>
        <div className="icons">
          <img src={Github} alt="Github Icon" />
          <img src={Linkedin} alt="Linkedin Icon" />
        </div>
      </div>
    </>
  );
}
