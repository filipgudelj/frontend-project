import SidebarNews from "./parts/SidebarNews";
import SidebarSocial from "./parts/SidebarSocial";
import SidebarKenaz from "./parts/SidebarKenaz";
import SidebarEnvatoPosts from "./parts/SidebarEnvatoPosts";
import "../styles/main.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarNews />
      <SidebarSocial />
      <SidebarKenaz />
      <SidebarEnvatoPosts />
    </div>
  );
};

export default Sidebar;
