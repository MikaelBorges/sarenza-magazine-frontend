import React from 'react';
import { connect } from 'react-redux';

import wrapper from '../app/store';

export const getServerSideProps = wrapper.getServerSideProps(({ store }) => {
  store.dispatch({ type: 'TICK', payload: 'Dispatch coté serveur' });
});

const Page = ({ tick }) => <div>{tick}</div>;

export default connect((state) => state)(Page);
