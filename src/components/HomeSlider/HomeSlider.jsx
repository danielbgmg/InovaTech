import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./_homeSlider.scss";
import SlideCard1 from "../TeamSlideCards/Daniel/SlideCard";
import SlideCard2 from "../TeamSlideCards/Gabriel/SlideCard";
import SlideCard3 from "../TeamSlideCards/Kleber/SlideCard";
import SlideCard4 from "../TeamSlideCards/Marco/SlideCard";
import SlideCard5 from "../TeamSlideCards/Martin/SlideCard";
import SlideCard6 from "../TeamSlideCards/Mayara/SlideCard";
import SlideCard7 from "../TeamSlideCards/Renata/SlideCard";
import SlideCard8 from "../TeamSlideCards/Thayssa/SlideCard";
import SlideCard9 from "../TeamSlideCards/Wesley/SlideCard";

function HomeSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <SlideCard1 />
        </div>
        <div>
          <SlideCard2 />
        </div>
        <div>
          <SlideCard3 />
        </div>
        <div>
          <SlideCard4 />
        </div>
        <div>
          <SlideCard5 />
        </div>
        <div>
          <SlideCard6 />
        </div>
        <div>
          <SlideCard7 />
        </div>
        <div>
          <SlideCard8 />
        </div>
        <div>
          <SlideCard9 />
        </div>
      </Slider>
    </div>
  );
}

export default HomeSlider;
