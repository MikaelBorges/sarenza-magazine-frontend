import { useQuery } from '@apollo/react-hooks';
import React from 'react';

import { Loading } from './commons/Loader';

const Query = ({ children, query, params, processTo }) => {
  const { data, loading, error } = useQuery(query, {
    variables: params
  });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Error:{JSON.stringify(error)}</p>;
  }
  return children(processTo(data));
};

export default Query;
