const sortActions = {
  setSort: (sortBy, sortDirection, sortList) => ({
    type: 'SET_SORT',
    sortBy,
    sortDirection,
    sortList
  })
};

export default sortActions;