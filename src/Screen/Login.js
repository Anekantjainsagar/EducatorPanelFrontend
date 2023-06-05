import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="h-[100vh] w-[100vw] bg-black flex justify-center items-center text-white">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold mb-2">Login Here</h1>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter Email"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <input
          type="password"
          className="loginInput"
          placeholder="Enter Password"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <button className="btnClass">Submit</button>
        <p
          className="underline cursor-pointer text-sm"
          onClick={(e) => {
            e.preventDefault();
            history("/Register");
          }}
        >
          Click here to Register user?
        </p>
      </div>
    </div>
  );
};

export default Login;
