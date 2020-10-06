import React from 'react';

import Loading from './Loading';

const WithLoading = (Component) => {
  const LoadingComponent = ({ isLoading, props }) => {
    if (!isLoading) return <Component {...props} />;
    return <Loading />;
  };
  return LoadingComponent;
};

export default WithLoading;
