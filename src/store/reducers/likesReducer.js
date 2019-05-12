export default (state = [], action) => {
  switch (action.type) {
    case "LIKE_RECIPE":
      const updatedState = state.filter(el => {
        return el.recipe_id !== action.payload.recipe_id;
      });
      if (updatedState.length === state.length) {
        return [...state, action.payload];
      } else {
        return updatedState;
      }
    case "SET_LIKES":
      return action.payload;

    default:
      return state;
  }
};
