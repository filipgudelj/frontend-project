import SportData from "../json/news.json";
import SportImg from "../images/News.jpg";
import { Link } from "react-router-dom";
import "../styles/main.css";

const Business = () => {
  const slicedSportData = SportData.slice(0, 4);
  return (
    <div className="business">
      <div className="business-line"></div>
      <div className="business-container">
        <div className="business-container-info">
          <h3 className="business-container-info-title">Business</h3>
          <div className="business-container-info-seeall">
            <Link
              to="/categorypage"
              className="business-container-info-seeall-link"
              href="#"
            >
              See all
            </Link>
          </div>
        </div>
        <div className="business-container-list">
          {slicedSportData.map((business) => {
            return (
              <div className="business-container-list-item" key={business.id}>
                <img
                  src={SportImg}
                  alt="business"
                  className="business-container-list-item-img"
                ></img>
                <div className="business-container-list-item-info">
                  <p className="business-container-list-item-info-date">
                    {business.date}
                  </p>
                  <h3 className="business-container-list-item-info-title">
                    {business.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Business;
