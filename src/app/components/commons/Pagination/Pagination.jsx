import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import usePagination from './usePagination';
import { nextActivate, prevActivate } from './utils';

const Pagination = ({ data, actionFn, renderContent, renderHeader, renderFooter }) => {
  const [options, setParams] = useState({
    pageIndex: 1,
    pageSize: 15,
    totalRows: 0
  });

  const [result, params] = usePagination(options, data, actionFn, {
    next: () => {
      setParams({
        ...options,
        pageIndex: nextActivate(options) ? options.pageIndex + 1 : options.pageIndex
      });
    },
    prev: () => {
      setParams({
        ...options,
        pageIndex: prevActivate(options) ? options.pageIndex - 1 : options.pageIndex
      });
    },
    setPageSize: (pageSize) => {
      setParams({
        ...options,
        pageSize
      });
    }
  });

  const dataCast = result;
  const paramsCast = params;
  useEffect(() => {
    setParams({
      ...paramsCast,
      totalRows: paramsCast.totalRows
    });
  }, [dataCast?.length]);

  return (
    <>
      {renderHeader && renderHeader(dataCast, paramsCast)}
      {renderContent && renderContent(dataCast, paramsCast)}
      {renderFooter && renderFooter(dataCast, paramsCast)}
    </>
  );
};

export default Pagination;

Pagination.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
  actionFn: PropTypes.func,
  renderContent: PropTypes.func,
  renderHeader: PropTypes.func,
  renderFooter: PropTypes.func
};

Pagination.defaultProps = {
  data: {},
  actionFn: () => {},
  renderContent: () => {},
  renderHeader: () => {},
  renderFooter: () => {}
};
