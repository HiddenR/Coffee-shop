import React from "react";
import Classes from "../menuList.module.css";
import Card from "../../UI/Card";
import Button from "../../UI/Button";

const icedCoffee = () => {
  // iced Coffee object
  const icedCoffee = [
    {
      id: "ic1",
      src: require("../../image/menu/IcedCoffee/iced1.jpg"),
      title: "Iced Coffee",
      price: 300,
    },
    {
      id: "ic2",
      src: require("../../image/menu/IcedCoffee/iced2.jpg"),
      title: "Iced Coffee",
      price: 300,
    },
    {
      id: "ic3",
      src: require("../../image/menu/IcedCoffee/iced3.jpg"),
      title: "Iced Coffee",
      price: 300,
    },
    {
      id: "ic4",
      src: require("../../image/menu/IcedCoffee/iced4.jpg"),
      title: "Iced Coffee",
      price: 300,
    },
  ];

  const icedCoffeeDisplay = icedCoffee.map((item) => {
    return (
      <div key={item.id} className={Classes.Card}>
        <img src={item.src} alt={item.title} />
        <span id={Classes.title}>{item.title}</span>
        <span id={Classes.price}>₱ {item.price}</span>
        <Button item={item} />
      </div>
    );
  });
  return <Card>{icedCoffeeDisplay}</Card>;
};

export default icedCoffee;
