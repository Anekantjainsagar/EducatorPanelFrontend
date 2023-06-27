import React, { useContext, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { EDUCATORS_URL } from "../Utils/index";
import { AiOutlineClose } from "react-icons/ai";
import Context from "../Context/Context";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "black",
    color: "white",
    width: "48%",
    borderRadius: "1rem",
  },
};

const ViewModal = ({ modalIsOpen, setIsOpen }) => {
  const context = useContext(Context);

  const [user, setUser] = useState({
    name: context?.clickedUser?.name,
    email: context?.clickedUser?.email,
    address: context?.clickedUser?.address,
    bankName: context?.clickedUser?.bankName,
    accountNo: context?.clickedUser?.accountNo,
    bankBranch: context?.clickedUser?.bankBranch,
    ifscCode: context?.clickedUser?.ifscCode,
    basicPay: context?.clickedUser?.basicPay,
    incentive: context?.clickedUser?.incentive,
    travelAllowance: context?.clickedUser?.travelAllowance,
    otherAllowance: context?.clickedUser?.otherAllowance,
    grossEarning: context?.clickedUser?.grossEarning,
    tds: context?.clickedUser?.tds,
    penalties: context?.clickedUser?.penalties,
    grossDeduction: context?.clickedUser?.grossDeduction,
    netPay: context?.clickedUser?.netPay,
    payslips: context?.clickedUser?.payslips,
  });

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">
            Update Employee - {context?.clickedUser?.name}
          </h1>
          <button
            className="dangerButton"
            onClick={(e) => {
              e.preventDefault();
              axios
                .delete(`${EDUCATORS_URL}/deleteEducator`, {
                  data: { id: context?.clickedUser?._id },
                })
                .then((res) => {
                  console.log(res);
                  closeModal();
                  context.getEducators();
                });
            }}
          >
            Delete Educator
          </button>
          <AiOutlineClose
            size={22}
            className="cursor-pointer font-semibold"
            onClick={(e) => {
              e.preventDefault();
              closeModal();
            }}
          />
        </div>
        <div className="grid grid-cols-3 mt-2">
          <input
            type="text"
            placeholder="Enter name"
            value={context?.clickedUser?.name}
            onChange={(e) => {
              context.setClickedUser({
                ...context?.clickedUser,
                name: e.target.value,
              });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter email"
            value={context?.clickedUser?.email}
            onChange={(e) => {
              context.setClickedUser({
                ...context?.clickedUser,
                email: e.target.value,
              });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter address"
            value={context?.clickedUser?.address}
            onChange={(e) => {
              context.setClickedUser({
                ...context?.clickedUser,
                address: e.target.value,
              });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter Bank Name"
            value={context?.clickedUser?.bankName}
            onChange={(e) => {
              context.setClickedUser({
                ...context?.clickedUser,
                bankName: e.target.value,
              });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter Account No"
            value={context?.clickedUser?.accountNo}
            onChange={(e) => {
              context.setClickedUser({
                ...context?.clickedUser,
                accountNo: e.target.value,
              });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter Bank Branch"
            value={context?.clickedUser?.bankBranch}
            onChange={(e) => {
              context.setClickedUser({
                ...context?.clickedUser,
                bankBranch: e.target.value,
              });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter IFSC Code"
            value={context?.clickedUser?.ifscCode}
            onChange={(e) => {
              context.setClickedUser({
                ...context?.clickedUser,
                ifscCode: e.target.value,
              });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter Basic Pay"
            value={context?.clickedUser?.basicPay}
            onChange={(e) => {
              context.setClickedUser({
                ...context?.clickedUser,
                basicPay: e.target.value,
              });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter Incentive"
            value={context?.clickedUser?.incentive}
            onChange={(e) => {
              context.setClickedUser({
                ...context?.clickedUser,
                incentive: e.target.value,
              });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter Travel Allowance"
            value={context?.clickedUser?.travelAllowance}
            onChange={(e) => {
              context.setClickedUser({
                ...context?.clickedUser,
                travelAllowance: e.target.value,
              });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter Other Allowance"
            value={context?.clickedUser?.otherAllowance}
            onChange={(e) => {
              context.setClickedUser({
                ...context?.clickedUser,
                otherAllowance: e.target.value,
              });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            disabled={true}
            placeholder="Enter Gross Earning"
            value={context?.clickedUser?.grossEarning}
            onChange={(e) => {
              context.setClickedUser({
                ...context?.clickedUser,
                grossEarning: e.target.value,
              });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter TDS"
            value={context?.clickedUser?.tds}
            onChange={(e) => {
              context.setClickedUser({
                ...context?.clickedUser,
                tds: e.target.value,
              });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter Penalties"
            value={context?.clickedUser?.penalties}
            onChange={(e) => {
              context.setClickedUser({
                ...context?.clickedUser,
                penalties: e.target.value,
              });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            disabled={true}
            placeholder="Enter Gross Deduction"
            value={context?.clickedUser?.grossDeduction}
            onChange={(e) => {
              context.setClickedUser({
                ...context?.clickedUser,
                grossDeduction: e.target.value,
              });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            disabled={true}
            placeholder="Enter Net Pay"
            value={context?.clickedUser?.netPay}
            onChange={(e) => {
              context.setClickedUser({
                ...context?.clickedUser,
                netPay: e.target.value,
              });
            }}
            className="loginInput w-11/12 m-auto"
          />
        </div>
        <button
          className="btnClass m-auto block"
          onClick={(e) => {
            e.preventDefault();
            axios
              .put(`${EDUCATORS_URL}/updateEducator`, {
                id: context?.clickedUser?._id,
                ...context?.clickedUser,
              })
              .then((response) => {
                if (response.data.modifiedCount) {
                  context.getEducators();
                } else {
                  alert("Some error occured");
                }
              })
              .catch((error) => {
                console.log(error);
              });
            closeModal();
          }}
        >
          Update Data
        </button>
      </Modal>
    </div>
  );
};

export default ViewModal;
