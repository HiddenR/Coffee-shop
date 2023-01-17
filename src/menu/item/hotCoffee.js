import React from "react";
import Classes from "../menuList.module.css";
import Card from "../../UI/Card";

const hotCoffee = () => {
  // hot coffee object
  const hotCoffee = [
    {
      id: "h1",
      src: require("../../image/menu/Hot-Coffee/hot1.jpg"),
      title: "Hot Coffee",
      price: 300,
    },
    {
      id: "h2",
      src: require("../../image/menu/Hot-Coffee/hot2.jpg"),
      title: "Hot Coffee",
      price: 300,
    },
    {
      id: "h3",
      src: require("../../image/menu/Hot-Coffee/hot3.gif"),
      title: "Hot Coffee",
      price: 300,
    },
    {
      id: "h4",
      src: require("../../image/menu/Hot-Coffee/hot4.jpg"),
      title: "Hot Coffee",
      price: 300,
    },
    {
      id: "h5",
      src: require("../../image/menu/Hot-Coffee/hot5.jpg"),
      title: "Hot Coffee",
      price: 300,
    },
    {
      id: "h6",
      src: require("../../image/menu/Hot-Coffee/hot6.jpg"),
      title: "Hot Coffee",
      price: 300,
    },
    {
      id: "h7",
      src: require("../../image/menu/Hot-Coffee/hot7.jpg"),
      title: "Hot Coffee",
      price: 300,
    },
  ];
  const hotCoffeeDisplay = hotCoffee.map((item) => {
    return (
      <div key={item.id} className={Classes.Card}>
        <img src={item.src} alt={item.title} />
        <span id={Classes.title}>{item.title}</span>
        <span id={Classes.price}>₱ {item.price}</span>
        <button className={Classes.addItem}>ADD</button>
      </div>
    );
  });
  return <Card>{hotCoffeeDisplay}</Card>;
};

export default hotCoffee;
