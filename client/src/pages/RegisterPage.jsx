import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [resStatus, setResStatus] = useState(null);

  const navigate = useNavigate();

  function handleOnSubmit(e) {
    e.preventDefault();
    // const url = "/api/auth/register";
    // const payload = {
    //   username,
    //   password,
    // };
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(payload),
    // }).then((res) => {
    //   setResStatus(res.status);
    //   if (res.status !== 400 && res.status !== 401) {
    //     navigate("/login");
    //   }
    // });
    // .then((data) => {
    //   console.log(data);
    // });
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

      {/* {(resStatus === 400 || resStatus === 401) && <Chip>Duplicate name</Chip>} */}
    </div>
  );
};

export default RegisterPage;
