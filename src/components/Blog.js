import React, { useState } from "react";
import "../styles/Blog.css";
const Blog = ({ blog }) => {
  const [visible, setVisible] = useState(true);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };
  const buttonName = visible ? "View info" : "Hide info";

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="wrapper">
      <div className="blog">
        <button
          className="btn"
          onClick={toggleVisibility}
        >{`${buttonName}`}</button>
        <div style={showWhenVisible}>
          {blog.title}, by: {blog.author}{" "}
        </div>
        <div style={hideWhenVisible}>
          <div>
            {blog.title}, by: {blog.author}
          </div>
          <div>URL: {blog.url}</div>
          <div>Likes: {blog.likes}</div>
          <div>Created by: {blog.user.username}</div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
