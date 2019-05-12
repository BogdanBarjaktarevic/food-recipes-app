import React from "react";

const Icon = props => {
  return <i className={props.attachClass} onClick={props.click} />;
};

export default Icon;
