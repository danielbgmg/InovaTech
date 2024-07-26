import "../_prof-card-styles.scss";
import Daniel from "../../../assets/iconsProfile/icon-pf-daniel.png";
import Github from "../../../assets/img/icon-git.png";
import Linkedin from "../../../assets/img/icon-linkedin.png";

export default function ProfileCard() {
  return (
    <>
      <div className="prof-card">
        <div className="prof-img">
          <img src={Daniel} alt="Profile Photo" />
        </div>
        <div className="prof-details">
          <h5 className="prof-name">Daniel Gomes</h5>
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
