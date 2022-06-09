import React, { useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "./Modal";
const RecipeCard = ({item}) =>{
    const [show, setShow] = useState(false);
 const [recipeItem, setrecipeItem] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  
return (
  <div className="container">

    <div className="row">
      <div className="col">
        <div
          className="card"
          onClick={() => {
            setShow(true);
            setrecipeItem(item);
          }}
        >
          <img
            src={item.strMealThumb}
            class="card-img-top img-fluid"
            alt="..."
          />
          <div className="cardbody">
            <h5 className="card-title">{item.strMeal}</h5>
            <p className="card-text">Category: {item.strCategory}</p>
            <p className="card-text">Nationality: {item.strArea}</p>
            <p className="card-text"> {item.strTags}</p>
            <button
              className="openModalBtn"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Open
            </button>
          </div>
          {modalOpen && (
            <Modal show={show} item={recipeItem} setOpenModal={setModalOpen} />
          )}
        </div>
      </div>
    </div>
  </div>
);
}




export default RecipeCard;