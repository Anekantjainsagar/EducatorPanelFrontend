import React, { useContext, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router";

import Home from "./Screen/Home";
import Login from "./Screen/Login";
import Register from "./Screen/Register";
import { LOGIN_URL } from "./Utils";
import axios from "axios";
import Context from "./Context/Context";

const App = () => {
  const history = useNavigate();
  const context = useContext(Context);
  const location = useLocation();

  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.post(`${LOGIN_URL}/checkToken`, { token }).then((response) => {
        context.setUser(response.data);
      });
    } else {
      history("/");
    }
  };

  useEffect(() => {
    if (location.pathname !== "/Register" && location.pathname !== "/") {
      checkToken();
    }
  }, [history]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Home" element={<Home checkToken={checkToken} />} />
    </Routes>
  );
};

export default App;
