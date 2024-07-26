import "../_prof-card-styles.scss";
import Renata from "../../../assets/iconsProfile/icon-pf-renata.png";
import Github from "../../../assets/img/icon-git.png";
import Linkedin from "../../../assets/img/icon-linkedin.png";
export default function ProfileCard() {
  return (
    <>
      <div className="prof-card">
        <div className="prof-img">
          <img src={Renata} alt="Profile Photo" />
        </div>
        <div className="prof-details">
          <h5 className="prof-name">Renata Bassos</h5>
          <p className="prof-stack">UX/UI Designer</p>
        </div>
        <div className="icons">
          <img src={Github} alt="Github Icon" />
          <img src={Linkedin} alt="Linkedin Icon" />
        </div>
      </div>
    </>
  );
}
