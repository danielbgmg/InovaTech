import "../../TeamSlideCards/_slide-card-styles.scss";
import Gabriel from "../../../assets/iconsProfile/icon-pf-gabriel.png";

export default function SlideCard() {
  return (
    <>
      <div className="slide-card">
        <div className="prof-img">
          <img src={Gabriel} alt="Profile Photo" />
        </div>
        <div className="prof-details">
          <h5 className="prof-name">Gabriel Vasconcelos</h5>
          <p className="prof-stack">Front-end</p>
        </div>
      </div>
    </>
  );
}
