import React from "react";
const Modal = ({setOpenModal, item}) => {
return (
  <div className="modalBackground">
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button
          onClick={() => {
            setOpenModal(false);
          }}
        >
          X
        </button>
      </div>
      <div className="Modal-card">
        <h5 className="modal-title">{item.strMeal}</h5>
        <div className="modal-body">
          <p className="modal-text">Instructions: {item.strInstructions}</p>
         
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  </div>
);

}


export default Modal;