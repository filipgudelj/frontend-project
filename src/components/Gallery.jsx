import Slider from "react-slick";
import NewsImg from "../images/News.jpg";
import NewsData from "../json/news.json";
import ZoomIn from "../svgs/ZoomIn.svg";
import ZoomedImg from "./ZoomedImg";
import { useState } from "react";
import React from "react";
import "../styles/main.css";

const Gallery = () => {
  const [zoom, setZoom] = useState(false);
  const handleZoom = () => {
    if (zoom === false) {
      setZoom(true);
    } else {
      setZoom(false);
    }
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slicedNewsData = NewsData.slice(0, 7);
  return (
    <div>
      <Slider {...settings} className="gallery">
        {slicedNewsData.map((news) => {
          return (
            <div key={news.id}>
              <button className="gallery-btn" onClick={() => handleZoom()}>
                <img src={ZoomIn} alt="Zoom" className="gallery-btn-zoom"></img>
              </button>
              <img src={NewsImg} alt="News" className="gallery-img"></img>
            </div>
          );
        })}
      </Slider>
      {zoom ? <ZoomedImg /> : undefined}
    </div>
  );
};

export default Gallery;
