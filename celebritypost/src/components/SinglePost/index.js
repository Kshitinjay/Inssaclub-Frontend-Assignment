import React from "react";
import "./singlepost.css";
const SinglePost = ({ item }) => {
  return (
    <div id="posts">
      <div id="postImage">
        <img src={item.imgLink} alt="noImage" />
      </div>
      <div className="postData1">
        <h4>{item.heading}</h4>
        <p>{item.details}</p>
      </div>
      <div className="postData2">
        <img
          src="https://img.icons8.com/metro/26/000000/visible.png"
          alt="noImage"
        />
        <p>{Math.floor(Math.random() * 5000)}</p>
        <img
          src="https://img.icons8.com/ios-filled/26/000000/facebook-like.png"
          alt="noImage"
          id="likeButton"
        />
        <p>{Math.floor(Math.random() * 5000)}</p>
      </div>
    </div>
  );
};

export default SinglePost;
