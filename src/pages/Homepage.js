import React from "react";
import { connect } from "react-redux";
import Bookmarks from "../components/Recipes/Bookmarks/Bookmarks";
import RecipeCategories from "../components/Recipes/Recipe/RecipeCategories";
import RecipeDetails from "../components/Recipes/Recipe/RecipeDetails";
import TopRatedRecipes from "../components/Recipes/Recipe/TopRatedRecipes";
import RecipeList from "../components/Recipes/RecipeList";
import ShoppingList from "../components/Shopping/ShoppingList/ShoppingList";
import HeadingAndIcon from "../components/UI/HeadingAndIcon/HeadingAndIcon";
import Icon from "../components/UI/Icons/Icon/Icon";
import SearchBar from "../components/UI/SearchBar/SearchBar";
import Heading from "../components/UI/Headings/HeadingThree/Heading";

export const Homepage = props => {
  return (
    <div
      className="ui container ui vertical stripe segment"
      style={{ backgroundColor: "#fff", padding: "20px" }}
    >
      <div className="ui stackable three column grid">
        <div className="row">
          <div className="three wide middle aligned column center aligned">
            <Icon attachClass="utensils circular orange big icon" />
            <Bookmarks recipes={props.likedRecipes} loading={props.loading} />
          </div>
          <div className="nine wide center aligned column">
            <SearchBar />
          </div>
          <div className="four wide column middle aligned center aligned">
            <Heading attachClass="ui orange header">Food Recipes</Heading>
          </div>
        </div>
      </div>
      <div className="ui section divider" />
      <div className="ui stackable column grid">
        <div className="row">
          <div className="sixteen wide center aligned column computer only fluid">
            <RecipeCategories />
          </div>
        </div>
      </div>
      <div className="ui section divider" />
      <div className="ui stackable three column grid">
        <div className="row" style={{ marginTop: "20px" }}>
          <div
            className="three wide center aligned column computer only"
            style={{ overflowY: "scroll", height: "80vh", padding: "10px" }}
          >
            <HeadingAndIcon
              headingClass="ui orange header"
              iconClass="book icon"
            >
              Recipes
            </HeadingAndIcon>
            <RecipeList recipes={props.recipes} loading={props.loading} />
          </div>
          <div className="nine wide center aligned column">
            <RecipeDetails />
          </div>
          <div className="four wide center aligned column">
            <ShoppingList />
          </div>
        </div>
      </div>
      <div className="ui stackable column grid">
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="sixteen wide center aligned column">
            <TopRatedRecipes />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    loading: state.loading.recipes,
    likedRecipes: state.likes
  };
};

export default connect(mapStateToProps)(Homepage);
