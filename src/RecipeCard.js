import React from "react";
const RecipeCard = ({item}) =>{
return (
  <div className="row">
    <div className="col-md-4">
      <div className="card">
        <img src={item.strMealThumb} class="card-img-top img-fluid" alt="..." />
        <div className="cardbody">
          <h5 className="card-title">{item.strMeal}</h5>
          <p className="card-text">{item.strCategory}</p>
          <a href="#" class="btn btn-primary">
            Modal
          </a>
        </div>
      </div>
    </div>
  </div>
);
}




export default RecipeCard;