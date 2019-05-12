import React from "react";

import Heading from "../Headings/HeadingThree/Heading";
import Icon from "../Icons/Icon/Icon";

const HeadingAndIcon = props => {
  return (
    <Heading attachClass={props.headingClass}>
      <Icon attachClass={props.iconClass} />
      {props.children}
    </Heading>
  );
};

export default HeadingAndIcon;
