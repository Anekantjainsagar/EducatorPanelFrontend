import React, { useEffect, useState } from "react";
import Context from "./Context";
import axios from "axios";
import { EDUCATORS_URL } from "../Utils";

const B2BState = (props) => {
  const [user, setUser] = useState();
  const [educators, setEducators] = useState([]);
  const [allEducatos, setAllEducatos] = useState([]);
  const [page, setPage] = useState(1);
  const [totalEducators, setTotalEducators] = useState(0);
  const [search, setSearch] = useState("");

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

  const getAllEducators = () => {
    axios
      .get(`${EDUCATORS_URL}/getAllEducators`)
      .then((response) => {
        setAllEducatos(response.data.educators);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllEducators();
  }, []);

  useEffect(() => {
    getEducators();
  }, [page, search]);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        educators,
        getEducators,
        search,
        setSearch,
        allEducatos,
        page,
        setPage,
        totalEducators,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default B2BState;
