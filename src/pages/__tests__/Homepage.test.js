import React from "react";
import { shallow } from "enzyme";
import { Homepage } from "../Homepage";
import SearchBar from "../../components/UI/SearchBar/SearchBar";
import Bookmarks from "../../components/Recipes/Bookmarks/Bookmarks";
import Heading from "../../components/UI/Headings/HeadingThree/Heading";
import RecipeCategories from "../../components/Recipes/Recipe/RecipeCategories";
import HeadingAndIcon from "../../components/UI/HeadingAndIcon/HeadingAndIcon";
import RecipeList from "../../components/Recipes/RecipeList";
import RecipeDetails from "../../components/Recipes/Recipe/RecipeDetails";
import ShoppingList from "../../components/Shopping/ShoppingList/ShoppingList";
import TopRatedRecipes from "../../components/Recipes/Recipe/TopRatedRecipes";
import Icon from "../../components/UI/Icons/Icon/Icon";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Homepage />);
});

it("should render Icon", () => {
  expect(wrapped.find(Icon).length).toEqual(1);
});

it("should render Bookmarks", () => {
  expect(wrapped.find(Bookmarks).length).toEqual(1);
});

it("should render SearchBar", () => {
  expect(wrapped.find(SearchBar).length).toEqual(1);
});

it("should render Heading", () => {
  expect(wrapped.find(Heading).length).toEqual(1);
});

it("should render RecipeCategories", () => {
  expect(wrapped.find(RecipeCategories).length).toEqual(1);
});

it("should render HeadingAndIcon", () => {
  expect(wrapped.find(HeadingAndIcon).length).toEqual(1);
});

it("should render RecipeList", () => {
  expect(wrapped.find(RecipeList).length).toEqual(1);
});

it("should render RecipeDetails", () => {
  expect(wrapped.find(RecipeDetails).length).toEqual(1);
});

it("should render ShoppingList", () => {
  expect(wrapped.find(ShoppingList).length).toEqual(1);
});

it("should render TopRatedRecipes", () => {
  expect(wrapped.find(TopRatedRecipes).length).toEqual(1);
});
