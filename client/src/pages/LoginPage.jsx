import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [dataError, setDataError] = useState(null);

  const navigate = useNavigate();

  function handleOnSubmit(e) {
    e.preventDefault();

    const url = "/api/auth/login";

    axios
      .post(url, {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        if (token) {
          localStorage.setItem("Token", token);
          navigate("/todos");
        }

        if (!token) setDataError(response.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      <h1>Login</h1>
      <form className="Form" onSubmit={handleOnSubmit}>
        <div className="Register">
          <input
            type="text"
            placeholder="User name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </div>
      </form>
      {dataError && <span>{dataError}</span>}
    </div>
  );
};

export default LoginPage;
