import { createStore, applyMiddleware, compose } from 'redux';
// https://medium.com/@gethylgeorge/understanding-how-redux-thunk-works-72de3bdebc50
// Infographic on redux thunk https://cdn-images-1.medium.com/max/1600/1*eByw4NguNH8nK0MA_Q5Fow.png
import thunkMiddleware from 'redux-thunk';
// import { routerMiddleware } from 'react-router-redux';
// import { createBrowserHistory } from 'history';

// Import the root reducer
import rootReducer from './reducers/index';

// Create an object for the default state
const initialState = {
  common: {
    wines: []
  }
}

// TODO: after react router is implemented
// Create a browser history
// export const history = createBrowserHistory();

// Build the middleware for intercepting and dispatching navigation actions
// const middleware = routerMiddleware(history);

// Customize middleware depending on environment
const environmentMiddleware = 
  applyMiddleware(
    // ...middleware,
    thunkMiddleware
  )

// TODO: after react router is implemented
// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(environmentMiddleware)
)

export default store;
