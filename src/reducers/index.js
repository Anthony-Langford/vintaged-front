import { combineReducers } from 'redux'
import common from './common'
import ui from './ui'
import sort from './sort'

const rootReducer = combineReducers({
  common,
  ui,
  sort
})

export default rootReducer
