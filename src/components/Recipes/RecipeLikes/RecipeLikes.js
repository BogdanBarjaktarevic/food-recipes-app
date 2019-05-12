import React from "react";
import { connect } from "react-redux";
import { fetchSingleRecipe } from '../../../store/actions/index';
import RecipeList from "../RecipeList";

const RecipeLikes = props => {
  return <RecipeList recipes={props.recipes} loading={props.loading}/>;

};

export default connect(
  null,
  { fetchSingleRecipe }
)(RecipeLikes);
