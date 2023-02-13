/* eslint-disable react/jsx-pascal-case */
import './App.css';
import React from 'react';
import MyFoodContext from './context/MyContext';
import FoodContainer from './components/FoodContainer';

function App() {
  const [foodData, setFoodData] = React.useState([
    {
      name: 'Garri',
      img: 'src',
      recipe: ['step 1', 'step 2', 'step 3', '...step n'],
    },
    {
      name: 'Garri',
      img: 'src',
      recipe: ['step 1', 'step 2', 'step 3', '...step n'],
    },
    {
      name: 'Garri',
      img: 'src',
      recipe: ['step 1', 'step 2', 'step 3', '...step n'],
    },
    {
      name: 'Garri',
      img: 'src',
      recipe: ['step 1', 'step 2', 'step 3', '...step n'],
    },
    {
      name: 'Garri',
      img: 'src',
      recipe: ['step 1', 'step 2', 'step 3', '...step n'],
    },
  ]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MyFoodContext.Provider value={{ foodData, setFoodData }}>
      <div className="App">
        <h1 className="App-header">
          <span className="span1">The</span>
          <span className="span2">Food Recipe App</span>
        </h1>

        <p className="below-are">
          Below are a minor compilation of food recipes
        </p>

        <FoodContainer />
      </div>
    </MyFoodContext.Provider>
  );
}

export default App;
