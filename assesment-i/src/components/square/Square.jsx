import { useState } from "react";
import "./_Square.css";

const Square = ({ bgColor }) => {
  const [bgColorSquare, setBgColor] = useState();

  const changeBgColor = () => {
    setBgColor(bgColor);
  };

  return (
    <div
      className={"square"}
      onClick={changeBgColor}
      style={{ backgroundColor: bgColorSquare }}
    ></div>
  );
};

export default Square;
