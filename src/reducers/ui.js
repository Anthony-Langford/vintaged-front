export default function ui(
  state = {
    navState: false,
  },
  action) {
  switch (action.type) {
  case 'TOGGLE_NAV' : {
    return {
      ...state,
      navState: action.toggleNav
    };
  }
  default : {
    return state;
  }
  }
}