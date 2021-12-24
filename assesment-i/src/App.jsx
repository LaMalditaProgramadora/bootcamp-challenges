import './_App.css';
import Paint from './pages/paint/Paint';

const App = () => {
  return (
      <div className="app">
        <div className="app__content">
          <Paint></Paint>
        </div>
      </div>
  );
};

export default App;
