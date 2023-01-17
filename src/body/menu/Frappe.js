import React from "react";
import Classes from "./Menu.module.css";

// image
import frappe1 from "../../image/menu/frappe/frappe1.png";
import frappe2 from "../../image/menu/frappe/frappe2.png";
import frappe3 from "../../image/menu/frappe/frappe3.png";
import frappe4 from "../../image/menu/frappe/frappe4.png";
import frappe5 from "../../image/menu/frappe/frappe5.png";
import Background from "../../image/menu/frappe/backgroundFrappe.png";
const Frappe = () => {
  const cakes = [frappe1, frappe2, frappe3, frappe4, frappe5];
  const cakesDisplay = cakes.map((frappe, index) => {
    const image = (
      <div>
        <img alt={index} src={frappe} id={Classes.imageID} />
      </div>
    );
    const imageReflection = (
      <div>
        <img alt={index} src={frappe} id={Classes.imageReflection} />
      </div>
    );
    return (
      <div key={index}>
        {image}
        {imageReflection}
      </div>
    );
  });
  return (
    <div className={Classes.menuWrapper}>
      <div
        className={Classes.background}
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
      <div id={Classes.spanDiv}>
        <span id={Classes.spanId}>
          Experience the indulgence of our freshly baked cakes - perfect
          complement to your daily coffee routine.
        </span>
      </div>
      <div>
        <div className={Classes.menuImg}>{cakesDisplay}</div>
      </div>
    </div>
  );
};

export default Frappe;
