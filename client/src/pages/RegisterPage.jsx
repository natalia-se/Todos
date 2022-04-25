import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [resStatus, setResStatus] = useState(null);

  const navigate = useNavigate();

  function handleOnSubmit(e) {
    e.preventDefault();
    const url = "/api/auth/register";
    axios
      .post(url, {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res.status);
        setResStatus(res.status);
        if (res.status !== 400 && res.status !== 401) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          setResStatus(err.response.status);
        }
      });
  }
  return (
    <div className="App">
      <h1>Create user</h1>
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
          <button type="submit">Create User</button>
        </div>
      </form>

      {(resStatus === 400 || resStatus === 401) && (
        <span className="red">Duplicate name</span>
      )}
    </div>
  );
};

export default RegisterPage;
