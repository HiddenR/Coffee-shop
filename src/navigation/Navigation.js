import React from "react";
import { Link } from "react-router-dom";
import Classes from "./Navigation.module.css";
const Navigation = () => {
  const navigationLink = [
    {
      title: "MENU",
      path: "/menu/menuList",
    },
    {
      title: "ABOUT",
      path: "/",
    },
    {
      title: "MERCHANDISE",
      path: "/",
    },
  ];
  const navigationLinkMapped = navigationLink.map((link, index) => {
    return (
      <Link key={index} className={Classes.link} to={link.path}>
        {link.title}
      </Link>
    );
  });
  return (
    <div className={Classes.NavigationClass}>
      <Link to="/body/LandingPage">
        <img
          src={require("../image/logo.jpg")}
          className={Classes.imgLink}
          alt="logo"
        />
      </Link>
      {navigationLinkMapped}
      <Link to="">
        <img
          src={require("../image/cart.png")}
          className={Classes.imgCart}
          alt="Cart"
        />
      </Link>
    </div>
  );
};

export default Navigation;
