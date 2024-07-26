import "../../TeamSlideCards/_slide-card-styles.scss";
import Daniel from "../../../assets/iconsProfile/icon-pf-daniel.png";

export default function SlideCard() {
  return (
    <>
      <div className="slide-card">
        <div className="prof-img">
          <img src={Daniel} alt="Profile Photo" />
        </div>
        <div className="prof-details">
          <h5 className="prof-name">Daniel Gomes</h5>
          <p className="prof-stack">Front-end</p>
        </div>
      </div>
    </>
  );
}
