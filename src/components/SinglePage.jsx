import NewsData from "../json/news.json";
import Sidebar from "./Sidebar";
import SinglePageInfo from "../images/SinglePageInfo.jpg";
import SInglePageSocial from "../images/SinglePageSocial.png";
import { useParams } from "react-router-dom";
import "../styles/main.css";

const SinglePage = () => {
  const { id } = useParams();
  const foundNews = NewsData.find((obj) => {
    return obj.id === id;
  });
  console.log(foundNews);
  return (
    <div className="singlepage">
      <div className="singlepage-header">
        <div className="singlepage-header-img">
          <p className="singlepage-header-img-date">{foundNews.date}</p>
          <div className="singlepage-header-img-title">{foundNews.title}</div>
        </div>
      </div>
      <div className="singlepage-content">
        <div className="singlepage-content-info">
          <p className="singlepage-content-info-first-paragraph">
            {foundNews["first-paragraph"]}
          </p>
          <img
            src={SinglePageInfo}
            alt="Info"
            className="singlepage-content-info-first-img"
          ></img>
          <p className="singlepage-content-info-second-paragraph">
            {foundNews["second-paragraph"]}
          </p>
          <img
            src={SInglePageSocial}
            alt="Social"
            className="singlepage-content-info-second-img"
          ></img>
        </div>
        <Sidebar className="singlepage-content-sidebar" />
      </div>
    </div>
  );
};

export default SinglePage;
