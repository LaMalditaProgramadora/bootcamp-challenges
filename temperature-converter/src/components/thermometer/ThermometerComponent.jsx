import Thermometer from "react-thermometer-component";
import "./ThermometerComponent.css";

const ThermometerComponent = ({ result, format, max }) => {
  return (
    <>
      <Thermometer
        className="thermometer"
        theme="light"
        value={result}
        max={max}
        steps="3"
        format={format}
        size="large"
        height="280"
      />
    </>
  );
};

export default ThermometerComponent;
