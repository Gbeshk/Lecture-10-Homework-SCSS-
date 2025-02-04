import React from "react";
import "./container.scss";
import ImageDiv from "../../__atoms/imagediv/imagediv.jsx";
import Input from "../input/input.jsx";
function Container() {
  return (
    <>
      <div className="container">
        <ImageDiv />
        <Input />
      </div>
    </>
  );
}
export default Container;
