import { paginate } from './utils';

const usePagination = (options, data, actionFn, prevNextFn) => {
  if (Array.isArray(data)) {
    return [
      paginate(data, options),
      {
        ...options,
        next: prevNextFn && prevNextFn.next,
        prev: prevNextFn && prevNextFn.prev,
        totalRows: data.length,
        setPageSize: prevNextFn && prevNextFn.setPageSize,
        goToPage: prevNextFn && prevNextFn.goToPage
      }
    ];
  }

  if (actionFn) {
    actionFn(options);
  }

  return [[], options];
};

export default usePagination;
