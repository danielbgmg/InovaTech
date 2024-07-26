import "../../TeamSlideCards/_slide-card-styles.scss";
import Marco from "../../../assets/iconsProfile/icon-pf-marco.png";

export default function SlideCard() {
  return (
    <>
      <div className="slide-card">
        <div className="prof-img">
          <img src={Marco} alt="" />
        </div>
        <div className="prof-details">
          <h5 className="prof-name">Marco Antônio</h5>
          <p className="prof-stack">Back-end</p>
        </div>
      </div>
    </>
  );
}
