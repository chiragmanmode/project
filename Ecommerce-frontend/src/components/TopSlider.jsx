import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase:"linear"
  };

  return (
    <>
      <Slider {...settings}>
          

               
        <div className="wdt ">
          <img className="img" alt="pic1" src={"assets/slider1.jpg"} />
        </div>

        {/* <div className="wdt ">
          <img className="img" alt="pic1" src={"assets/slider2.png"} />
        </div> */}

        <div className="wdt">
          <img className="img" alt="pic1" src={"assets/slider3.png"} />
        </div>
        {/* <div className="wdt">
          <img className="img" alt="pic1" src={"assets/slider4.jpg"} />
        </div> */}
        <div className="wdt">
          <img className="img" alt="pic1" src={"assets/slider5.jpg"} />
        </div>
        <div className="wdt">
          <img className="img" alt="pic1" src={"assets/slider6.png"} />
        </div>
        <div className="wdt">
          <img className="img" alt="pic1" src={"assets/slider7.jpg"} />
        </div>
        <div className="wdt">
          <img className="img" alt="pic1" src={"assets/slider8.png"} />
        </div>
        {/* <div className="wdt">
          <img className="img" alt="pic1" src={"assets/slider9.jpg"} />
        </div> */}
        <div className="wdt">
          <img className="img" alt="pic1" src={"assets/slider10.jpg"} />
        </div>
        <div className="wdt">
          <img className="img" alt="pic1" src={"assets/slider11.jpg"} />
        </div>
      </Slider>
    </>
  );
}

export default TopSlider;
