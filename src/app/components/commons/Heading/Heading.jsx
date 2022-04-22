import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Heading.module.scss';

const Heading = ({ children, headingLevel, sectionTitle, noMargin }) => {
  const validHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

  const safeHeading = headingLevel ? headingLevel.toLowerCase() : '';
  const Head = validHeadingLevels.includes(safeHeading) ? safeHeading : 'p';

  return (
    <Head
      className={classnames(styles[`heading${headingLevel[1]}`], {
        [styles.sectionTitle]: sectionTitle,
        [styles.noMargin]: noMargin
      })}>
      {children}
    </Head>
  );
};

Heading.propTypes = {
  children: PropTypes.node,
  headingLevel: PropTypes.string,
  sectionTitle: PropTypes.bool,
  noMargin: PropTypes.bool
};

Heading.defaultProps = {
  children: '',
  headingLevel: 'h1',
  sectionTitle: false,
  noMargin: false
};

export default Heading;
