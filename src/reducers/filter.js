export default function filter(
  state = {
    filters: {}
  },
  action) {
  switch (action.type) {
  case 'SET_FILTER' : {
    return {
      ...state,
      filters: {
        [action.key]: action.filter
      },
    };
  }
  default : {
    return state;
  }
  }
}