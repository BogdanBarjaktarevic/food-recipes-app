import React from "react";
import Image from '../../UI/Image/Image';
import RecipePublisher from "./RecipePublisher";
import RecipeTitle from "./RecipeTitle";

const RecipeContent = props => {
  return (
    <>
      <Image alt={props.alt} src={props.src} clicked={props.clicked}/>
      <div className="content">
        <span
          className="header"
          style={{ margin: "5px", color: "rgb(65, 131, 196)" }}
        >
          {props.children}
          <RecipeTitle title={props.recipe.title} />
        </span>
        <div className="meta">
          Publisher: <RecipePublisher publisher={props.recipe.publisher} />
        </div>
      </div>
    </>
  );
};

export default RecipeContent;
