import React from 'react';

import { LinkButton } from '@/components/commons/Links';

import styles from './CategoryLinks.module.scss';

const CategoryLinks = ({ categories }) => {
  return categories.map((label) => (
    <LinkButton onClick={() => {}} extraClasses={[styles.categoryLinks]} key={label}>
      {label}
    </LinkButton>
  ));
};

export default CategoryLinks;
