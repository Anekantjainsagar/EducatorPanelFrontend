import React, { useState } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

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

const AddModal = ({ modalIsOpen, setIsOpen }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    bankName: "",
    accountNo: "",
    bankBranch: "",
    ifscCode: "",
    basicPay: "",
    incentive: "",
    travelAllowance: "",
    otherAllowance: "",
    grossEarning: "",
    tds: "",
    penalties: "",
    grossDeduction: "",
    netPay: "",
    payslips: "",
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
          <h1 className="text-2xl font-semibold">Add New Employee</h1>
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
            value={user.name}
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter email"
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter address"
            value={user.address}
            onChange={(e) => {
              setUser({ ...user, address: e.target.value });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter Bank Name"
            value={user.bankName}
            onChange={(e) => {
              setUser({ ...user, bankName: e.target.value });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter Account No"
            value={user.accountNo}
            onChange={(e) => {
              setUser({ ...user, accountNo: e.target.value });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter Bank Branch"
            value={user.bankBranch}
            onChange={(e) => {
              setUser({ ...user, bankBranch: e.target.value });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter IFSC Code"
            value={user.ifscCode}
            onChange={(e) => {
              setUser({ ...user, ifscCode: e.target.value });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter Basic Pay"
            value={user.basicPay}
            onChange={(e) => {
              setUser({ ...user, basicPay: e.target.value });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter Incentive"
            value={user.incentive}
            onChange={(e) => {
              setUser({ ...user, incentive: e.target.value });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter Travel Allowance"
            value={user.travelAllowance}
            onChange={(e) => {
              setUser({ ...user, travelAllowance: e.target.value });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter Other Allowance"
            value={user.otherAllowance}
            onChange={(e) => {
              setUser({ ...user, otherAllowance: e.target.value });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter Gross Earning"
            value={user.grossEarning}
            onChange={(e) => {
              setUser({ ...user, grossEarning: e.target.value });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter TDS"
            value={user.tds}
            onChange={(e) => {
              setUser({ ...user, tds: e.target.value });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter Penalties"
            value={user.penalties}
            onChange={(e) => {
              setUser({ ...user, penalties: e.target.value });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter Gross Deduction"
            value={user.grossDeduction}
            onChange={(e) => {
              setUser({ ...user, grossDeduction: e.target.value });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter Net Pay"
            value={user.netPay}
            onChange={(e) => {
              setUser({ ...user, netPay: e.target.value });
            }}
            className="loginInput w-11/12 m-auto"
          />
          <input
            type="text"
            placeholder="Enter Payslips"
            value={user.payslips}
            onChange={(e) => {
              setUser({ ...user, payslips: e.target.value });
            }}
            className="loginInput w-11/12 m-auto"
          />
        </div>
        <button
          className="btnClass m-auto block"
          onClick={(e) => {
            e.preventDefault();
            closeModal()
          }}
        >
          Add New
        </button>
      </Modal>
    </div>
  );
};

export default AddModal;
