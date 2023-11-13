import React from "react";
import SlideShow from "./SlideShow";
import Img from "../../assets/cutm.jpg";
import "./Content.css";

const Content = () => {
  return (
    <div>
      <SlideShow />
      <div className="line-1"></div>
      <div className="div-2">{/* <img className="image" src={Img} /> */}</div>
    </div>
  );
};

export default Content;
