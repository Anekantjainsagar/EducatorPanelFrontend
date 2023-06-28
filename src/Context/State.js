import React, { useEffect, useState } from "react";
import Context from "./Context";
import axios from "axios";
import { EDUCATORS_URL } from "../Utils";

const B2BState = (props) => {
  const [user, setUser] = useState();
  const [clickedUser, setClickedUser] = useState();
  const [educators, setEducators] = useState([]);
  const [page, setPage] = useState(1);
  const [totalEducators, setTotalEducators] = useState(0);
  const [search, setSearch] = useState("");
  const [emailUser, setEmailUser] = useState([]);

  const getEducators = () => {
    axios
      .get(
        `${EDUCATORS_URL}/getEducators?page=${page}&size=${
          page * 10
        }&search=${search}`
      )
      .then((response) => {
        setTotalEducators(response.data.noOfEducators);
        setEducators(response.data.educators);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getEducators();
  }, [page, search]);

  console.log(emailUser);
  return (
    <Context.Provider
      value={{
        user,
        setUser,
        educators,
        getEducators,
        search,
        setSearch,
        page,
        setPage,
        totalEducators,
        clickedUser,
        setClickedUser,
        setEmailUser,
        emailUser,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default B2BState;
