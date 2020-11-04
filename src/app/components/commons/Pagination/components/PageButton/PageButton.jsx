import PropTypes from 'prop-types';
import React, { useCallback } from 'react';

import LinkButton from '../../../Links/LinkButton/LinkButton';

const PageButton = ({ page, isActive, params }) => {
  const goPage = useCallback(() => {
    params.goToPage(page);
  }, [page]);

  return (
    <LinkButton onClick={goPage} key={page} disabled={isActive}>
      {page}
    </LinkButton>
  );
};

PageButton.propTypes = {
  page: PropTypes.number,
  isActive: PropTypes.bool,
  params: PropTypes.shape({
    totalRows: PropTypes.number,
    setPageSize: PropTypes.func,
    prev: PropTypes.func,
    pageSize: PropTypes.number,
    pageIndex: PropTypes.number,
    next: PropTypes.func
  })
};

PageButton.defaultProps = {
  params: {},
  page: 1,
  isActive: false
};
export default React.memo(PageButton);
