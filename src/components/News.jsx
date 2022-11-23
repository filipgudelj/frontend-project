import newsData from "../json/news.json";
import NewsImg from "../images/News.jpg";
import { Link } from "react-router-dom";
import "../styles/main.css";

const News = () => {
  const slicedNewsData = newsData.slice(0, 3);
  return (
    <div className="news">
      <div className="news-line"></div>
      <div className="news-container">
        <div className="news-container-info">
          <h3 className="news-container-info-title">News</h3>
          <div className="news-container-info-seeall">
            <Link
              to="/categorypage"
              className="news-container-info-seeall-link"
              href="#"
            >
              See all
            </Link>
          </div>
        </div>
        <div className="news-container-list">
          {slicedNewsData.map((news) => {
            return (
              <div className="news-container-list-item" key={news.id}>
                <img
                  src={NewsImg}
                  alt="News"
                  className="news-container-list-item-img"
                ></img>
                <div className="news-container-list-item-info">
                  <p className="news-container-list-item-info-date">
                    {news.date}
                  </p>
                  <h3 className="news-container-list-item-info-title">
                    {news.title}
                  </h3>
                  <p className="news-container-list-item-info-id">{news.id}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
