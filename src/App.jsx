/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/jsx-pascal-case */
import './styles/App.css';
import React from 'react';
import MyFoodContext from './context/MyContext';
import FoodContainer from './components/FoodContainer';
import AddFoodForm from './components/AddFoodForm';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  const [foodData, setFoodData] = React.useState([
    {
      name: 'Garri',
      img: 'https://i0.wp.com/humblevege.com/wp-content/uploads/2022/02/gari-soaking-garri-snack_humblevege.jpg?fit=1536%2C2048&ssl=1',
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
      img: 'https://africanbites.com/wp-content/uploads/2014/08/IMG_4973.jpg',
      recipe: [
        `kill and skin a fowl (cocks make more sense)`,
        `clean the innerParts and chop in different sieves`,
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
      img: 'https://i.pinimg.com/originals/6d/e7/9c/6de79cb3e00b1eba9e36b945f8fc91b1.jpg',
      recipe: [`boil bitter leaf`, `i dont yet know the wosup 😹`],
      showRecipe: false,
      fav: false,
      id: 2,
    },
    {
      name: 'water Fufu & Erru',
      img: 'https://www.africanbites.com/wp-content/uploads/2022/02/Cassava-Fufu.jpg',
      recipe: [
        `cook water fufu`,
        'do some other things laat',
        'do another thing',
      ],
      showRecipe: false,
      fav: false,
      id: 3,
    },
    {
      name: 'Koki',
      img: 'https://sawagrill.com/wp-content/uploads/2022/06/rdd-07-scaled.webp',
      recipe: [
        `harvest and warm (to clean and make ready) plantain leaves`,
        `do something`,
        'do another thing',
        'take on something',
      ],
      showRecipe: false,
      fav: false,
      id: 4,
    },
  ]);

  const [showFoodForm, setShowFoodForm] = React.useState(false);
  const [showUpdateFrom, setShowUpdateForm] = React.useState(false);
  const [pickedFoodToUpdate, setPickFoodToUpdate] = React.useState({});

  return (
    <MyFoodContext.Provider
      value={{
        foodData,
        setFoodData,

        setShowFoodForm,

        showUpdateFrom,
        setShowUpdateForm,

        pickedFoodToUpdate,
        setPickFoodToUpdate,
      }}
    >
      <Hero />

      {showFoodForm && <AddFoodForm />}

      <div className="App" id="App">
        <button
          className="add-food-btn"
          type="button"
          onClick={() => setShowFoodForm((prev) => !prev)}
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
      <Footer />
    </MyFoodContext.Provider>
  );
}

export default App;
