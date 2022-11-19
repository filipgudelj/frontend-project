import PlayBtn from "../../svgs/PlayBtn.svg";
import KenazTV from "../../images/KenazTV.jpg";

const SidebarKenaz = () => {
  return (
    <div className="sidebar-kenaz">
      <div className="sidebar-kenaz-title">Kenaz TV</div>
      <div className="sidebar-kenaz-video">
        <img
          src={KenazTV}
          alt="Kenaz TV"
          className="sidebar-kenaz-video-img"
        ></img>
        <div className="sidebar-kenaz-video-play">
          <img
            src={PlayBtn}
            alt="Play Button"
            className="sidebar-kenaz-video-play-btn"
          ></img>
        </div>
      </div>
      <div className="sidebar-kenaz-info">
        <p className="sidebar-kenaz-info-date">August 26, 2013</p>
        <h3 className="sidebar-kenaz-info-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>
      </div>
    </div>
  );
};

export default SidebarKenaz;
