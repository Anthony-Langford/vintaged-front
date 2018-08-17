import { createStore, applyMiddleware, compose } from 'redux'
// https://medium.com/@gethylgeorge/understanding-how-redux-thunk-works-72de3bdebc50
// https://cdn-images-1.medium.com/max/1600/1*eByw4NguNH8nK0MA_Q5Fow.png
import thunkMiddleware from 'redux-thunk'

// Import the root reducer
import rootReducer from './reducers'

// Create an object for the default state
const initialState = {
  products: {
    wines: []
  }
}

// Customize middleware depending on environment
const environmentMiddleware = 
  applyMiddleware(
    thunkMiddleware
  )

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(environmentMiddleware)
)

export default store
