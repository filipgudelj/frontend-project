import FooterInfo from "./parts/FooterInfo";
import FooterSocial from "./parts/FooterSocial";
import FooterBottom from "./parts/FooterBottom";
import "../styles/main.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-line"></div>
      <FooterInfo />
      <FooterSocial />
      <div className="footer-thinline"></div>
      <FooterBottom />
    </div>
  );
};

export default Footer;
