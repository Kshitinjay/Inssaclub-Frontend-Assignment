import React from "react";
import "./postcontainer.css";
import SinglePost from "../SinglePost";
import Data from "../FakeData/data.json";
const PostContainer = () => {
  return (
    <div id="postContainer">
      {Data.map((item, id) => {
        return (
          <SinglePost key={id} item={item}/>
        );
      })}
    </div>
  );
};

export default PostContainer;
