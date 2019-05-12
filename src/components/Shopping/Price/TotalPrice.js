import React from "react";

const TotalPrice = ({ totalPrice }) => {
  return (
    <div className="ui tag huge labels right floated">
      <span
        className="ui label"
        style={{
          backgroundColor: "rgb(242, 113, 28)",
          color: "#fff",
          float: "right",
          margin: "10px 0"
        }}
      >
        ${totalPrice}
      </span>
    </div>
  );
};

export default TotalPrice;
