import "../../TeamSlideCards/_slide-card-styles.scss";
import Renata from "../../../assets/iconsProfile/icon-pf-renata.png";

export default function SlideCard() {
  return (
    <>
      <div className="slide-card">
        <div className="prof-img">
          <img src={Renata} alt="Profile Photo" />
        </div>
        <div className="prof-details">
          <h5 className="prof-name">Renata Bassos</h5>
          <p className="prof-stack">UX/UI Designer</p>
        </div>
      </div>
    </>
  );
}
