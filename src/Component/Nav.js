import React, { useState } from "react";
import AddModal from "./Modal";

const Nav = () => {
  const [search, setSearch] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <AddModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
    <div className="w-[100vw] flex items-center justify-between py-1.5 px-2">
      <h1 className="text-2xl font-bold">Educator Panel</h1>
      <div className="flex items-center">
        <input
          type="text"
          className="loginInput mr-2"
          placeholder="Search here..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <input type="file" className="w-52 rounded-md" />
        <button
          className="btnClass mx-2"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!modalIsOpen);
          }}
        >
          Add New
        </button>
        <button className="btnClass mx-2">Import</button>
        <button className="btnClass mx-2">Export</button>
      </div>
      </div>
      </>
  );
};

export default Nav;
