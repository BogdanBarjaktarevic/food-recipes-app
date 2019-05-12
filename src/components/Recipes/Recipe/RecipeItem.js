import React from "react";
import "./RecipeItem.css";
import RecipeContent from "./RecipeContent";

const RecipeItem = ({ recipe, selectedRecipe }) => {
  return (
    <div
      className="item ui segment recipe-item"
      onClick={() => selectedRecipe(recipe)}
    >
      <RecipeContent
        recipe={recipe}
        class="ui tiny image"
        src={recipe.image_url}
        alt={recipe.title}
      />
    </div>
  );
};

export default RecipeItem;
