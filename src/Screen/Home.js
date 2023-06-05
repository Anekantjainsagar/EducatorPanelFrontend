import React from "react";
import Nav from "../Component/Nav";
import Headings from "../Component/Headings";
import User from "../Component/User";

const Home = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-black text-white">
      <Nav />
      <div className="w-[97%] m-auto rounded-md">
        <Headings />
        <div className="h-[82vh] overflow-scroll">
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
        </div>
      </div>
    </div>
  );
};

export default Home;
