// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function common(state = {
  isFetching: false,
}, action) {
  switch (action.type) {
  case 'REQUEST_WINES' : {
    return {
      ...state,
      isFetching: true,
    };
  }
  case 'RECEIVE_WINES' : {
    return {
      ...state,
      isFetching: false,
      wines: action.wines,
      lastUpdated: action.receivedAt,
    };
  }
  case 'RECEIVE_WINE' : {    
    return {
      ...state,
      isFetching: false,
      [action.wine.id]: action.wine,
      lastUpdated: action.receivedAt,
    };
  }
  case 'CLEAR_STORE': {
    return {
      isFetching: false,
    };
  }
  default : {
    return state;
  }
  }
}

export default common;