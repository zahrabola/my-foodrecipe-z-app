import React, { useState } from "react";
import Modal from "./Modal";
const RecipeCard = ({item}) =>{
    const [modalOpen, setModalOpen] = useState(false);

return (
  <div className="row">
    <div className="col-md-4">
      <div className="card">
        <img src={item.strMealThumb} class="card-img-top img-fluid" alt="..." />
        <div className="cardbody">
          <h5 className="card-title">{item.strMeal}</h5>
          <p className="card-text">Category: {item.strCategory}</p>
          <p className="card-text">Nationality: {item.strArea}</p>
        </div>
        <button
          className="openModalBtn"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Open
        </button>

        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>
    </div>
  </div>
);
}




export default RecipeCard;