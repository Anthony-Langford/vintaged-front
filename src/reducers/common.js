export default function common(
  state = {
    isFetching: false,
  },
  action) {
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
  case 'RECEIVE_LOCATION': {
    return {
      ...state,
      lat: action.lat,
      lon: action.lon
    }
  }
  case 'RECEIVE_STORES': {
    return {
      ...state,
      stores: action.stores,
    }
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