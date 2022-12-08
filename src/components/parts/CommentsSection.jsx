import CommentsData from "../../json/comments.json";
import CommentProfilePic from "../../images/CommentProfilePic.png";
import { useState, useEffect, useRef } from "react";

const CommentsSection = () => {
  let i = 0;
  const [comments, setComments] = useState(CommentsData);
  const [name, setName] = useState("Default Name");
  const [email, setEmail] = useState("default@gmail.com");
  const [comment, setComment] = useState("Random Text");
  const [isEnabled, setIsEnabled] = useState(false);
  const [replyId, setReplyId] = useState("");
  const [reply, setReply] = useState("Random reply");
  const [id, setId] = useState(4);

  useEffect(() => {
    setComments(comments.slice(0, 3));
  }, []);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const commentRef = useRef(null);
  const replyRef = useRef(null);
  const btnScrollCommentRef = useRef(null);
  const btnScrollReplyRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setId(id + 1);
    const existingComment = comments.find((obj) => obj.id === replyId);
    if (existingComment) {
      const newComments = comments.map((obj) => {
        if (obj.id === replyId) {
          const oldReplies = obj.replies;
          return { ...obj, replies: [...oldReplies, reply] };
        }
        return obj;
      });
      console.log(newComments);
      setComments(newComments);
      setIsEnabled(false);
      setReplyId(null);
      replyRef.current.value = "";
    } else {
      setComments((obj) => [
        {
          id: `${id}`,
          author: `${name}`,
          email: `${email}`,
          date: "Jan 2nd, 2012 2:35 pm",
          comment: `${comment}`,
          replies: [],
        },
        ...obj,
      ]);
      nameRef.current.value = "";
      emailRef.current.value = "";
      commentRef.current.value = "";
    }
  };

  const handleClick = () => {
    btnScrollCommentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleReply = (commentId) => {
    btnScrollReplyRef.current?.scrollIntoView({ behavior: "smooth" });
    setIsEnabled(true);
    setReplyId(commentId);
  };

  /* const handleExit = () => {
    replyRef.current.value = "";
    setIsEnabled(false);
  }; */

  return (
    <div className="singlepage-content-info-comments">
      <div
        className="singlepage-content-info-comments-title"
        ref={btnScrollCommentRef}
      >
        Comments
      </div>
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
              <div className="singlepage-content-info-comments-item-author-reply">
                {comment.replies.map((reply) => {
                  return (
                    <div
                      key={i++}
                      className="singlepage-content-info-comments-item-author-reply-container"
                    >
                      <div className="singlepage-content-info-comments-item-author-reply-container-bg">
                        <img
                          src={CommentProfilePic}
                          alt="Comment Profile"
                          className="singlepage-content-info-comments-item-author-reply-container-bg-img"
                        ></img>
                      </div>
                      <div className="singlepage-content-info-comments-item-author-reply-container-info">
                        <div className="singlepage-content-info-comments-item-author-reply-container-info-you">
                          <div className="singlepage-content-info-comments-item-author-reply-container-info-you-name">
                            You
                          </div>
                          <div className="singlepage-content-info-comments-item-author-reply-container-info-you-date">
                            Jan 2nd, 2012 2:35 pm
                          </div>
                        </div>
                        <div className="singlepage-content-info-comments-item-author-reply-container-info-text">
                          {reply}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <button
              onClick={() => handleReply(comment.id)}
              className="singlepage-content-info-comments-item-reply"
            >
              Reply
            </button>
          </div>
        );
      })}
      <form
        className="singlepage-content-info-comments-add"
        onSubmit={handleSubmit}
      >
        <h3
          ref={btnScrollReplyRef}
          className="singlepage-content-info-comments-add-title"
        >
          Add Your Comment
        </h3>
        <p className="singlepage-content-info-comments-add-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto illum
          earum ipsa aspernatur possimus distinctio deserunt, hic obcaecati
          omnis sapiente. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.
        </p>
        {isEnabled ? (
          <div>
            <input
              type="text"
              placeholder="Reply"
              className="singlepage-content-info-comments-add-reply"
              ref={replyRef}
              onChange={(e) => setReply(e.target.value)}
            ></input>
            {/* <button
              className="singlepage-content-info-comments-add-exit"
              onClick={handleExit}
            >
              Exit
            </button> */}
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Name"
              className="singlepage-content-info-comments-add-text-input"
              ref={nameRef}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              type="Email"
              placeholder="Email Address"
              className="singlepage-content-info-comments-add-text-input"
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <textarea
              type="textarea"
              placeholder="Comment"
              className="singlepage-content-info-comments-add-textarea-input"
              ref={commentRef}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
        )}
        <button
          type="submit"
          className="singlepage-content-info-comments-add-btn"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentsSection;
