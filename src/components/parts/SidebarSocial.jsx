import Facebook from "../../svgs/FacebookSidebar.svg";
import Twitter from "../../svgs/TwitterSidebar.svg";
import Youtube from "../../svgs/YoutubeSidebar.svg";

const SidebarSocial = () => {
  return (
    <div className="sidebar-social">
      <div className="sidebar-social-title">Social</div>
      <div className="sidebar-social-list">
        <li className="sidebar-social-list-item">
          <img
            src={Facebook}
            alt="Facebook"
            className="sidebar-social-list-item-logo"
          ></img>
          <div className="sidebar-social-list-item-event">
            <p className="sidebar-social-list-item-event-text">Like</p>
          </div>
          <div className="sidebar-social-list-item-info">
            <p className="sidebar-social-list-item-info-text">25041 Fans</p>
          </div>
        </li>
        <li className="sidebar-social-list-item">
          <img
            src={Twitter}
            alt="Twitter"
            className="sidebar-social-list-item-logo"
          ></img>
          <div className="sidebar-social-list-item-event">
            <p className="sidebar-social-list-item-event-text">Follow</p>
          </div>
          <div className="sidebar-social-list-item-info">
            <p className="sidebar-social-list-item-info-text">
              25041 Followers
            </p>
          </div>
        </li>
        <li className="sidebar-social-list-item">
          <img
            src={Youtube}
            alt="Youtube"
            className="sidebar-social-list-item-logo"
          ></img>
          <div className="sidebar-social-list-item-event">
            <p className="sidebar-social-list-item-event-text">Subscribe</p>
          </div>
          <div className="sidebar-social-list-item-info">
            <p className="sidebar-social-list-item-info-text">
              941 Subscribers
            </p>
          </div>
        </li>
      </div>
    </div>
  );
};

export default SidebarSocial;
