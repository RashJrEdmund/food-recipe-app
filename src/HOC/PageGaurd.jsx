/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { LOCALSTORAGE } from '../services/storage';
import { DEFINED_ROUTES } from '../services/constants';
import NotFound from '../components/molecules/NotFound/NotFound';
import Loading from '../components/molecules/Loading/Loading';

const PageGaurd = (Component) => {
  return function Gaurd(props) {
    const [pathName, setPathName] = React.useState(
      window.location.pathname.split('/').pop()
    );

    const [loading, setloading] = React.useState(true);
    const [validRoute, setValidRoute] = React.useState(true);

    const checkParam = (foodName) => {
      if (foodName) {
        const currentFood = LOCALSTORAGE.get('foodData').find(
          (meal) => meal.name === foodName
        );

        if (currentFood) return true;
      }

      return false;
    };

    React.useEffect(() => {
      const routes = pathName.split('/');
      let currentFood = false;

      if (
        routes.includes('details') &&
        !routes.includes('edit') &&
        !routes.includes('delete')
      ) {
        // if details is the last guy in the array
        const foodName = routes.pop().replace(/%20/g, ' ').trim();
        currentFood = checkParam(foodName);
      } else if (
        routes.includes('details') &&
        (routes.includes('edit') || routes.includes('delete'))
      ) {
        // if edit is the last guy in the array
        const foodName = routes.slice(0, -1).pop().replace(/%20/g, ' ').trim();
        currentFood = checkParam(foodName);
      }

      routes.forEach((route) => {
        if (!DEFINED_ROUTES.includes(route) && !currentFood) {
          setValidRoute(false);
        }
      });

      setloading(false);
    }, [pathName]);

    if (loading) return <Loading />;

    return validRoute ? (
      <Component {...props} setPathName={setPathName} pathName={pathName} />
    ) : (
      <NotFound />
    );
  };
};

export default PageGaurd;
