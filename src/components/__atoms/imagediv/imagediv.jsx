import React, { useState, useEffect } from "react";
import "./imagediv.scss";
import flowers from "../../../assets/images/flower.png";

function ImageDiv() {
  return (
    <div>
      <img src={flowers} alt="flowers" />
      <p className="day">currentDate</p>
      <p className="time">currentTime</p>
    </div>
  );
}

export default ImageDiv;
