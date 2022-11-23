import BlueLogo from "../../svgs/BlueLogo.svg";
import Rss from "../../svgs/Rss.svg";
import Facebook from "../../svgs/Facebook.svg";
import Twitter from "../../svgs/Twitter.svg";
import Dribble from "../../svgs/Dribble.svg";
import Linkedin from "../../svgs/Linkedin.svg";
import Youtube from "../../svgs/Youtube.svg";
import Skype from "../../svgs/Skype.svg";

const FooterInfo = () => {
  return (
    <div className="footer-info">
      <div className="footer-info-kenaz">
        <div className="footer-info-kenaz-title">
          <img
            src={BlueLogo}
            className="footer-info-kenaz-title-logo"
            alt="Blue Logo"
          ></img>
          <h2 className="footer-info-kenaz-title-text">Kenaz</h2>
        </div>
        <p className="footer-info-kenaz-subtitle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
          dolorem nam?
        </p>
        <div className="footer-info-kenaz-social">
          <img
            src={Rss}
            alt="Rss"
            className="footer-info-kenaz-social-item"
          ></img>
          <img
            src={Facebook}
            alt="Facebook"
            className="footer-info-kenaz-social-item"
          ></img>
          <img
            src={Twitter}
            alt="Twitter"
            className="footer-info-kenaz-social-item"
          ></img>
          <img
            src={Dribble}
            alt="Dribble"
            className="footer-info-kenaz-social-item"
          ></img>
          <img
            src={Linkedin}
            alt="Linkedin"
            className="footer-info-kenaz-social-item"
          ></img>
          <img
            src={Youtube}
            alt="Youtube"
            className="footer-info-kenaz-social-item"
          ></img>
          <img
            src={Skype}
            alt="Skype"
            className="footer-info-kenaz-social-item"
          ></img>
        </div>
      </div>
      <div className="footer-info-newsletter">
        <h2 className="footer-info-newsletter-title">Newsletter</h2>
        <p className="footer-info-newsletter-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          possimus dolore.
        </p>
        <div className="footer-info-newsletter-subscribe">
          <input
            type="mail"
            className="footer-info-newsletter-subscribe-input"
            placeholder="Your mail"
          />
          <button className="footer-info-newsletter-subscribe-btn">
            Subscribe
          </button>
        </div>
      </div>
      <div className="footer-info-tags">
        <h2 className="footer-info-tags-title">Tags Widget</h2>
        <div className="footer-info-tags-names">
          <div className="footer-info-tags-names-1">
            <button className="footer-info-tags-names-1-item">
              assueverit
            </button>
            <button className="footer-info-tags-names-1-item">utroquoe</button>
            <button className="footer-info-tags-names-1-item">probo</button>
            <button className="footer-info-tags-names-1-item">assuev</button>
          </div>
          <div className="footer-info-tags-names-2">
            <button className="footer-info-tags-names-2-item">probo</button>
            <button className="footer-info-tags-names-2-item">
              assuevverit
            </button>
            <button className="footer-info-tags-names-2-item">titl</button>
            <button className="footer-info-tags-names-2-item">
              assuevverit
            </button>
          </div>
          <div className="footer-info-tags-names-3">
            <button className="footer-info-tags-names-3-item">
              assuevverit
            </button>
            <button className="footer-info-tags-names-3-item">utroquoe</button>
            <button className="footer-info-tags-names-3-item">probo</button>
            <button className="footer-info-tags-names-3-item">
              assuevverit
            </button>
          </div>
          <div className="footer-info-tags-names-4">
            <button className="footer-info-tags-names-4-item">utroquoe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
