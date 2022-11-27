import BigSlider from "./BigSlider";
import Sidebar from "./Sidebar";
import CategoryData from "../json/news.json";
import NewsImg from "../images/News.jpg";
import Date from "../svgs/Date.svg";
import Pagination from "./parts/Pagination";
import { useState } from "react";
import "../styles/main.css";

const Categorypage = () => {
  const [news] = useState(CategoryData);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(6);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="categorypage">
      <BigSlider />
      <div className="categorypage-content">
        <div className="categorypage-content-list">
          <div className="categorypage-content-list-title">News</div>
          {currentNews.map((news) => {
            return (
              <div className="categorypage-content-list-item" key={news.id}>
                <h1 className="categorypage-content-list-item-title">
                  {news.title}
                </h1>
                <div className="categorypage-content-list-item-info-1">
                  <p className="categorypage-content-list-item-info-1-date">
                    <img src={Date} alt="Date" />
                    &nbsp;{news.date}
                  </p>
                  <p className="categorypage-content-list-item-info-1-author">
                    Author: {news.author}
                  </p>
                  <p className="categorypage-content-list-item-info-1-comments">
                    {news.comments} Comments
                  </p>
                </div>
                <div className="categorypage-content-list-item-info-2">
                  <img
                    src={NewsImg}
                    alt="News"
                    className="categorypage-content-list-item-info-2-img"
                  ></img>
                  <div className="categorypage-content-list-item-info-2-paragraph">
                    <p className="categorypage-content-list-item-info-2-paragraph-text">
                      {news["first-paragraph"]}
                    </p>
                    <button className="categorypage-content-list-item-info-2-paragraph-btn">
                      Read article
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <Pagination
            newsPerPage={newsPerPage}
            totalNews={news.length}
            paginate={paginate}
          />
        </div>
        <Sidebar className="categorypage-content-sidebar" />
      </div>
    </div>
  );
};

export default Categorypage;
