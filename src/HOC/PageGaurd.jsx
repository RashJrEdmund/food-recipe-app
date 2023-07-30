/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import Loading from '../components/organisms/Loading/Loading';

const PageGaurd = (Component) => {
  return function Gaurd(props) {
    const [loading, setloading] = React.useState(true);

    React.useEffect(() => {
      setloading(false);
    }, []);

    return loading ? <Loading /> : <Component {...props} />;
  };
};

export default PageGaurd;
