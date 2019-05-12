import React from "react";

const Image = ({ attachClass, alt, src, clicked }) => {
  return (
    <div className="image" style={{ display: "block" }}>
      <img className={attachClass} alt={alt} src={src} onClick={clicked} />
    </div>
  );
};

export default Image;
