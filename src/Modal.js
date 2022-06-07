import React from "react";
const Modal = ({ show, item, setOpenModal }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="Modal-card">
          <h5 className="modal-title">{item.strMeal}</h5>
          <div className="modal-body">
            <p className="modal-text">Instructions: {item.strInstructions} </p>
            <button>
              <a
                href={"https://www.themealdb.com/meal/" + item.idMeal}
                target="_blank"
              >
                Ingredients
              </a>
            </button>
            
          </div>
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
