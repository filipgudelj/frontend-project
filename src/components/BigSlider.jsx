import Slider from "react-slick";
import BigSlider1 from "../images/BigSlider1.jpg";
import BigSlider2 from "../images/BigSlider2.jpg";
import BigSlider3 from "../images/BigSlider3.jpg";
import Comment from "../svgs/Comment.jsx";
import "../styles/main.css";

const BigSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="BigSlider">
      <div>
        <div className="BigSlider-description">
          <div className="BigSlider-description-wrapper">
            <h4 className="BigSlider-description-wrapper-date">
              September 26, 2013
            </h4>
            <h4 className="BigSlider-description-wrapper-comments">
              <Comment className="comments-svg" />
              &nbsp;&nbsp;22 Comments
            </h4>
          </div>
          <h3 className="BigSlider-description-title">
            Lorem, ipsum dolor sit amet consectetur adipisicing
          </h3>
          <button className="BigSlider-description-btn">Read article</button>
        </div>
        <img src={BigSlider1} alt="Slider 1" className="BigSlider-img"></img>
      </div>
      <div>
        <div className="BigSlider-description">
          <div className="BigSlider-description-wrapper">
            <h4 className="BigSlider-description-wrapper-date">
              April 26, 2013
            </h4>
            <h4 className="BigSlider-description-wrapper-comments">
              <Comment className="comments-svg" />
              &nbsp;&nbsp;12 Comments
            </h4>
          </div>
          <h3 className="BigSlider-description-title">
            Lorem, ipsum dolor sit amet consectetur adipisicing
          </h3>
          <button className="BigSlider-description-btn">Read article</button>
        </div>
        <img src={BigSlider2} alt="Slider 2" className="BigSlider-img" />
      </div>
      <div>
        <div className="BigSlider-description">
          <div className="BigSlider-description-wrapper">
            <h4 className="BigSlider-description-wrapper-date">
              July 26, 2013
            </h4>
            <h4 className="BigSlider-description-wrapper-comments">
              <Comment className="comments-svg" />
              &nbsp;&nbsp;30 Comments
            </h4>
          </div>
          <h3 className="BigSlider-description-title">
            Lorem, ipsum dolor sit amet consectetur adipisicing
          </h3>
          <button className="BigSlider-description-btn">Read article</button>
        </div>
        <img src={BigSlider3} alt="Slider 3" className="BigSlider-img" />
      </div>
    </Slider>
  );
};

export default BigSlider;
