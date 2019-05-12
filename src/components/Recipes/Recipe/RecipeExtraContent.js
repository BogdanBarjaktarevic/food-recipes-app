import React from "react";
import Like from "../../UI/Icons/Like/Like";
import Icon from "../../UI/Icons/Icon/Icon";

const RecipeExtraContent = props => {
  return (
    <div className="extra content">
      <span className="left floated">
        <Icon attachClass={props.iconClass} />
        {props.children}
      </span>
      <Like recipe={props.recipe} />
    </div>
  );
};

export default RecipeExtraContent;
