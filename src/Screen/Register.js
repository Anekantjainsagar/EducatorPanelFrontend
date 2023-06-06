import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { LOGIN_URL } from "../Utils";

const Register = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="h-[100vh] w-[100vw] bg-black flex justify-center items-center text-white">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold mb-2">Register Here</h1>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter Name"
          value={user.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        />
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
        <button
          className="btnClass"
          onClick={(e) => {
            e.preventDefault();
            axios
              .post(`${LOGIN_URL}/sign-up`, user)
              .then((res) => {
                console.log(res.data);
                if (res.data.length > 0) {
                  alert(res.data);
                } else {
                  history("/");
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Submit
        </button>
        <p
          className="underline cursor-pointer text-sm"
          onClick={(e) => {
            e.preventDefault();
            history("/");
          }}
        >
          Click here to login?
        </p>
      </div>
    </div>
  );
};

export default Register;
