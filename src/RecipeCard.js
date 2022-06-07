import React from "react";
const RecipeCard = ({item}) =>{
return (
  <div className="row">
    <div className="col-md-4">
      <div className="card">
        <img src={item.strMealThumb} class="card-img-top img-fluid" alt="..." />
        <div className="cardbody">
          <h5 className="card-title">{item.strMeal}</h5>
          <p className="card-text">Category: {item.strCategory}</p>
          <p className="card-text">Nationality: {item.strArea}</p>
          <button>
            <a href="#" class="btn">
              Modal
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
);
}




export default RecipeCard;