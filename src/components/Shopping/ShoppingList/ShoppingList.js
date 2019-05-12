import React from "react";
import { connect } from "react-redux";

import { addPrice, updateTotalPrice } from "./../../../store/actions/index";
import TotalPrice from "../Price/TotalPrice";
import Ingredient from "../../Recipes/RecipeIngredients/Ingredient/Ingredient";
import HeadingAndIcon from "../../UI/HeadingAndIcon/HeadingAndIcon";

const ShoppingList = props => {
  const onChangePrice = (event, ingredient, value) => {
    props.addPrice(ingredient, value);
    props.updateTotalPrice();
  };

  let addIngredient = null;
  if (props.ingredients) {
    addIngredient = Object.entries(props.ingredients)
      .filter(ingredient => {
        return ingredient[1].isTouched;
      })
      .map(ing => {
        return (
          <div className="item" key={ing[0]}>
            <div className="right floated content">
              <div className="ui right labeled input">
                <input
                  type="text"
                  placeholder="Price"
                  style={{
                    maxWidth: "65px",
                    border: "1px solid rgb(242, 113, 28)"
                  }}
                  onChange={event =>
                    onChangePrice(event, ing[0], event.target.value)
                  }
                />
                <div
                  className="ui basic label"
                  style={{
                    backgroundColor: "rgb(242, 113, 28)",
                    color: "#fff"
                  }}
                >
                  $
                </div>
              </div>
            </div>
            <Ingredient ingredient={ing[1].ingredient} />
          </div>
        );
      });
  }

  return (
    <div className="ui divided list">
      <HeadingAndIcon headingClass="ui orange header" iconClass="cart icon">
        Shopping List
      </HeadingAndIcon>
      {addIngredient}
      {addIngredient && (addIngredient && addIngredient.length > 0) ? (
        <TotalPrice totalPrice={props.totalPrice} />
      ) : (
        "Add Ingredients..."
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients.ingredients,
    totalPrice: state.ingredients.totalPrice
  };
};

export default connect(
  mapStateToProps,
  {
    addPrice,
    updateTotalPrice
  }
)(ShoppingList);
