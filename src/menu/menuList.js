import React, { useState } from "react";
import Classes from "./menuList.module.css";
// link
import HotCoffee from "./item/hotCoffee";
import IcedCoffee from "./item/icedCoffee";
import Frappe from "./item/frappe";
import Cakes from "./item/cakes";
import Cart from "../cart/Cart";
const MenuList = () => {
  const [activeName, setIsActiveName] = useState("Hot Coffee");
  // menu button
  const menuButton = [
    {
      title: "Hot Coffee",
      image: <HotCoffee />,
    },
    {
      title: "Iced Coffee",
      image: <IcedCoffee />,
    },
    {
      title: "Frappe",
      image: <Frappe />,
    },
    {
      title: "Cakes",
      image: <Cakes />,
    },
  ];
  // display item function
  const displayITem = (event) => {
    const activename = event.target.innerText;
    setIsActiveName(activename);
  };
  const itemTitle = menuButton.map((item, index) => {
    return (
      <div key={index}>
        <span id={Classes.itemTitle} onClick={displayITem}>
          {item.title}
        </span>
      </div>
    );
  });

  const imageDisplay = menuButton
    .filter((item) => item.title === activeName)
    .map((displayedItem, index) => {
      return <React.Fragment key={index}>{displayedItem.image}</React.Fragment>;
    });

  return (
    <div>
      <Cart />

      <div className={Classes.menuListBody}>
        <div className={Classes.itemButton}>{itemTitle}</div>
        <div className={Classes.itemWrapper}>{imageDisplay}</div>
      </div>
    </div>
  );
};

export default MenuList;
