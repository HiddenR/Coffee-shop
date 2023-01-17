import React from "react";
import Classes from "./Menu.module.css";

// image
import Cakes1 from "../../image/menu/cakes/cakes1.png";
import Cakes2 from "../../image/menu/cakes/cakes2.png";
import Cakes3 from "../../image/menu/cakes/cakes3.png";
import Cakes4 from "../../image/menu/cakes/cakes4.png";
import Cakes5 from "../../image/menu/cakes/cakes5.png";
import Background from "../../image/menu/cakes/backgroundCakes.png";
const Cakes = () => {
  const cakes = [Cakes1, Cakes2, Cakes3, Cakes4, Cakes5];

  const cakesDisplay = cakes.map((cakes, index) => {
    const image = (
      <div>
        <img alt={index} src={cakes} id={Classes.imageID} />
      </div>
    );
    const imageReflection = (
      <div>
        <img alt={index} src={cakes} id={Classes.imageReflection} />
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

export default Cakes;
