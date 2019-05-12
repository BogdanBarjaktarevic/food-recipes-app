import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../../UI/Spinner/Spinner";
import IngredientList from "../RecipeIngredients/IngredientList";
import RecipeContent from "./RecipeContent";
import RecipeExtraContent from "./RecipeExtraContent";
import { checkIngredient } from './../../../store/actions/index';


class RecipeDetails extends Component {
  render() {
    let renderRecipeDetails = <Spinner />;

    if (this.props.loading) {
      return <Spinner />;
    }

    if (this.props.recipe) {
      renderRecipeDetails = (
        <div className="ui centered orange fluid card">
          <RecipeContent
            recipe={this.props.recipe}
            src={this.props.recipe.image_url}
            alt={this.props.recipe.title}
          />
          <IngredientList
            ingredients={this.props.ingredients}
            clicked={this.props.checkIngredient}
          />
          <RecipeExtraContent recipe={this.props.recipe} iconClass="user icon">
            Social Rank {parseInt(this.props.recipe.social_rank).toFixed(2)}
          </RecipeExtraContent>
        </div>
      );
    }

    return <>{renderRecipeDetails}</>;
  }
}

const mapStateToProps = state => {
  return {
    term: state.term,
    loading: state.loading.single,
    recipe: state.selectedRecipe,
    ingredients: state.ingredients.ingredients
  };
};

export default connect(
  mapStateToProps,
  {
    checkIngredient
  }
)(RecipeDetails);
