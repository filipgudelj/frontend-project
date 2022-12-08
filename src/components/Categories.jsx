import { Link } from "react-router-dom";
import categoriesData from "../json/categories.json";
import "../styles/main.css";

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories-list">
        {categoriesData.map((category) => {
          return (
            <div className="categories-list-item" key={category.id}>
              <Link to="/categorypage">
                <button
                  key={category.id}
                  className={`categories-list-item-btn categories-list-item-btn-${category.color}`}
                >
                  <div className="categories-list-item-btn-text">
                    {category.name}
                  </div>
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
