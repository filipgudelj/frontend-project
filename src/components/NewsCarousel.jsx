import Slider from "react-slick";
import NewsImg from "../images/News.jpg";
import NewsData from "../json/news.json";
import "../styles/main.css";

const NewsCarousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div className="NewsCarousel">
      <div className="NewsCarousel-line"></div>
      <div className="NewsCarousel-content">
        <h3 className="NewsCarousel-content-title">News Carousel</h3>
        <Slider {...settings} className="NewsCarousel-content-slider">
          {NewsData.map((news) => {
            return (
              <div className="NewsCarousel-content-slider-item" key={news.id}>
                <img
                  src={NewsImg}
                  alt="News"
                  className="NewsCarousel-content-slider-item-img"
                />
                <p className="NewsCarousel-content-slider-item-date">
                  {news.date}
                </p>
                <h3 className="NewsCarousel-content-slider-item-title">
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

export default NewsCarousel;
