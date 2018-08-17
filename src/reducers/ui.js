export default function ui(
  state = {
    navOpen: false,
  },
  action
) {
  switch (action.type) {
  case 'TOGGLE_NAV':
    return {
      ...state,
      navOpen: action.toggleNav
    }

  default:
    return state
  }
}