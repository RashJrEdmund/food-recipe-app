/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { LOCALSTORAGE } from '../services/storage';
import { DEFINED_ROUTES } from '../services/constants';
import NotFound from '../components/molecules/NotFound/NotFound';
import Loading from '../components/molecules/Loading/Loading';

const PageGaurd = (Component) => {
  return function Gaurd(props) {
    const [loading, setloading] = React.useState(true);
    const [pathName, setPathName] = React.useState(window.location.pathname);
    const [validRoute, setValidRoute] = React.useState(true);

    React.useEffect(() => {
      const routes = pathName.split('/');
      let currentFood = null;

      if (routes.includes('details')) {
        const param = routes.pop().replace(/%20/g, ' ').trim();

        if (param) {
          currentFood = LOCALSTORAGE.get('foodData').find(
            (meal) => meal.name === param
          );

          if (!currentFood) setValidRoute(false);
        }
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
      <Component {...props} setPathName={setPathName} />
    ) : (
      <NotFound />
    );
  };
};

export default PageGaurd;
