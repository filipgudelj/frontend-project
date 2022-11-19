import BigSlider from "./BigSlider";
import News from "./News";
import Sidebar from "./Sidebar";
import "../styles/main.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <BigSlider />
      <div className="homepage-content">
        <News className="homepage-content-news" />
        <Sidebar className="homepage-content-sidebar" />
      </div>
    </div>
  );
};

export default HomePage;
