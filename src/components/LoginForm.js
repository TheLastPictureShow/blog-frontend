import React from "react";
import Notification from "./Notification";

const LoginForm = ({
  handleLogin,
  username,
  setUsername,
  password,
  setPassword,
  message,
}) => {
  return (
    <div className="login">
      <div>
        <h2>Log in to application</h2>
      </div>
      <div>
        <Notification message={message} />
        <form className="login-form" onSubmit={handleLogin}>
          <div>
            username
            <input
              type="text"
              className="login-input"
              id="username"
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            password
            <input
              type="password"
              id="password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button className="btn-login" id="login-button" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
