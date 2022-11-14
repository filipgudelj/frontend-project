import Logo from "../images/Logo.png";
import Search from "../images/Search.png";
import "../styles/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <div className="header-logo-symbol">
          <img src={Logo} alt="Logo" className="header-logo-symbol-img" />
        </div>
        <div className="header-logo-name">Kenaz</div>
      </div>
      <div className="header-sub-nav">
        <ul className="header-sub-nav-list">
          <li className="header-sub-nav-list-media">Media</li>
          <li className="header-sub-nav-list-marketing">Marketing</li>
          <li className="header-sub-nav-list-contact">Contact</li>
        </ul>
      </div>
      <div className="header-search">
        <img className="header-search-img" src={Search} alt="Search" />
      </div>
    </div>
  );
};

export default Header;
