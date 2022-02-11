import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
  name: "screen",
  initialState: {
    screen: 0,
  },
  reducers: {
    setScreen(state, { payload: inputNumber }) {
      state.screen = parseInt(inputNumber);
    },
    add: (state, { payload: numbers }) => {
      state.screen = parseInt(
        parseInt(numbers.lastInputNumber) + parseInt(numbers.inputNumber)
      );
    },
    subtract: (state, { payload: numbers }) => {
      state.screen = parseInt(
        parseInt(numbers.lastInputNumber) - parseInt(numbers.inputNumber)
      );
    },
    multiply: (state, { payload: numbers }) => {
      state.screen = parseInt(
        parseInt(numbers.lastInputNumber) * parseInt(numbers.inputNumber)
      );
    },
    divide: (state, { payload: numbers }) => {
      if (parseInt(numbers.inputNumber) === 0) {
        state.screen = 0;
      } else {
        state.screen = parseInt(
          parseInt(numbers.lastInputNumber) / parseInt(numbers.inputNumber)
        );
      }
    },
  },
});

export const { add, subtract, multiply, divide, setScreen } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
