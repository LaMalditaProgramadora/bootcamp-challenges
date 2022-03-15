import { AppRouter } from "./router";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
