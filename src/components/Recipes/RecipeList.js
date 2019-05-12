import React from "react";
import { connect } from "react-redux";

import RecipeItem from "./Recipe/RecipeItem";
import Spinner from "../UI/Spinner/Spinner";
import { fetchSingleRecipe } from "./../../store/actions/index";

const RecipeList = props => {
  if (props.loading) {
    return <Spinner />;
  }

  const renderRecipes = props.recipes.map(recipe => {
    return (
      <RecipeItem
        key={recipe.recipe_id}
        recipe={recipe}
        selectedRecipe={() => props.fetchSingleRecipe(recipe.recipe_id)}
      />
    );
  });

  return <div className="ui relaxed selection list">{renderRecipes}</div>;
};



export default connect(
  null,
  {
    fetchSingleRecipe
  }
)(RecipeList);
