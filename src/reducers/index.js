import { combineReducers } from 'redux'
import common from './common'
import ui from './ui'

const rootReducer = combineReducers({
  common,
  ui
})

export default rootReducer
