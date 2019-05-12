import React from "react";
import "./Sidebar.css";

import Backdrop from "../Backdrop/Backdrop";
import RecipeLikes from "../../Recipes/RecipeLikes/RecipeLikes";

const Sidebar = props => {
  let attachedClass = ["sidebar", "close"];
  if (props.open) {
    attachedClass = ["sidebar", "open"];
  }

  return (
    <>
      <Backdrop show={props.open} cancel={props.closed} />
      <div className={attachedClass.join(" ")}>
        <RecipeLikes recipes={props.recipes} loading={props.loading} />
      </div>
    </>
  );
};

export default Sidebar;
