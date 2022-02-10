import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from "./features/calculatorSlice";

export default configureStore({
  reducer: {
    screen: calculatorReducer,
  },
});
