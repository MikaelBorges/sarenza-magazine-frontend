import { useQuery } from '@apollo/react-hooks';
import React from 'react';

const Query = ({ children, query, id, processTo }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id }
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error:{JSON.stringify(error)}</p>;
  }
  return children(processTo(data));
};

export default Query;
