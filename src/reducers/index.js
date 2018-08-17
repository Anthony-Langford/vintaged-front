import { combineReducers } from 'redux'
import products from './products'
import ui from './ui'
import sort from './sort'
import location from './location'
import stores from './stores'

const rootReducer = combineReducers({
  products,
  ui,
  sort,
  location,
  stores
})

export default rootReducer
