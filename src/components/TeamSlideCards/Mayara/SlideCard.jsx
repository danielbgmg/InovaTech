import "../../TeamSlideCards/_slide-card-styles.scss";
import Mayara from "../../../assets/iconsProfile/icon-pf-mayara.png";

export default function SlideCard() {
  return (
    <>
      <div className="slide-card">
        <div className="prof-img">
          <img src={Mayara} alt="Profile Photo" />
        </div>
        <div className="prof-details">
          <h5 className="prof-name">Mayara Gonçalves</h5>
          <p className="prof-stack">UX/UI Designer</p>
        </div>
      </div>
    </>
  );
}
