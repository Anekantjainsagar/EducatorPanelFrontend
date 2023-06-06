import React, { useState } from "react";
import ViewModal from "./ViewModal";

const User = ({ index, data }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  return (
    <>
      <ViewModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} data={data} />
      <div
        className="cursor-pointer grid text-center border border-gray-700 rounded-2xl py-2 mx-1 my-2.5 bg-[#121212] items-center"
        style={{
          gridTemplateColumns: "6% 15% 20% 16% 13% 11% 11% 8%",
        }}
        onDoubleClick={(e) => {
          e.preventDefault();
          setIsOpen(!modalIsOpen);
        }}
      >
        <p>{index + 1}</p>
        <p>{data?.name}</p>
        <p>{data?.email}</p>
        <p>{data?.bankName}</p>
        <p>{data?.ifscCode}</p>
        <p>{data?.basicPay}</p>
        <p>{data?.incentive}</p>
        <p>Email Sent</p>
      </div>
    </>
  );
};

export default User;
