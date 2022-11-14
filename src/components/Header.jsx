import Logo from "../svgs/Logo";
import Search from "../svgs/Search";
import "../styles/main.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <div className="header-logo-symbol">
          <Logo className="header-logo-symbol-svg" />
        </div>
        <div className="header-logo-name">Kenaz</div>
      </div>
      <div className="header-sub-nav">
        <ul className="header-sub-nav-list">
          <li className="header-sub-nav-list-media">Media</li>
          <li className="header-sub-nav-list-marketing">Marketing</li>
          <li className="header-sub-nav-list-contact">Contact</li>
          <li className="header-sub-nav-list-search">
            <Search className="header-search-svg" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
