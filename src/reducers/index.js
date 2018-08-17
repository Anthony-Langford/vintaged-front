import { combineReducers } from 'redux'
import products from './products'
import ui from './ui'
import sort from './sort'
import location from './location'
import stores from './stores'
import filters from './filters'

const rootReducer = combineReducers({
  products,
  ui,
  sort,
  location,
  stores,
  filters
})

export default rootReducer
