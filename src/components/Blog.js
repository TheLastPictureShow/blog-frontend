import React, { useState } from "react";
const Blog = ({ blog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
    fontSize: 16,
  };

  const [visible, setVisible] = useState(true);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };
  const buttonName = visible ? "View info" : "Hide info";

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div style={blogStyle}>
      <button onClick={toggleVisibility}>{`${buttonName}`}</button>
      <div style={showWhenVisible}>
        {blog.title}, by: {blog.author}{" "}
      </div>
      <div style={hideWhenVisible}>
        <div>
          {blog.title}, by: {blog.author}
        </div>
        <div>URL: {blog.url}</div>
        <div>Likes: {blog.likes}</div>
        <div>Created by: {blog.user.name}</div>
      </div>
    </div>
  );
};

export default Blog;
