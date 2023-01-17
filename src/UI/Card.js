import React from "react";
import Classes from "./Card.module.css";
const card = (props) => {
  return <div className={Classes.cardWrapper}>{props.children}</div>;
};

export default card;
