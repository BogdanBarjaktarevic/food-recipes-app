import React from "react";
import { connect } from "react-redux";
import Icon from "../Icon/Icon";
import { likeRecipe } from './../../../../store/actions/index';

const Like = props => {
  let attachedClass = "large right floated heart outline icon";

  props.likes.forEach(el => {
    if (el.recipe_id === props.recipe.recipe_id) {
      attachedClass = "large right floated heart icon";
    }
  });

  const updateRecipeLikes = recipe => {
    props.likeRecipe(recipe);
  };

  return (
    <>
      <Icon
        attachClass={attachedClass}
        click={() => updateRecipeLikes(props.recipe)}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    likes: state.likes
  };
};

export default connect(
  mapStateToProps,
  {
    likeRecipe
  }
)(Like);
