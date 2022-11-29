import CommentsData from "../../json/comments.json";
import CommentProfilePic from "../../images/CommentProfilePic.png";
import { useState, useEffect } from "react";

const CommentsSection = () => {
  const [comments, setComments] = useState(CommentsData);
  const [name, setName] = useState("Default Name");
  const [email, setEmail] = useState("default@gmail.com");
  const [comment, setComment] = useState("Random Text");
  const [id, setId] = useState(4);

  useEffect(() => {
    setComments(comments.slice(0, 3));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setId(id + 1);
    setComments((current) => [
      {
        id: `${id}`,
        author: `${name}`,
        email: `${email}`,
        date: "Jan 2nd, 2012 2:35 pm",
        comment: `${comment}`,
      },
      ...current,
    ]);
  };

  return (
    <div className="singlepage-content-info-comments">
      <div className="singlepage-content-info-comments-title">Comments</div>
      {comments.map((comment) => {
        return (
          <div
            className="singlepage-content-info-comments-item"
            key={comment.id}
          >
            <div className="singlepage-content-info-comments-item-bg">
              <img
                src={CommentProfilePic}
                alt="Comment Profile"
                className="singlepage-content-info-comments-item-bg-img"
              ></img>
            </div>
            <div className="singlepage-content-info-comments-item-author">
              <div className="singlepage-content-info-comments-item-author-details">
                <div className="singlepage-content-info-comments-item-author-details-name">
                  {comment.author}
                </div>
                <div className="singlepage-content-info-comments-item-author-details-date">
                  {comment.date}
                </div>
              </div>
              <div className="singlepage-content-info-comments-item-author-comment">
                {comment.comment}
              </div>
            </div>
            <div className="singlepage-content-info-comments-item-reply">
              Reply
            </div>
          </div>
        );
      })}
      <form
        className="singlepage-content-info-comments-add"
        onSubmit={handleSubmit}
      >
        <h3 className="singlepage-content-info-comments-add-title">
          Add Your Comment
        </h3>
        <p className="singlepage-content-info-comments-add-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto illum
          earum ipsa aspernatur possimus distinctio deserunt, hic obcaecati
          omnis sapiente. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.
        </p>
        <input
          type="text"
          placeholder="Name"
          className="singlepage-content-info-comments-add-text-input"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="Email"
          placeholder="Email Address"
          className="singlepage-content-info-comments-add-text-input"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <textarea
          type="textarea"
          placeholder="Comment"
          className="singlepage-content-info-comments-add-textarea-input"
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="singlepage-content-info-comments-add-btn"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentsSection;
