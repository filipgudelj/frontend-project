import Slider from "react-slick";
import NewsImg from "../images/News.jpg";
import SecondNewsImg from "../images/SecondNews.jpg";
import NewsData from "../json/news.json";
import Comment from "../svgs/Comment.svg";
import { Link } from "react-router-dom";
import "../styles/main.css";

const BigSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slicedNewsData = NewsData.slice(0, 3);
  return (
    <Slider {...settings} className="BigSlider">
      {slicedNewsData.map((news) => {
        return (
          <div key={news.id}>
            <div className="BigSlider-description">
              <div className="BigSlider-description-wrapper">
                <h4 className="BigSlider-description-wrapper-date">
                  {news.date}
                </h4>
                <h4 className="BigSlider-description-wrapper-comments">
                  <img src={Comment} alt="Comment" className="comments-svg" />
                  &nbsp;&nbsp;{news.comments} Comments
                </h4>
              </div>
              <h3 className="BigSlider-description-title">{news.title}</h3>
              <Link to={`/singlepage/${news.id}`}>
                <button className="BigSlider-description-btn">
                  Read article
                </button>
              </Link>
            </div>
            {news.id === "2" ? (
              <img src={SecondNewsImg} alt="News" className="BigSlider-img" />
            ) : (
              <img src={NewsImg} alt="News" className="BigSlider-img" />
            )}
          </div>
        );
      })}
    </Slider>
  );
};

export default BigSlider;
