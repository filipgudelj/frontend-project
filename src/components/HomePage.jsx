import BigSlider from "./BigSlider";
import News from "./News";
import Sport from "./Sport";
import Sidebar from "./Sidebar";
import "../styles/main.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <BigSlider />
      <div className="homepage-content">
        <div className="homepage-content-categories">
          <News className="homepage-content-categories-news" />
          <Sport className="homepage-content-categories-sport" />
        </div>
        <Sidebar className="homepage-content-sidebar" />
      </div>
    </div>
  );
};

export default HomePage;
