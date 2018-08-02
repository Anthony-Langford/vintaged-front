const sortActions = {
  setSort: (sortBy, sortDirection) => ({
    type: 'SET_SORT',
    sortBy,
    sortDirection
  })
};

export default sortActions;