import SportData from "../json/news.json";
import SportImg from "../images/News.jpg";
import { Link } from "react-router-dom";
import "../styles/main.css";

const Sport = () => {
  const slicedSportData = SportData.slice(0, 3);
  return (
    <div className="sport">
      <div className="sport-line"></div>
      <div className="sport-container">
        <div className="sport-container-info">
          <h3 className="sport-container-info-title">Sport</h3>
          <div className="sport-container-info-seeall">
            <Link
              to="/categorypage"
              className="sport-container-info-seeall-link"
              href="#"
            >
              See all
            </Link>
          </div>
        </div>
        <div className="sport-container-list">
          {slicedSportData.map((sport) => {
            return (
              <div className="sport-container-list-item" key={sport.id}>
                <img
                  src={SportImg}
                  alt="sport"
                  className="sport-container-list-item-img"
                ></img>
                <div className="sport-container-list-item-info">
                  <p className="sport-container-list-item-info-date">
                    {sport.date}
                  </p>
                  <h3 className="sport-container-list-item-info-title">
                    {sport.title}
                  </h3>
                  <p className="sport-container-list-item-info-id">
                    {sport.id}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sport;
