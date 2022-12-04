import BigSlider from "./BigSlider";
import News from "./News";
import Sport from "./Sport";
import Business from "./Business";
import Sidebar from "./Sidebar";
import NewsCarousel from "./NewsCarousel";
import SmallSlider from "./SmallSlider";
import Gallery from "./Gallery";
import "../styles/main.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <BigSlider />
      <div className="homepage-content">
        <div className="homepage-content-categories">
          <News className="homepage-content-categories-news" />
          <Sport className="homepage-content-categories-sport" />
          <Business className="homepage-content-categories-business" />
          <NewsCarousel className="homepage-content-categories-newscarousel" />
          <div className="homepage-content-categories-sliders">
            <SmallSlider
              name="Editorials"
              className="homepage-content-categories-sliders"
            />
            <SmallSlider
              name="Local News"
              margin={true}
              className="homepage-content-categories-sliders"
            />
          </div>
        </div>
        <Sidebar className="homepage-content-sidebar" />
      </div>
      <Gallery />
    </div>
  );
};

export default HomePage;
