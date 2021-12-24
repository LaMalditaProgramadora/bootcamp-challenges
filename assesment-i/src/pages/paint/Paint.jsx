import { useState } from "react";
import ColorSelector from "../../components/color-selector/ColorSelector";
import Square from "../../components/square/Square";
import "./_Paint.css";

const Paint = () => {
  const [bgColor, setBgColor] = useState("rgb(217, 2, 0)");

  const changeBgColor = (color) => {
    setBgColor(color);
  };

  return (
    <div>
      <div className="grid">
        <div className="columns">
          {Array.from({ length: 16 }).map((_, indexColumn) => (
            <div className="rows" key={indexColumn}>
              {Array.from({ length: 16 }).map((_, indexRow) => (
                <Square bgColor={bgColor} type="square" key={indexRow} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <ColorSelector changeBgColor={changeBgColor} />
    </div>
  );
};

export default Paint;
