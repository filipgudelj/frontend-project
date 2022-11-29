import NewsData from "../json/news.json";
import Sidebar from "./Sidebar";
import SinglePageInfo from "../images/SinglePageInfo.jpg";
import SinglePageSocial from "../images/SinglePageSocial.png";
import Author from "../images/Author.jpg";
import CommentsSection from "./parts/CommentsSection";
import { useParams } from "react-router-dom";
import "../styles/main.css";

const SinglePage = () => {
  const { id } = useParams();
  const foundNews = NewsData.find((obj) => {
    return obj.id === id;
  });
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
            src={SinglePageSocial}
            alt="Social"
            className="singlepage-content-info-second-img"
          ></img>
          <div className="singlepage-content-info-author">
            <h3 className="singlepage-content-info-author-title">
              About the Author
            </h3>
            <div className="singlepage-content-info-author-details">
              <img
                src={Author}
                alt="Author"
                className="singlepage-content-info-author-details-img"
              ></img>
              <p className="singlepage-content-info-author-details-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae quos voluptatibus, animi sunt consectetur blanditiis
                sapiente a nulla voluptatem alias distinctio optio? Commodi
                tenetur laboriosam iste aperiam libero delectus quae fugit nulla
                voluptates, est sed necessitatibus sunt illo. Magni, accusamus!
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <CommentsSection />
        </div>
        <Sidebar className="singlepage-content-sidebar" />
      </div>
    </div>
  );
};

export default SinglePage;
