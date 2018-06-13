import React from 'react'
import { Provider } from 'react-redux'
import { Router } from "@reach/router"

// Import helpers
import store from '../store'
import '../styles/normalize.css'
import { commonActions } from '../actions'

// Import containers
// import TestContainer from '../components/test/TestContainer'
import HomeContainer from './Home'

store.subscribe(() => {})

store.dispatch(commonActions.fetchWines())

const Home = () => <HomeContainer />
// const Test = () => <TestContainer />

const App = () =>
  <Provider store={store}>
    <Router>
      <Home path="/" />
      {/* <Test path="/" /> */}
    </Router>
  </Provider>

export default App