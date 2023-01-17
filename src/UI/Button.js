import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/Cart-slice";
import Classes from "./Button.module.css";
const Button = (props) => {
  const dispatch = useDispatch();
  const addBtnHanlder = (event) => {
    dispatch(
      cartAction.addItemToCartAction({
        src: props.item.src,
        id: props.item.id,
        title: props.item.title,
        price: props.item.price,
      })
    );
  };
  return (
    <button className={Classes.addItem} onClick={addBtnHanlder}>
      ADD
    </button>
  );
};

export default Button;
