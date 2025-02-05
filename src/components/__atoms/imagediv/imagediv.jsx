import React, { useState, useEffect } from "react";
import "./imagediv.scss";
import flowers from "../../../assets/images/flower.png";

function ImageDiv() {
  const [dro, setDro] = useState("");
  const [dro1, setDro1] = useState("");
  function GetTime() {
    let date = new Date();
    setDro(
      date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    );

    let dro1day = date.toLocaleString("en-US", { weekday: "short" });
    let dro1month = date.getDate();
    setDro1(dro1day + " " + dro1month);
  }
  useEffect(() => {
    GetTime();
    const setinterval = setInterval(GetTime, 1000);
  });
  return (
    <div>
      <img src={flowers} alt="flowers" />
      <p className="day">{dro1}</p>
      <p className="time">{dro}</p>
    </div>
  );
}

export default ImageDiv;
