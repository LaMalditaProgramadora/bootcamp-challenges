import "./App.css";
import Calculator from "./pages/Calculator";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="calculator">
          <Calculator></Calculator>
        </div>
      </div>
    </Provider>
  );
};

export default App;
