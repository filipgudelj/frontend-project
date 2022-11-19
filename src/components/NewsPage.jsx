import BigSlider from "./BigSlider";
import Sidebar from "./Sidebar";
import NewsData from "../json/news.json";
import NewsImg from "../images/News.jpg";
import "../styles/main.css";

const NewsPage = () => {
  return (
    <div className="newspage">
      <BigSlider />
      <div className="newspage-content">
        <div className="newspage-content-list">
          {NewsData.map((news) => {
            return (
              <div className="newspage-content-list-item">
                <h1>{news.title}</h1>
                <img alt="News" src={NewsImg}></img>
              </div>
            );
          })}
        </div>
        <Sidebar className="newspage-content-sidebar" />
      </div>
    </div>
  );
};

export default NewsPage;
