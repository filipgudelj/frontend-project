import "../styles/main.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-news">
        <ul className="sidebar-news-list">
          <li>Popular</li>
          <li>Top Rated</li>
          <li>Comments</li>
        </ul>
      </div>
      <div className="sidebar-social"></div>
      <div className="sidebar-kenaz"></div>
    </div>
  );
};

export default Sidebar;
