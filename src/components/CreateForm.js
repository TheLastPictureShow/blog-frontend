import React, { useState } from "react";
import blogService from "../services/blogs";
import Notification from "./Notification";

const CreateForm = ({ blogs, setBlogs, message, setMessage }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const createBlog = async (event) => {
    event.preventDefault();

    const newBlog = {
      title: title,
      author: author,
      url: url,
      likes: 0,
    };

    const response = await blogService.create(newBlog);
    setTitle("");
    setAuthor("");
    setUrl("");
    setMessage(
      `New blog successfully added: ${newBlog.title} by ${newBlog.author}`
    );
    setTimeout(() => {
      setMessage(null);
    }, 4000);
    setBlogs(blogs.concat(response));
    console.log("response is", response);
  };

  return (
    <form onSubmit={createBlog}>
      <Notification message={message} />
      <h2>Create a new blog:</h2>
      <div>
        title:{" "}
        <input
          id="title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div>
        author:{" "}
        <input
          id="author"
          value={author}
          onChange={({ target }) => setAuthor(target.value)}
        />
      </div>
      <div>
        url:{" "}
        <input
          id="url"
          value={url}
          onChange={({ target }) => setUrl(target.value)}
        />
      </div>
      <p></p>
      <div>
        <button id="submit" type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
