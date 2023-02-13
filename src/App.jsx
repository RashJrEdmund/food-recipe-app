import './App.css';
import FoodContainer from './components/FoodContainer';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">
        <span className="span1">The</span>
        <span className="span2">Food Recipe App</span>
      </h1>

      <p className="below-are">Below are a minor compilation of food recipes</p>

      <FoodContainer />
    </div>
  );
}

export default App;
