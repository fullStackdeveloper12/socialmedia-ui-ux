import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

const Post = ({ Data ,color,bgcolor}) => {
  return (
    <>
      <div className="post_container" style={{ backgroundColor: `${bgcolor}`, color: `${color}` }}>
        <div className="person">
          <div className="author">
            <div className="img">
              <img src={Data.pImg} alt={Data.title} />
            </div>
            <div className="text">
              <h3>{Data.userName}</h3>
              <p>{Data.title}</p>
            </div>
          </div>
          <div className="dot">
            <HiDotsVertical />
          </div>
        </div>
        <p>{Data.description}</p>
        <div className="post_img">
          <img src={Data.mImg} alt="" />
        </div>
        <div className="like_comments">
          <div className="likes">
            <FaHeart className="items" />
            {Data.like}
          </div>
          <div className="comments">
            <FaCommentAlt className="items" />
            {Data.comments}
          </div>
          <div className="share">
            <FaShareAlt className="items" />
            {Data.share}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
