import "../_prof-card-styles.scss";
import Thayssa from "../../../assets/iconsProfile/icon-pf-thayssa.png";
import Github from "../../../assets/img/icon-git.png";
import Linkedin from "../../../assets/img/icon-linkedin.png";
export default function ProfileCard() {
  return (
    <>
      <div className="prof-card">
        <div className="prof-img">
          <img src={Thayssa} alt="Profile Photo" />
        </div>
        <div className="prof-details">
          <h5 className="prof-name">Thayssa Vasconcelos</h5>
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
