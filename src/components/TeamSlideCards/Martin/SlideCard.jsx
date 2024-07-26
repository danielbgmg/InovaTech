import "../../TeamSlideCards/_slide-card-styles.scss";
import Martin from "../../../assets/iconsProfile/icon-pf-martin.png";

export default function SlideCard() {
  return (
    <>
      <div className="slide-card">
        <div className="prof-img">
          <img src={Martin} alt="" />
        </div>
        <div className="prof-details">
          <h5 className="prof-name">Martin Vitabar</h5>
          <p className="prof-stack">Front-end</p>
        </div>
      </div>
    </>
  );
}
