import React from "react";

const Headings = () => {
  return (
    <div
      className="grid text-center py-1"
      style={{ gridTemplateColumns: "4% 5% 14% 16% 16% 11% 10% 8% 7% 8%" }}
    >
      <p></p>
      <p>S. No.</p>
      <p>Name</p>
      <p>Email</p>
      <p>Bank Name</p>
      <p>Account Number</p>
      <p>IFSC Code</p>
      <p>Basic Pay</p>
      <p>Incentive</p>
      <p>Net Pay</p>
    </div>
  );
};

export default Headings;
