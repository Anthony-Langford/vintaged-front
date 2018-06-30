export default function ui(
  state = {
    openNav: false
  },
  action) {
  switch (action.type) {
  case 'TOGGLE_NAV' : {
    return {
      ...state,
      openNav: action.toggleNav
    };
  }
  default : {
    return state;
  }
  }
}