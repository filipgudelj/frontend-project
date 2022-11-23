import BigSlider from "./BigSlider";
import Sidebar from "./Sidebar";
import CategoryData from "../json/news.json";
import NewsImg from "../images/News.jpg";
import "../styles/main.css";

const Categorypage = () => {
  return (
    <div className="categorypage">
      <BigSlider />
      <div className="categorypage-content">
        <div className="categorypage-content-list">
          {CategoryData.map((news) => {
            return (
              <div className="categorypage-content-list-item" key={news.id}>
                <h1>{news.title}</h1>
                <img alt="News" src={NewsImg}></img>
              </div>
            );
          })}
        </div>
        <Sidebar className="categorypage-content-sidebar" />
      </div>
    </div>
  );
};

export default Categorypage;
