import React, { useContext, useEffect, useState } from "react";
import Context from "../Context/Context";

const Headings = () => {
  const context = useContext(Context);
  const [ids, setIds] = useState([]);

  const extractedIds = context.educators.map((obj) => obj._id);

  useEffect(() => {
    setIds(extractedIds);
  }, [context.educators]);

  return (
    <div
      className="grid text-center py-1"
      style={{ gridTemplateColumns: "4% 5% 14% 16% 16% 11% 10% 8% 7% 8%" }}
    >
      <p>
        <input
          type="checkbox"
          checked={context.selectedAll}
          onChange={(e) => {
            if (!context.selectedAll) {
              context.setEmailUser([...ids]);
              context.setSelectedAll(true);
            } else {
              context.setEmailUser([]);
              context.setSelectedAll(false);
            }
          }}
        />
      </p>
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
