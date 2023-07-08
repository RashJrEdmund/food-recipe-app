/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { useParams } from 'react-router-dom';
import { getFromLocalStorage } from '../services/utils';
import { DEFINED_ROUTES } from '../services/constants';

const PageGaurd = (Component) => {
  return function Gaurd(props) {
    const [pathName, setPathName] = React.useState(window.location.pathname);
    const [validRoute, setValidRoute] = React.useState(true);
    const params = useParams();

    React.useEffect(() => {
      const pathArr = pathName.split('/');

      const currentFood = getFromLocalStorage('foodData').find(
        (meal) => meal.name === params.name
      );

      pathArr.forEach((route) => {
        if (!DEFINED_ROUTES.includes(route) && !currentFood) {
          setValidRoute(false);
        }
      });

      console.clear();
      console.log({ pathArr, pathName });
    }, [pathName]);

    return validRoute ? (
      <Component {...props} setPathName={setPathName} />
    ) : (
      <p>404 page</p>
    );
  };
};

export default PageGaurd;
