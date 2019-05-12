import React from "react";

const Heading = props => {
  return <h3 className={props.attachClass}>{props.children}</h3>;
};

export default Heading;
