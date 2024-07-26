import "../_prof-card-styles.scss";
import Mayara from "../../../assets/iconsProfile/icon-pf-mayara.png";
import Github from "../../../assets/img/icon-git.png";
import Linkedin from "../../../assets/img/icon-linkedin.png";
export default function ProfileCard() {
  return (
    <>
      <div className="prof-card">
        <div className="prof-img">
          <img src={Mayara} alt="Profile Photo" />
        </div>
        <div className="prof-details">
          <h5 className="prof-name">Mayara Gonçalves</h5>
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
