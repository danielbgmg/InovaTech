import "../../TeamSlideCards/_slide-card-styles.scss";
import Weslley from "../../../assets/iconsProfile/icon-pf-weslley.png";

export default function SlideCard() {
  return (
    <>
      <section className="slide-card">
        <div className="prof-img">
          <img src={Weslley} alt="Profile Photo" />
        </div>
        <div className="prof-details">
          <h5 className="prof-name">Weslley</h5>
          <p className="prof-stack">Back-End</p>
        </div>
      </section>
    </>
  );
}
