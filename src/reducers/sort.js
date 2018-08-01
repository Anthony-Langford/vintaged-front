export default function sort(
  state = {
    sortKey: {
      sortBy: '',
      sortDirection: '',
    },
  },
  action) {
  switch (action.type) {
  case 'SET_SORT' : {
    return {
      ...state,
      sortKey: {
        sortBy: action.sortBY,
        sortDirection: action.sortDirection,
      },
    };
  }
  default : {
    return state;
  }
  }
}