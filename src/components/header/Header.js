import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header custom-scroll">
      <div className="calculation_history">
        <p>10+2</p>
        <p>12+2*5</p>
        <p>10*50</p>
        <p>10+2</p>
        <p>12+2*5</p>
        <p>10*50</p>
        <p>10+2</p>
        <p>12+2*5</p>
        <p>10*50</p>
        <p>10+2</p>
        <p>12+2*5</p>
        <p>10*50</p>
        <p>10+2</p>
        <p>12+2*5</p>
        <p>10*50</p>
      </div>
      <div className="calculation_expression custom-scroll">
        <p>53227+5</p>
      </div>
      <div className="calculation_result">
        <p>10</p>
      </div>
    </div>
  );
};

export default Header;
