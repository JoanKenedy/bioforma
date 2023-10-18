import React from "react";
import "../styles/galery.css";
import galery1 from "../assets/galery-17.jpg";
import galery2 from "../assets/galery-18.jpg";
import galery3 from "../assets/galery-19.jpg";
import galery4 from "../assets/galery-20.jpg";
import galery5 from "../assets/galery-21.jpg";
import galery6 from "../assets/galery-22.jpg";
import galery7 from "../assets/galery-23.jpg";
import galery8 from "../assets/galery-25.jpg";

const Galery = () => {
  return (
    <div className="galery">
      <h2>Más de nosotros</h2>
      <div className="container-galery">
        <div className="item-galery">
          <img src={galery1} alt="" />
        </div>
        <div className="item-galery">
          <img src={galery2} alt="" />
        </div>
        <div className="item-galery">
          <img src={galery3} alt="" />
        </div>
        <div className="item-galery">
          <img src={galery4} alt="" />
        </div>
        <div className="item-galery">
          <img src={galery5} alt="" />
        </div>
        <div className="item-galery">
          <img src={galery6} alt="" />
        </div>
        <div className="item-galery">
          <img src={galery7} alt="" />
        </div>
        <div className="item-galery">
          <img src={galery8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Galery;
