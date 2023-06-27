import React, { useContext } from "react";
import Nav from "../Component/Nav";
import Headings from "../Component/Headings";
import User from "../Component/User";
import Context from "../Context/Context";

const Home = ({ checkToken }) => {
  const context = useContext(Context);

  return (
    <div className="h-[100vh] w-[100vw] bg-black text-white">
      <Nav checkToken={checkToken} />
      <div className="w-[97%] m-auto rounded-md">
        <Headings />
        <div className="h-[82vh] overflow-scroll">
          {context.educators.map((e, i) => {
            return <User key={i} index={i} data={e} />;
          })}
          {context.totalEducators > context.page * 10 ? (
            <>
              <button
                className="btnClass block m-auto"
                onClick={(e) => {
                  e.preventDefault();
                  context.setPage(context.page + 1);
                }}
              >
                Load More..
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
