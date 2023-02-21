import React from "react";

const Card3 = (props) => {
  return (
    <>
      <div className="card " style={{ height: "40vh" }}>
        <h5 className="card-title text-primary mt-2 p-2">{props.abc}</h5>
        <div className="card-body bg-light"></div>
      </div>
    </>
  );
};

export default Card3;
