import React from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "./../../../store/actions/index";
import vegan from "../../../assets/images/1019998.jpg";
import slowCooker from "../../../assets/images/170290.jpg";
import shrimp from "../../../assets/images/3493788.jpg";
import cookies from "../../../assets/images/3685377.jpg";
import bread from "../../../assets/images/56560.png";
import soups from "../../../assets/images/56567.png";
import pasta from "../../../assets/images/56589.png";
import cuisine from "../../../assets/images/56610.png";
import cake from "../../../assets/images/572986.jpg";
import chicken from "../../../assets/images/606039.jpg";
import Heading from "../../UI/Headings/HeadingThree/Heading";
import Image from './../../UI/Image/Image';
import "./RecipeCategories.css";



const categories = [
  { title: "Bread Recipes", src: bread, term: "bread" },
  { title: "Cake Recipes", src: cake, term: "cake" },
  { title: "Chicken Recipes", src: chicken, term: "chicken" },
  { title: "Cookies", src: cookies, term: "cookies" },
  { title: "Pasta", src: pasta, term: "pasta" },
  { title: "Shrimp Recipes", src: shrimp, term: "shrimp" },
  { title: "Slow Cooker Recipes", src: slowCooker, term: "slow" },
  { title: "Soups", src: soups, term: "soup" },
  { title: "Vegan Recipes", src: vegan, term: "vegan" },
  { title: "World Cuisine", src: cuisine, term: "cuisine" }
];

const RecipeCategories = props => {
  let renderItem = categories.map(el => {
    return (
      <div
        className="recipe-categories"
        key={el.title}
        onClick={() => props.fetchRecipes(el.term)}
      >
        <Image attachClass="ui circular image" src={el.src} alt={el.title} />
        <Heading>{el.title}</Heading>
      </div>
    );
  });

  return (
    <>
      <Heading attachClass="ui orange header">Top Categories</Heading>
      <div className="recipe-categories-images">{renderItem}</div>
    </>
  );
};

export default connect(
  null,
  {
    fetchRecipes
  }
)(RecipeCategories);
