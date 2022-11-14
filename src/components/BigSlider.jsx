import Slider from "react-slick";
import BigSlider1 from "../images/BigSlider1.jpg";
import BigSlider2 from "../images/BigSlider2.jpg";
import BigSlider3 from "../images/BigSlider3.jpg";
import Comment from "../images/Comment.png";
import "../styles/slick/BigSlider.scss";
import "../styles/slick/BigSlider-theme.scss";

const BigSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="Slider">
      <div>
        <div className="Slider-description">
          <div className="Slider-description-wrapper">
            <h4 className="Slider-description-wrapper-date Slider-description-1">
              September 26, 2013
            </h4>
            <h4 className="Slider-description-wrapper-comments">
              <img src={Comment} alt="Comment" className="comments-img" />
              &nbsp;&nbsp;22 Comments
            </h4>
          </div>
          <h3 className="Slider-description-title">
            Lorem, ipsum dolor sit amet consectetur adipisicing
          </h3>
          <button className="Slider-description-btn">Read article</button>
        </div>
        <img src={BigSlider1} alt="Slider 1" className="Slider-img"></img>
      </div>
      <div>
        <div className="Slider-description">
          <div className="Slider-description-wrapper">
            <h4 className="Slider-description-wrapper-date Slider-description-1">
              April 26, 2013
            </h4>
            <h4 className="Slider-description-wrapper-comments">
              <img src={Comment} alt="Comment" className="comments-img" />
              &nbsp;&nbsp;12 Comments
            </h4>
          </div>
          <h3 className="Slider-description-title">
            Lorem, ipsum dolor sit amet consectetur adipisicing
          </h3>
          <button className="Slider-description-btn">Read article</button>
        </div>
        <img src={BigSlider2} alt="Slider 2" className="Slider-img" />
      </div>
      <div>
        <div className="Slider-description">
          <div className="Slider-description-wrapper">
            <h4 className="Slider-description-wrapper-date Slider-description-1">
              July 26, 2013
            </h4>
            <h4 className="Slider-description-wrapper-comments">
              <img src={Comment} alt="Comment" className="comments-img" />
              &nbsp;&nbsp;30 Comments
            </h4>
          </div>
          <h3 className="Slider-description-title">
            Lorem, ipsum dolor sit amet consectetur adipisicing
          </h3>
          <button className="Slider-description-btn">Read article</button>
        </div>
        <img src={BigSlider3} alt="Slider 3" className="Slider-img" />
      </div>
    </Slider>
  );
};

export default BigSlider;
