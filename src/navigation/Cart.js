import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../store/ui-slice";
import Classes from "./Cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiAction.toggle());
  };
  return (
    <div className={Classes.div}>
      <img
        src={require("../image/cart.png")}
        className={Classes.imgCart}
        alt="Cart"
        onClick={toggleCartHandler}
      />
      <span className={Classes.cartQuantity} onClick={toggleCartHandler}>
        {cartQuantity}
      </span>
    </div>
  );
};

export default Cart;
