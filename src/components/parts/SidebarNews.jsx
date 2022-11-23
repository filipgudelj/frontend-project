import NewsPic from "../../images/NewsPic.png";
import Comment from "../../svgs/Comment.svg";

const SidebarNews = () => {
  return (
    <div className="sidebar-news">
      <ul className="sidebar-news-categories">
        <li className="sidebar-news-categories-item">
          <div className="sidebar-news-categories-item-title">
            <button className="sidebar-news-categories-item-title-btn">
              Popular
            </button>
          </div>
        </li>
        <li className="sidebar-news-categories-item">
          <div className="sidebar-news-categories-item-title">
            <button className="sidebar-news-categories-item-title-btn">
              Top Rated
            </button>
          </div>
        </li>
        <li className="sidebar-news-categories-item">
          <div className="sidebar-news-categories-item-title">
            <button className="sidebar-news-categories-item-title-btn">
              Comments
            </button>
          </div>
        </li>
      </ul>
      <div className="sidebar-news-posts">
        <div className="sidebar-news-posts-post">
          <div className="sidebar-news-posts-post-wrapper">
            <div className="sidebar-news-posts-post-wrapper-info">
              <p className="sidebar-news-posts-post-wrapper-info-date">
                August 26, 2013
              </p>
              <h3 className="sidebar-news-posts-post-wrapper-info-title">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <div className="sidebar-news-posts-post-wrapper-comments">
              <img
                src={Comment}
                alt="Comment"
                className="sidebar-news-posts-post-wrapper-comments-img"
              ></img>
              <p className="sidebar-news-posts-post-wrapper-comments-number">
                5
              </p>
            </div>
            <img
              src={NewsPic}
              alt="News"
              className="sidebar-news-posts-post-wrapper-img"
            ></img>
          </div>
          <div className="sidebar-news-posts-post-line"></div>
        </div>
        <div className="sidebar-news-posts-post">
          <div className="sidebar-news-posts-post-wrapper">
            <div className="sidebar-news-posts-post-wrapper-info">
              <p className="sidebar-news-posts-post-wrapper-info-date">
                August 26, 2013
              </p>
              <h3 className="sidebar-news-posts-post-wrapper-info-title">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <div className="sidebar-news-posts-post-wrapper-comments">
              <img
                src={Comment}
                alt="Comment"
                className="sidebar-news-posts-post-wrapper-comments-img"
              ></img>
              <p className="sidebar-news-posts-post-wrapper-comments-number">
                5
              </p>
            </div>
            <img
              src={NewsPic}
              alt="News"
              className="sidebar-news-posts-post-wrapper-img"
            ></img>
          </div>
          <div className="sidebar-news-posts-post-line"></div>
        </div>
        <div className="sidebar-news-posts-post">
          <div className="sidebar-news-posts-post-wrapper">
            <div className="sidebar-news-posts-post-wrapper-info">
              <p className="sidebar-news-posts-post-wrapper-info-date">
                August 26, 2013
              </p>
              <h3 className="sidebar-news-posts-post-wrapper-info-title">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <div className="sidebar-news-posts-post-wrapper-comments">
              <img
                src={Comment}
                alt="Comment"
                className="sidebar-news-posts-post-wrapper-comments-img"
              ></img>
              <p className="sidebar-news-posts-post-wrapper-comments-number">
                5
              </p>
            </div>
            <img
              src={NewsPic}
              alt="News"
              className="sidebar-news-posts-post-wrapper-img"
            ></img>
          </div>
          <div className="sidebar-news-posts-post-line"></div>
        </div>
        <div className="sidebar-news-posts-post">
          <div className="sidebar-news-posts-post-wrapper">
            <div className="sidebar-news-posts-post-wrapper-info">
              <p className="sidebar-news-posts-post-wrapper-info-date">
                August 26, 2013
              </p>
              <h3 className="sidebar-news-posts-post-wrapper-info-title">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <div className="sidebar-news-posts-post-wrapper-comments">
              <img
                src={Comment}
                alt="Comment"
                className="sidebar-news-posts-post-wrapper-comments-img"
              ></img>
              <p className="sidebar-news-posts-post-wrapper-comments-number">
                5
              </p>
            </div>
            <img
              src={NewsPic}
              alt="News"
              className="sidebar-news-posts-post-wrapper-img"
            ></img>
          </div>
          <div className="sidebar-news-posts-post-line"></div>
        </div>
        <div className="sidebar-news-posts-post">
          <div className="sidebar-news-posts-post-wrapper">
            <div className="sidebar-news-posts-post-wrapper-info">
              <p className="sidebar-news-posts-post-wrapper-info-date">
                August 26, 2013
              </p>
              <h3 className="sidebar-news-posts-post-wrapper-info-title">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <div className="sidebar-news-posts-post-wrapper-comments">
              <img
                src={Comment}
                alt="Comment"
                className="sidebar-news-posts-post-wrapper-comments-img"
              ></img>
              <p className="sidebar-news-posts-post-wrapper-comments-number">
                5
              </p>
            </div>
            <img
              src={NewsPic}
              alt="News"
              className="sidebar-news-posts-post-wrapper-img"
            ></img>
          </div>
          <div className="sidebar-news-posts-post-line"></div>
        </div>
      </div>
    </div>
  );
};

export default SidebarNews;
