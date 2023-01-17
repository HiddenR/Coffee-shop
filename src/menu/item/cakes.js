import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/Cart-slice";
import Classes from "../menuList.module.css";
import Card from "../../UI/Card";
const Cakes = (props) => {
  const { title, price, id } = props;
  const cakes = [
    {
      id: "c1",
      src: require("../../image/menu/cakes/cakes1.png"),
      title: "Cakes",
      price: 300,
    },
    {
      id: "c2",
      src: require("../../image/menu/cakes/cakes2.png"),
      title: "Cakes",
      price: 300,
    },
    {
      id: "c3",
      src: require("../../image/menu/cakes/cakes3.png"),
      title: "Cakes",
      price: 300,
    },
    {
      id: "c4",
      src: require("../../image/menu/cakes/cakes4.png"),
      title: "Cakes",
      price: 300,
    },
    {
      id: "c5",
      src: require("../../image/menu/cakes/cakes5.png"),
      title: "Hot Coffee",
      price: 300,
    },
    {
      id: "c6",
      src: require("../../image/menu/cakes/cakes6.png"),
      title: "Hot Coffee",
      price: 300,
    },
    {
      id: "c7",
      src: require("../../image/menu/cakes/cakes7.png"),
      title: "Hot Coffee",
      price: 300,
    },
  ];

  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartAction.addItemToCart({
        id,
        price,
        title,
      })
    );
  };
  const cakesDisplay = cakes.map((item) => {
    return (
      <div key={item.id} className={Classes.Card}>
        <img src={item.src} alt={item.title} />
        <span id={Classes.title}>{item.title}</span>
        <span id={Classes.price}>₱ {item.price}</span>
        <button className={Classes.addItem}>ADD</button>
      </div>
    );
  });
  return <Card>{cakesDisplay}</Card>;
};

export default Cakes;
