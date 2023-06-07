import React, { useContext, useState } from "react";
import AddModal from "./Modal";
import Context from "../Context/Context";
import { CSVLink } from "react-csv";
import axios from "axios";
import Axios from "axios";
import { EDUCATORS_URL } from "../Utils";
import fileDownload from "js-file-download";

const Nav = ({ checkToken }) => {
  const context = useContext(Context);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState();

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
            value={context?.search}
            onChange={(e) => {
              context?.setSearch(e.target.value);
            }}
          />
          <button
            className="btnClass mx-2"
            onClick={(e) => {
              e.preventDefault();
              axios
                .get(`${EDUCATORS_URL}/sendMail`)
                .then((res) => {
                  alert(res.data);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Send Payslips
          </button>
          <button
            className="btnClass mx-2"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!modalIsOpen);
            }}
          >
            Add New
          </button>
          <button
            className="btnClass mx-2"
            onClick={(e) => {
              e.preventDefault();
              Axios({
                url: `${EDUCATORS_URL}/downloadFormat`,
                method: "GET",
                responseType: "blob",
              }).then((res) => {
                fileDownload(res.data, "educators_format.csv");
              });
            }}
          >
            Format
          </button>
          {file ? (
            <>
              <button
                className="btnClass mx-2"
                onClick={(e) => {
                  e.preventDefault();
                  const formData = new FormData();
                  formData.append("file", file);
                  axios
                    .post(`${EDUCATORS_URL}/uploadEducators`, formData)
                    .then((res) => {
                      console.log(res);
                      setTimeout(() => {
                        context.getEducators();
                      }, 2000);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                Import
              </button>
            </>
          ) : (
            <>
              <input
                type="file"
                className="w-52 rounded-md"
                name="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </>
          )}
          <CSVLink
            className="btnClass mx-2"
            data={context?.allEducatos}
            filename="Educators Data"
          >
            Export
          </CSVLink>
          <buttonc
            className="btnClass mx-2"
            onClick={(e) => {
              e.preventDefault();
              localStorage.clear();
              checkToken();
            }}
          >
            Logout
          </buttonc>
        </div>
      </div>
    </>
  );
};

export default Nav;
