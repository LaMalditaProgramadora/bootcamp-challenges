import { useEffect, useState } from "react";
import NumberKey from "../components/NumberKey";
import OperatorKey from "../components/OperatorKey";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  add,
  subtract,
  multiply,
  divide,
  setScreen,
} from "../redux/features/calculatorSlice";

const Calculator = () => {
  const maxLenght = 8;
  const screen = useSelector((state) => state.screen.screen);

  const dispatch = useDispatch();

  const [lastButton, setLastButton] = useState("inputNumber");

  const [lastInputNumber, setLastInputNumber] = useState("0");
  const [inputOperator, setInputOperator] = useState("=");
  const [lastInputOperator, setLastInputOperator] = useState("=");

  const numberKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operatorKeys = ["+", "-", "*", "/", "="];

  const setNewInput = (newInputNumber) => {
    if ((screen.toString()).length < 6) {
      dispatch(setScreen(parseInt(screen.toString() + newInputNumber)));
    }
  };

  useEffect(() => {
    validateCalculator();
  }, [lastButton, lastInputNumber, inputOperator, lastInputOperator]);

  const validateCalculator = () => {
    if (lastButton === "inputOperator") {
      switch (lastInputOperator) {
        case "+":
          dispatch(
            add({ inputNumber: screen, lastInputNumber: lastInputNumber })
          );
          break;
        case "-":
          dispatch(
            subtract({
              inputNumber: screen,
              lastInputNumber: lastInputNumber,
            })
          );
          break;
        case "*":
          dispatch(
            multiply({
              inputNumber: screen,
              lastInputNumber: lastInputNumber,
            })
          );
          break;
        case "/":
          dispatch(
            divide({
              inputNumber: screen,
              lastInputNumber: lastInputNumber,
            })
          );
          break;
        default:
          break;
      }
    }
  };

  const handleClickNumberKey = (newInputNumber) => {
    if (lastButton === "inputNumber") {
      setNewInput(newInputNumber);
    } else {
      setLastInputNumber(screen);
      dispatch(setScreen(parseInt(newInputNumber)));
    }
    setLastButton("inputNumber");
  };

  const handleClickOperatorKey = (newInputOperator) => {
    setLastInputOperator(inputOperator);
    setInputOperator(newInputOperator);
    setLastButton("inputOperator");
  };

  return (
    <>
      <h4 className="title">La Maldita Calculadora</h4>
      <div className="screen">
        <Form.Control
          className="input"
          value={screen}
          readOnly
          disabled
          maxLength={maxLenght}
        ></Form.Control>
      </div>
      <br></br>
      {numberKeys.map((numberKey) => {
        return (
          <NumberKey
            key={numberKey}
            numberKey={numberKey}
            handleClickNumberKey={handleClickNumberKey}
          ></NumberKey>
        );
      })}
      <br></br>
      <br></br>
      {operatorKeys.map((operatorKey) => {
        return (
          <OperatorKey
            key={operatorKey}
            operatorKey={operatorKey}
            handleClickOperatorKey={handleClickOperatorKey}
          ></OperatorKey>
        );
      })}
      <br></br>
      <br></br>
    </>
  );
};

export default Calculator;
