export default function filters(
  state = {
    secondary_category: []
  },
  action
) {
  switch (action.type) {
  case 'SET_FILTER':
    return {
      ...state,
      [action.key]: action.filter
    }

  default:
    return state
  }
}