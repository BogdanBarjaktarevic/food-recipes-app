import { combineReducers } from "redux";

import recipesReducer from "./recipesReducer";
import loadingReducer from "./loadingRecipesReducer";
import selectedReducer from "./selectedRecipeReducer";
import ingredientsReducer from "./ingredientsReducer";
import likesReducer from './likesReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  recipes: recipesReducer,
  loading: loadingReducer,
  selectedRecipe: selectedReducer,
  ingredients: ingredientsReducer,
  likes: likesReducer,
  form: formReducer
});
