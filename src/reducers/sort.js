export default function sort(
  state = {
    sortBy: 'heat',
    sortDirection: 'descending',
    sortList: [
      {
        id: 0,
        title: 'Heat',
        value: 'heat',
        sortDirection: 'descending'
      },
      {
        id: 1,
        title: 'Price',
        value: 'price_in_cents',
        sortDirection: 'ascending'
      }
    ],
  },
  action
) {
  switch (action.type) {
  case 'SET_SORT' : {
    return {
      ...state,
      sortBy: action.sortBy,
      sortDirection: action.sortDirection,
      sortList: action.sortList
    };
  }
  case 'SET_SORT_LIST' : {
    return {
      ...state,
      sortList: action.sortList
    };
  }
  default : {
    return state;
  }
  }
}