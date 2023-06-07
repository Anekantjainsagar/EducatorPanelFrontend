import React, { useContext, useState } from "react";
import ViewModal from "./ViewModal";
import Context from "../Context/Context";

const User = ({ index, data }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const context = useContext(Context);
  return (
    <>
      <ViewModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} data={data} />
      <div
        className="cursor-pointer grid text-center border border-gray-700 rounded-2xl py-2 mx-1 my-2.5 bg-[#121212] items-center"
        style={{
          gridTemplateColumns: "5% 14% 20% 16% 11% 10% 8% 7% 8%",
        }}
        onDoubleClick={(e) => {
          e.preventDefault();
          context.setClickedUser(data);
          setIsOpen(!modalIsOpen);
        }}
      >
        <p>{index + 1}</p>
        <p>{data?.name}</p>
        <p>{data?.email}</p>
        <p>{data?.bankName}</p>
        <p>{data?.accountNo}</p>
        <p>{data?.ifscCode}</p>
        <p>{data?.basicPay}</p>
        <p>{data?.incentive}</p>
        <p>{data?.netPay}</p>
      </div>
    </>
  );
};

export default User;
