import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// link
import LandingPage from "./body/LandingPage";
import Merchandise from "./body/menu/Merchandise";
import About from "./body/about/About";
import Navigation from "./navigation/Navigation";
import MenuList from "./menu/menuList";
import Cart from "./cart/Cart";
import "./App.css";

const App = () => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <BrowserRouter>
      {showCart && <Cart />}

      <Navigation />
      <Routes>
        <Route>
          <Route path="/" element={<LandingPage />} />
          <Route path="/menu/menuList" element={<MenuList />} />
          <Route path="/menu/merchandise" element={<Merchandise />} />
          <Route path="/menu/about" element={<About />} />
          <Route path="*" element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
