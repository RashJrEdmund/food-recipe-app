/* eslint-disable react/jsx-pascal-case */
import './App.css';
import React from 'react';
import MyFoodContext from './context/MyContext';
import FoodContainer from './components/FoodContainer';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodData, setFoodData] = React.useState([
    {
      name: 'Garri',
      img: 'src',
      recipe: [
        `pour required quantity in clean pan, taking note that "it's rising bad"`,
        `add enough water (enough to completely conver the golden poder)`,
        `pour out some of the hovering water to remove unnecessary particles`,
        `add sugar: add to your tates`,
        `garri also goes well with groundnut and or milk`,
      ],
      showRecipe: false,
      fav: false,
      id: 0,
    },
    {
      name: 'Khahti Khahti',
      img: 'src',
      recipe: [
        `kill and skin a fowl (cocks make more sense)`,
        `clean the innerParts and chop in different sizes`,
        `roast over enough heat (not neccessarily blazing fire)`,
        'while roasting, sieze and prepare corn fufu',
        `prepare sauce (enough of it): add maggi and salt to clean dry red oil and mix till finnesse`,
        `add the already roasted sliced bird to the ready sauce and mix`,
        `dish your self a hefty load of kiban accompanied with the bird and sauce`,
        `God did! enjoy! 😹`,
      ],
      showRecipe: false,
      fav: false,
      id: 1,
    },
    {
      name: 'Ndole',
      img: 'src',
      recipe: [`boil bitter leaf`, `i dont yet know the wosup 😹`],
      showRecipe: false,
      fav: false,
      id: 2,
    },
    {
      name: 'water Fufu & Erru',
      img: 'src',
      recipe: [`cook water fufu`, `i dont still know the wosup 😹`],
      showRecipe: false,
      fav: false,
      id: 3,
    },
    {
      name: 'Koki',
      img: 'src',
      recipe: [
        `harvest and warm (to clean and make ready) plantain leaves`,
        `these things can be hard erh 😹`,
      ],
      showRecipe: false,
      fav: false,
      id: 4,
    },
  ]);

  const [addFood, setAddFood] = React.useState(true);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MyFoodContext.Provider value={{ foodData, setFoodData, setAddFood }}>
      {addFood && <AddFoodForm />}

      <div className="App" id="App">
        <h1 className="App-header">
          <span className="span1">The</span>
          <span className="span2">Food Recipe App</span>
        </h1>

        <button
          className="add-food-btn"
          type="button"
          onClick={() => setAddFood((prev) => !prev)}
        >
          + AddFood
        </button>

        <p className="below-are">
          Below are a minor compilation of food recipes
        </p>

        <FoodContainer />

        <div className="app-buttons">
          <button className="left-right-btns" type="button">
            &#60;
          </button>

          {foodData.map((piece) => (
            <button className="page-number-button" type="button" key={piece.id}>
              {piece.id + 1}
            </button>
          ))}

          <button className="left-right-btns" type="button">
            &#62;
          </button>
        </div>
      </div>
    </MyFoodContext.Provider>
  );
}

export default App;
