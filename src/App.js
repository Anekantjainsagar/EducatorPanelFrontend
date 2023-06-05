import React from "react";
import { Route, Routes } from "react-router";

import Home from "./Screen/Home";
import Login from "./Screen/Login";
import Register from "./Screen/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
};

export default App;
