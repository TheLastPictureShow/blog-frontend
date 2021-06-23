import React, { useState, useEffect } from "react";
import Blog from "./components/Blog";
import LoginForm from "./components/LoginForm";
import SignUp from "./components/SignUp";
import CreateForm from "./components/CreateForm";
import Togglable from "./components/Togglable";
import blogService from "./services/blogs";
import loginService from "./services/login";
import "./App.css";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);

  console.log("blogs are", blogs);

  useEffect(() => {
    async function fetchData() {
      const blogs = await blogService.getAll();
      setBlogs(blogs);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });

      window.localStorage.setItem("loggedBlogAppUser", JSON.stringify(user));

      blogService.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      setMessage("Wrong username or password");
      setTimeout(() => {
        setMessage(null);
      }, 4000);
    }
  };

  const logout = () => {
    window.localStorage.removeItem("loggedBlogAppUser");
    setUser(null);
    alert("Logging out?");
  };

  console.log("message is", message);

  if (user === null) {
    return (
      <div className="app">
        <div className="login-wrap">
          <LoginForm
            handleLogin={handleLogin}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            message={message}
          />
        </div>
        <div className="signup-wrap">
          <SignUp />
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="upper">
        <h2>Blogs</h2>
        <span>{`Hello ${user.username}, you have logged in!`}</span>{" "}
        <button className="btn" onClick={logout}>
          Logout
        </button>
        <Togglable buttonLabel="Create">
          <CreateForm
            blogs={blogs}
            setBlogs={setBlogs}
            message={message}
            setMessage={setMessage}
          />
        </Togglable>
      </div>

      <div className="lower">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default App;
