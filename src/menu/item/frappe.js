import React from "react";
import Classes from "../menuList.module.css";
import Card from "../../UI/Card";

const frappe = () => {
  // iced frapper object
  const frappe = [
    {
      id: "f1",
      src: require("../../image/menu/frappe/frappe1.png"),
      title: "Frappe",
      price: 300,
    },
    {
      id: "f2",
      src: require("../../image/menu/frappe/frappe2.png"),
      title: "Frappe",
      price: 300,
    },
    {
      id: "f3",
      src: require("../../image/menu/frappe/frappe3.png"),
      title: "Frappe",
      price: 300,
    },
    {
      id: "f4",
      src: require("../../image/menu/frappe/frappe4.png"),
      title: "Frappe",
      price: 300,
    },
    {
      id: "f5",
      src: require("../../image/menu/frappe/frappe5.png"),
      title: "Frappe",
      price: 300,
    },
    {
      id: "f6",
      src: require("../../image/menu/frappe/frappe6.png"),
      title: "Frappe",
      price: 300,
    },
    {
      id: "f7",
      src: require("../../image/menu/frappe/frappe7.png"),
      title: "Frappe",
      price: 300,
    },
    {
      id: "f8",
      src: require("../../image/menu/frappe/frappe8.png"),
      title: "Frappe",
      price: 300,
    },
  ];
  const frappeDisplay = frappe.map((item) => {
    return (
      <div key={item.id} className={Classes.Card}>
        <img src={item.src} alt={item.title} />
        <span id={Classes.title}>{item.title}</span>
        <span id={Classes.price}>₱ {item.price}</span>
        <button className={Classes.addItem}>ADD</button>
      </div>
    );
  });
  return <Card>{frappeDisplay}</Card>;
};

export default frappe;
