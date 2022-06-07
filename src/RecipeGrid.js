import React from "react";
import RecipeCard from "./RecipeCard";
const RecipeGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1> Loading ... </h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <RecipeCard key={item.strMeal} item={item}></RecipeCard>
      ))}
    </section>
  );

};


export default RecipeGrid;