import React from "react";

import "./IngredientList.css";
import Ingredient from "./Ingredient/Ingredient";
import Icon from "../../UI/Icons/Icon/Icon";

const IngredientList = ({ ingredients, clicked }) => {
  if (!ingredients) {
    return null;
  }

  const renderIngredients = Object.keys(ingredients).map(igKey => {
    return (
      <div className="item" key={igKey}>
        <Icon
          attachClass={
            ingredients[igKey].isTouched
              ? "check circle green icon"
              : "check circle icon"
          }
          click={() => clicked(igKey)}
        />
        <Ingredient ingredient={ingredients[igKey].ingredient} />
      </div>
    );
  });

  return (
    <div className="ui large list ingredient-list">{renderIngredients}</div>
  );
};

export default IngredientList;
