export default (state = [], action) => {
  switch (action.type) {
    case "SET_INGREDIENTS":
      const obj = action.payload.reduce(
        (o, key, index) => ({
          ...o,
          [index]: { ingredient: key, isTouched: false, price: 0 }
        }),
        {}
      );
      return {
        ...state,
        ingredients: obj,
        totalPrice: 0
      };
    case "CHECK_INGREDIENT":
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload]: {
            ...state.ingredients[action.payload],
            isTouched: !state.ingredients[action.payload].isTouched,
            price: 0
          }
        }
      };

    case "ADD_PRICE":
      if (action.payload.price === "") {
        action.payload.price = 0;
      }
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload.index]: {
            ...state.ingredients[action.payload.index],
            price: action.payload.price
          }
        }
      };

    case "UPDATE_TOTAL_PRICE":
      return {
        ...state,
        totalPrice: Object.keys(state.ingredients)
          .map(el => {
            return parseInt(state.ingredients[el].price);
          })
          .reduce((acc, curr) => {
            return acc + curr;
          }, 0).toFixed(2)
      };

    default:
      return state;
  }
};
