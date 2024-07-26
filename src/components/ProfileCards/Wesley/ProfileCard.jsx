import "../_prof-card-styles.scss";
import Weslley from "../../../assets/iconsProfile/icon-pf-weslley.png";
import Github from "../../../assets/img/icon-git.png";
import Linkedin from "../../../assets/img/icon-linkedin.png";
export default function ProfileCard() {
  return (
    <>
      <section className="prof-card">
        <div className="prof-img">
          <img src={Weslley} alt="Profile Photo" />
        </div>
        <div className="prof-details">
          <h5 className="prof-name">Weslley</h5>
          <p className="prof-stack">Back-End</p>
        </div>
        <div className="icons">
          <img src={Github} alt="Github Icon" />
          <img src={Linkedin} alt="Linkedin Icon" />
        </div>
      </section>
    </>
  );
}
