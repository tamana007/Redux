import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../store";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

function Modal() {
  const dispatch = useDispatch();
  console.log("clr crt", clearCart);

  return (
    <aside className="modal-container">
      <div className="modal">
        {" "}
        <h4>Remove all Items from your shopping cart</h4>
        <div className="btn-container">
          <button
            onClick={() => dispatch(clearCart(),
              
               dispatch(closeModal()))}
            type="btn"
            className=" btn confirm-btn"
          >
            CONFIRM
          </button>
          <button onClick={()=>dispatch(closeModal())} className="btn clear-btn">CANCEL</button>
        </div>
      </div>
    </aside>
  );
}

export default Modal;
