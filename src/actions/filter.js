const filterActions = {
  setFilter: (key, filter) => ({
    type: 'SET_FILTER',
    key,
    filter
  }),

  clearStore: () => ({
    type: 'CLEAR_STORE',
  })
}

export default filterActions