/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import React from 'react';

import { PAGE_RANGES } from '../constants';
import { getTotalPages, nextActivate, prevActivate } from '../utils';
import { TEXTS } from './constants';
import styles from './Pagination.module.scss';

const PaginationComponent = ({ data, params }) => {
  return (
    <>
      {params.totalRows > 0 && (
        <div className={styles.paginationRight}>
          {data.length > 1 && (
            <>
              <div className={styles.label}>{TEXTS.rowsPerPage} </div>
              <div className={styles.select}>
                <select
                  onChange={(e) =>
                    params.setPageSize && params.setPageSize(parseInt(e.target.value, 10))
                  }
                  data-testid="rangeSelectItems"
                  value={params.pageSize}>
                  {PAGE_RANGES.map((item) => (
                    <option value={item} key={`paginate-item-${item}`}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}

          <div className={styles.label}>{`${TEXTS.pageLabel} ${params.pageIndex} ${
            TEXTS.pageOn
          } ${getTotalPages(params.pageSize, params.totalRows)}`}</div>

          <button
            onClick={() => params.prev && params.prev()}
            disabled={!prevActivate(params)}
            data-testid="pagePrevButton">
            {TEXTS.prevButton}
          </button>
          <button
            onClick={() => params.next && params.next()}
            disabled={!nextActivate(params)}
            data-testid="pageNextButton">
            {TEXTS.nextButton}
          </button>
        </div>
      )}
    </>
  );
};

PaginationComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      test: PropTypes.string
    })
  ),
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
  params: {},
  data: []
};

export default PaginationComponent;
