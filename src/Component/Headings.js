import React from "react";

const Headings = () => {
  return (
    <div
      className="grid text-center py-1"
      style={{ gridTemplateColumns: "6% 15% 20% 16% 13% 11% 11% 8%" }}
    >
      <p className="">S. No.</p>
      <p className="">Name</p>
      <p className="">Email</p>
      <p className="">Bank Name</p>
      <p className="">IFSC Code</p>
      <p className="">Basic Pay</p>
      <p className="">Incentive</p>
      <p className="">Email Sent</p>
    </div>
  );
};

export default Headings;
