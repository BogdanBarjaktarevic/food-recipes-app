export default (state = null, action) => {
  switch (action.type) {
    case "SELECTED_RECIPE":
      return action.payload;
    default:
      return state;
  }
};
