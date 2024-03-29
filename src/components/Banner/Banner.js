import React from "react";
import "./Banner.css";
const Banner = ({ title, subTitle, children }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subTitle}</p>
      {children}
    </div>
  );
};

export default Banner;
