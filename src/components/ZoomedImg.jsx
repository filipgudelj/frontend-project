import NewsImg from "../images/News.jpg";
import Zoom from "../svgs/ZoomOut.svg";
import { useState } from "react";
import "../styles/main.css";

const ZoomedImg = () => {
  const [zoom, setZoom] = useState(false);
  const handleZoom = () => {
    setZoom(!zoom);
  };
  return (
    <div
      className="zoomedimg"
      style={zoom ? { zIndex: "-100" } : { zIndex: "100" }}
    >
      <div className="zoomedimg-wrapper">
        <img src={NewsImg} alt="News" className="zoomedimg-wrapper-img"></img>
        <button className="zoomedimg-wrapper-btn" onClick={() => handleZoom()}>
          <img
            src={Zoom}
            alt="Zoom"
            className="zoomedimg-wrapper-btn-zoomout"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default ZoomedImg;
