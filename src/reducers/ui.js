export default function ui(
  state = {
    navState: false,
    expandedCards: []
  },
  action) {
  switch (action.type) {
  case 'TOGGLE_NAV' : {
    return {
      ...state,
      navState: action.toggleNav
    };
  }
  case 'UPDATE_EXPANDED_CARDS': {
    return {
      ...state,
      expandedCards: action.expandedCards,
    }
  }
  default: {
    return state;
  }
  }
}