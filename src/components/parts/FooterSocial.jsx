import ProfilePic from "../../images/ProfilePic.png";
import TwitterLogo from "../../svgs/TwitterLogo.svg";

const FooterSocial = () => {
  return (
    <div className="footer-social">
      <div className="footer-social-featured">
        <div className="footer-social-featured-title">Featured</div>
        <div className="footer-social-featured-posts">
          <div className="footer-social-featured-posts-container">
            <p className="footer-social-featured-posts-container-date">
              August 26, 2013
            </p>
            <p className="footer-social-featured-posts-container-number">5</p>
            <h3 className="footer-social-featured-posts-container-title">
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </h3>
          </div>
          <img
            src={ProfilePic}
            alt="Profile"
            className="footer-social-featured-posts-img"
          ></img>
        </div>
        <div className="footer-social-featured-line"></div>
        <div className="footer-social-featured-posts">
          <div className="footer-social-featured-posts-container">
            <p className="footer-social-featured-posts-container-date">
              August 26, 2013
            </p>
            <p className="footer-social-featured-posts-container-number">5</p>
            <h3 className="footer-social-featured-posts-container-title">
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </h3>
          </div>
          <img
            src={ProfilePic}
            alt="Profile"
            className="footer-social-featured-posts-img"
          ></img>
        </div>
        <div className="footer-social-featured-line"></div>
        <div className="footer-social-featured-posts">
          <div className="footer-social-featured-posts-container">
            <p className="footer-social-featured-posts-container-date">
              August 26, 2013
            </p>
            <p className="footer-social-featured-posts-container-number">5</p>
            <h3 className="footer-social-featured-posts-container-title">
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </h3>
          </div>
          <img
            src={ProfilePic}
            alt="Profile"
            className="footer-social-featured-posts-img"
          ></img>
        </div>
      </div>
      <div className="footer-social-randomposts">
        <div className="footer-social-randomposts-title">Random Posts</div>
        <div className="footer-social-randomposts-posts">
          <div className="footer-social-randomposts-posts-container">
            <p className="footer-social-randomposts-posts-container-date">
              August 26, 2013
            </p>
            <p className="footer-social-randomposts-posts-container-number">
              5
            </p>
            <h3 className="footer-social-randomposts-posts-container-title">
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </h3>
          </div>
          <img
            src={ProfilePic}
            alt="Profile"
            className="footer-social-randomposts-posts-img"
          ></img>
        </div>
        <div className="footer-social-featured-line"></div>
        <div className="footer-social-randomposts-posts">
          <div className="footer-social-randomposts-posts-container">
            <p className="footer-social-randomposts-posts-container-date">
              August 26, 2013
            </p>
            <p className="footer-social-randomposts-posts-container-number">
              5
            </p>
            <h3 className="footer-social-randomposts-posts-container-title">
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </h3>
          </div>
          <img
            src={ProfilePic}
            alt="Profile"
            className="footer-social-randomposts-posts-img"
          ></img>
        </div>
        <div className="footer-social-featured-line"></div>
        <div className="footer-social-randomposts-posts">
          <div className="footer-social-randomposts-posts-container">
            <p className="footer-social-randomposts-posts-container-date">
              August 26, 2013
            </p>
            <p className="footer-social-randomposts-posts-container-number">
              5
            </p>
            <h3 className="footer-social-randomposts-posts-container-title">
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </h3>
          </div>
          <img
            src={ProfilePic}
            alt="Profile"
            className="footer-social-randomposts-posts-img"
          ></img>
        </div>
      </div>
      <div className="footer-social-twitterfeed">
        <div className="footer-social-twitterfeed-title">Twitter Feed</div>
        <div className="footer-social-twitterfeed-posts">
          <div className="footer-social-twitterfeed-posts-container">
            <div className="footer-social-twitterfeed-posts-container-user">
              <img
                src={TwitterLogo}
                alt="Twitter Logo"
                className="footer-social-twitterfeed-posts-container-user-twitterlogo"
              ></img>
              <div className="footer-social-twitterfeed-posts-container-user-info">
                Envato @envato
              </div>
            </div>
            <p className="footer-social-twitterfeed-posts-container-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fuga
              dolorum suscipit saepe ipsam aliquam! Sequi!
            </p>
          </div>
          <div className="footer-social-twitterfeed-posts-container">
            <div className="footer-social-twitterfeed-posts-container-user">
              <img
                src={TwitterLogo}
                alt="Twitter Logo"
                className="footer-social-twitterfeed-posts-container-user-twitterlogo"
              ></img>
              <div className="footer-social-twitterfeed-posts-container-user-info">
                Envato @envato
              </div>
            </div>
            <p className="footer-social-twitterfeed-posts-container-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fuga
              dolorum!
            </p>
          </div>
          <div className="footer-social-twitterfeed-posts-container">
            <div className="footer-social-twitterfeed-posts-container-user">
              <img
                src={TwitterLogo}
                alt="Twitter Logo"
                className="footer-social-twitterfeed-posts-container-user-twitterlogo"
              ></img>
              <div className="footer-social-twitterfeed-posts-container-user-info">
                Envato @envato
              </div>
            </div>
            <p className="footer-social-twitterfeed-posts-container-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              praesentium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSocial;
