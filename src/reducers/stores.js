export default function stores(
  state = {
    isFetching: false,
  },
  action) {
  switch (action.type) {
  case 'RECEIVE_STORE': {
    return {
      ...state,
      nearest: {
        id: action.store.id,
        name: action.store.name,
        lastUpdated: action.receivedAt,
      },
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