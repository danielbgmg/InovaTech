import "../../TeamSlideCards/_slide-card-styles.scss";
import Kleber from "../../../assets/iconsProfile/icon-pf-kleber.png";

export default function SlideCard() {
  return (
    <>
      <div className="slide-card">
        <div className="prof-img">
          <img src={Kleber} alt="Profile Photo" />
        </div>
        <div className="prof-details">
          <h5 className="prof-name">Kleber Barros</h5>
          <p className="prof-stack">Back-end</p>
        </div>
      </div>
    </>
  );
}
