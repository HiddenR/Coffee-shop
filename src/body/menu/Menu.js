import React from "react";
import Classes from "./Menu.module.css";

import HotCoffee from "./HotCoffee";
import Frappe from "./Frappe";
import Cakes from "./Cakes";
import Merchandise from "./Merchandise";
import About from "../about/About";
const Menu = () => {
  return (
    <div className={Classes.menuBody}>
      <div id="menu">
        <HotCoffee />
        <Frappe />
        <Cakes />
      </div>
      <div id="merch">
        <Merchandise />
      </div>{" "}
      <div id="about">
        <About />
      </div>
    </div>
  );
};

export default Menu;
