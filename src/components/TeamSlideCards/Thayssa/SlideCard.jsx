import "../../TeamSlideCards/_slide-card-styles.scss";
import Thayssa from "../../../assets/iconsProfile/icon-pf-thayssa.png";

export default function SlideCard() {
  return (
    <>
      <div className="slide-card">
        <div className="prof-img">
          <img src={Thayssa} alt="Profile Photo" />
        </div>
        <div className="prof-details">
          <h5 className="prof-name">Thayssa Vasconcelos</h5>
          <p className="prof-stack">Back-end</p>
        </div>
      </div>
    </>
  );
}
