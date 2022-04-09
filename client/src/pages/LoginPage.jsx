import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [dataError, setDataError] = useState(null);

  const navigate = useNavigate();

  function handleOnSubmit(e) {
    e.preventDefault();

    // const payload = { username, password };

    // const url = "/api/auth/login";

    // fetch(url, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),
    // })
    //   .then(
    //     (res) => res.json()
    //     // setResStatus(res.status);
    //   )
    //   .then((data) => {
    //     // console.log("data", data.token);
    //     const token = data.token;
    //     if (token) {
    //       localStorage.setItem("Backend1", token);
    //       navigate("/");
    //     }

    //     if (!token) setDataError(data);
    //   });
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
      {/* {dataError && <Chip>{dataError}</Chip>} */}
    </div>
  );
};

export default LoginPage;
