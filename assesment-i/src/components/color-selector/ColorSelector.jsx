import "./_ColorSelector.css";

const ColorSelector = ({ changeBgColor }) => {
  const changeBorder = (className) => {
    let colorBoxs = document.querySelectorAll(".colorBox");
    let colorBox = document.querySelector("." + className.toString());
    colorBoxs.forEach((element) => {
      element.classList.remove("blow");
    });
    colorBox.classList.add("blow");
  };

  return (
    <div className="color__selector">
      <div
        className="colorBox colorBox--red blow"
        onClick={() => {
          changeBgColor("rgb(217, 2, 0)");
          changeBorder("colorBox--red");
        }}
      ></div>
      <div
        className="colorBox colorBox--olive"
        onClick={() => {
          changeBgColor("rgb(113, 106, 2)");
          changeBorder("colorBox--olive");
        }}
      ></div>
      <div
        className="colorBox colorBox--orange"
        onClick={() => {
          changeBgColor("rgb(249, 171, 0)");
          changeBorder("colorBox--orange");
        }}
      ></div>
       <div
        className="colorBox colorBox--white"
        onClick={() => {
          changeBgColor("white");
          changeBorder("colorBox--white");
        }}
      ></div>
    </div>
  );
};

export default ColorSelector;
