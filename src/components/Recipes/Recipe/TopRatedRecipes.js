import React from "react";
import { connect } from "react-redux";
import { fetchSingleRecipe } from "./../../../store/actions/index";
import HeadingAndIcon from "../../UI/HeadingAndIcon/HeadingAndIcon";
import RecipeContent from "./RecipeContent";
import RecipeExtraContent from "./RecipeExtraContent";



const TopRatedRecipes = props => {
  let threeRecipes = null;

  if (props.recipes) {
    threeRecipes = props.recipes.slice(0, 12).map(recipe => {
      return (threeRecipes = (
        <div className="orange card" key={recipe.recipe_id}>
          <RecipeContent
            clicked={() => props.fetchSingleRecipe(recipe.recipe_id)}
            recipe={recipe}
            src={recipe.image_url}
            alt={recipe.title}
          />
          <RecipeExtraContent recipe={recipe} iconClass="user icon">
            Social Rank {parseInt(recipe.social_rank).toFixed(2)}
          </RecipeExtraContent>
        </div>
      ));
    });
  }

  return (
    <>
      <HeadingAndIcon
        headingClass="ui block orange header"
        iconClass="gripfire icon"
      >
        Trending Recipes
      </HeadingAndIcon>
      <div className="ui four link doubling cards">{threeRecipes}</div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    loading: state.loading
  };
};

export default connect(
  mapStateToProps,
  {
    fetchSingleRecipe
  }
)(TopRatedRecipes);
