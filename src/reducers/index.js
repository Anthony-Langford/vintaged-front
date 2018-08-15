import { combineReducers } from 'redux'
import common from './common'
import ui from './ui'
import sort from './sort'

// move lat lon to geolocation

const rootReducer = combineReducers({
  common,
  ui,
  sort
})

export default rootReducer
