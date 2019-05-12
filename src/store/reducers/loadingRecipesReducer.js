export default (state = false, action) => {
  switch (action.type) {
    case "LOADING_RECIPES":
      return {
        ...state,
        [action.place]: true
      };
    case "FETCH_RECIPES":
      return false;
    case "SELECTED_RECIPE":
      return false;
    default:
      return state;
  }
};