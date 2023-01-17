import React from "react";
import Classes from "./Menu.module.css";

// image
import merch1 from "../../image/menu/merch/merch1.png";
import merch2 from "../../image/menu/merch/merch2.png";
import merch3 from "../../image/menu/merch/merch3.png";
import merch4 from "../../image/menu/merch/merch4.png";
import merch5 from "../../image/menu/merch/merch5.png";
import Background from "../../image/menu/merch/backgroundMerch.png";
const Merchandise = () => {
  const merch = [merch1, merch2, merch3, merch4, merch5];
  const merchDisplay = merch.map((merch, index) => {
    const image = (
      <div>
        <img alt={index} src={merch} id={Classes.imageID} />
      </div>
    );
    const imageReflection = (
      <div>
        <img alt={index} src={merch} id={Classes.imageReflection} />
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
        <div className={Classes.menuImg}>{merchDisplay}</div>
      </div>
    </div>
  );
};

export default Merchandise;
