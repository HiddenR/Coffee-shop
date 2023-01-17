import React, { useState } from "react";
import Classes from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../store/Cart-slice";

const Cart = (props) => {
  const item = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const cartItem = item.map((item) => {
    const addBtnHanlder = () => {
      dispatch(
        cartAction.addItemToCartAction({
          src: item.src,
          id: item.id,
          title: item.title,
          price: item.price,
        })
      );
    };
    return (
      <div key={item.id} className={Classes.cartItemWrapper}>
        <img src={item.src} alt={item.title} />
        <div className={Classes.titleWrapper}>
          <span>Product: {item.title}</span>
          <span>Price: {item.price}</span>
          <span>Quantity: {item.quantity}</span>
          <span>ID: {item.id}</span>
        </div>
        <div className={Classes.buttonWrapper}>
          <button className={Classes.reduce}>-</button>
          <button onClick={addBtnHanlder}>+</button>
        </div>
      </div>
    );
  });
  return (
    <div className={Classes.CartBodyWrapper}>
      <div className={Classes.cartBody}>
        <div>
          <span>List of Order/s</span>
          <span>Date: 00/00/00</span>
        </div>
        {cartItem}
      </div>
    </div>
  );
};

export default Cart;
