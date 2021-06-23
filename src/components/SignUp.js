import React, { useState } from "react";
import usersService from "../services/users";
import Notification from "./Notification";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const createUser = async (event) => {
    event.preventDefault();

    const newUser = {
      username: username,
      password: password,
    };

    const response = await usersService.create(newUser);
    setUsername("");
    setPassword("");
    setMessage(`New user successfully created: ${newUser.username}`);
    setTimeout(() => {
      setMessage(null);
    }, 4000);
  };

  return (
    <div className="signup">
      <div>
        <h2>Sign up for your account!</h2>
      </div>
      <div>
        <form onSubmit={createUser}>
          <Notification message={message} />
          <div>
            username
            <input
              type="text"
              id="signup-username"
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            password
            <input
              type="password"
              id="signup-password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button className="btn" id="login-btn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
