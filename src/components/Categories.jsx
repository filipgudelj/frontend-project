import "../styles/Categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <ul className="categories-list">
        <li className="categories-list-news">NEWS</li>
        <li className="categories-list-container-news"></li>
        <li className="categories-list-business">BUSINESS</li>
        <li className="categories-list-container-business"></li>
        <li className="categories-list-sport">SPORT</li>
        <li className="categories-list-container-sport"></li>
        <li className="categories-list-life">LIFE</li>
        <li className="categories-list-container-life"></li>
        <li className="categories-list-tech">TECH</li>
        <li className="categories-list-container-tech"></li>
        <li className="categories-list-travel">TRAVEL</li>
        <li className="categories-list-container-travel"></li>
      </ul>
    </div>
  );
};

export default Categories;
