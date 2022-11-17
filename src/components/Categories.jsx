import "../styles/main.css";

const Categories = () => {
  return (
    <div className="categories">
      <ul className="categories-list">
        <li className="categories-list-news">
          <h3 className="categories-list-news-title">NEWS</h3>
          <div className="categories-list-news-line"></div>
        </li>
        <li className="categories-list-business">
          <h3 className="categories-list-business-title">BUSINESS</h3>
          <div className="categories-list-business-line"></div>
        </li>
        <li className="categories-list-sport">
          <h3 className="categories-list-sport-title">SPORT</h3>
          <div className="categories-list-sport-line"></div>
        </li>
        <li className="categories-list-life">
          <h3 className="categories-list-life-title">LIFE</h3>
          <div className="categories-list-life-line"></div>
        </li>
        <li className="categories-list-tech">
          <h3 className="categories-list-tech-title">TECH</h3>
          <div className="categories-list-tech-line"></div>
        </li>
        <li className="categories-list-travel">
          <h3 className="categories-list-travel-title">TRAVEL</h3>
          <div className="categories-list-travel-line"></div>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
