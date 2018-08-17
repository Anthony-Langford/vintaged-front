export default function location(state = {}, action) {
  switch (action.type) {
  case 'RECEIVE_LOCATION':
    return {
      ...state,
      lat: action.lat,
      lon: action.lon
    }

  case 'CLEAR_STORE':
    return {};
    
  default:
    return state;
  }
}