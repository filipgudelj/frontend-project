import Slider from "react-slick";
import NewsImg from "../images/News.jpg";
import NewsData from "../json/news.json";
import "../styles/main.css";

const SmallSlider = ({ name, margin }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      className="SmallSlider"
      style={margin ? { marginLeft: 13 + "px" } : { marginLeft: 0 + "px" }}
    >
      <div className="SmallSlider-line"></div>
      <div className="SmallSlider-content">
        <h3 className="SmallSlider-content-title">{name}</h3>
        <Slider {...settings} className="SmallSlider-content-slider">
          {NewsData.map((news) => {
            return (
              <div className="SmallSlider-content-slider-item" key={news.id}>
                <img
                  src={NewsImg}
                  alt="News"
                  className="SmallSlider-content-slider-item-img"
                />
                <p className="SmallSlider-content-slider-item-date">
                  {news.date}
                </p>
                <h3 className="SmallSlider-content-slider-item-title">
                  {news.title}
                </h3>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SmallSlider;
