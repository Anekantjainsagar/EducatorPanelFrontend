import React from "react";

const User = () => {
  return (
    <div
      className="grid text-center border border-gray-700 rounded-2xl py-2 mx-1 my-2.5 bg-[#121212] items-center"
      style={{
        gridTemplateColumns: "6% 15% 20% 16% 13% 11% 11% 8%",
      }}
    >
      <p>1</p>
      <p>Anekant Jain</p>
      <p>Anekantjainsagar@gmail.com</p>
      <p>State Bank Of India</p>
      <p>IFSC Code</p>
      <p>Basic Pay</p>
      <p>Incentive</p>
      <p>Email Sent</p>
    </div>
  );
};

export default User;
