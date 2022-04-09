import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleOnClickedLogIn = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleOnClickedRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };
  return (
    <main className="App">
      <h1>My Todos</h1>
      <form className="Form home">
        <button onClick={handleOnClickedLogIn}>Login</button>
        <button onClick={handleOnClickedRegister}>Register</button>
      </form>
    </main>
  );
};

export default HomePage;
