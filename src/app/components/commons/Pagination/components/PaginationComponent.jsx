/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import React from 'react';

import { LinkButton } from '../../Links';
import { displayPage, getTotalPages, nextActivate, prevActivate } from '../utils';
import { TEXTS } from './constants';
import PageButton from './PageButton/PageButton';
import styles from './Pagination.module.scss';

const PaginationComponent = ({ params }) => {
  const total = getTotalPages(params.pageSize, params.totalRows);
  const paginationPages = displayPage(5, params.pageIndex, total);

  return (
    <>
      {total > 1 && (
        <div className={styles.paginationRight}>
          <div className={styles.label}>
            <LinkButton
              onClick={() => params.prev && params.prev()}
              disabled={!prevActivate(params)}
              data-testid="pagePrevButton">
              {TEXTS.prevButton}
            </LinkButton>
            {paginationPages.map((page) => (
              <PageButton
                page={page}
                params={params}
                isActive={page === params.pageIndex}
                key={page}
              />
            ))}
          </div>

          <LinkButton
            onClick={() => params.next && params.next()}
            disabled={!nextActivate(params)}
            data-testid="pageNextButton">
            {TEXTS.nextButton}
          </LinkButton>
        </div>
      )}
    </>
  );
};

PaginationComponent.propTypes = {
  params: PropTypes.shape({
    totalRows: PropTypes.number,
    setPageSize: PropTypes.func,
    prev: PropTypes.func,
    pageSize: PropTypes.number,
    pageIndex: PropTypes.number,
    next: PropTypes.func
  })
};

PaginationComponent.defaultProps = {
  params: {}
};

export default PaginationComponent;
