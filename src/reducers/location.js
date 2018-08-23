export default function location(state = {
  isFetching: false,
}, action) {
  switch (action.type) {
  case 'RECEIVE_LOCATION':
    return {
      ...state,
      lat: action.lat,
      lon: action.lon
    }

  case 'RECEIVE_STORE':
    return {
      ...state,
      nearestStore: {
        id: action.store.id,
        name: action.store.name,
        vintages: action.store.available_vintages,
        lastUpdated: action.receivedAt,
      },
    }

  case 'CLEAR_STORE':
    return {};
    
  default:
    return state;
  }
}