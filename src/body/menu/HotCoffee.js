import React from "react";
import Classes from "./Menu.module.css";

import hotImage1 from "../../image/menu/Hot-Coffee/hot1.jpg";
import hotImage2 from "../../image/menu/Hot-Coffee/hot2.jpg";
import hotImage3 from "../../image/menu/Hot-Coffee/hot3.gif";
import hotImage4 from "../../image/menu/Hot-Coffee/hot4.jpg";
import hotImage5 from "../../image/menu/Hot-Coffee/hot5.jpg";
import Background from "../../image/menu/Hot-Coffee/backgroundImage.jpg";
const HotCoffee = () => {
  // image
  const hotCoffee = [hotImage1, hotImage2, hotImage3, hotImage4, hotImage5];

  const hotCoffeeImage = hotCoffee.map((hot, index) => {
    const image = (
      <div>
        <img alt={index} src={hot} id={Classes.imageID} />
      </div>
    );
    const imageReflection = (
      <div>
        <img alt={index} src={hot} id={Classes.imageReflection} />
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
          Experience our coffee at its best - fresh, aromatic, and full of
          flavor
        </span>
      </div>
      <div>
        <div className={Classes.menuImg}>{hotCoffeeImage}</div>
      </div>
    </div>
  );
};

export default HotCoffee;
