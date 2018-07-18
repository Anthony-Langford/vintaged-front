import React from 'react'
import { Provider } from 'react-redux'
import { Router } from "@reach/router"

// Import containers
import HomeContainer from './Home'
import TestContainer from './Test'

// Import helpers
import store from '../store'
import '../styles/normalize.css'
import { commonActions } from '../actions'
import getCurrentLocation from '../helpers/getCurrentLocation'

store.subscribe(() => {})

store.dispatch(commonActions.fetchWines())

getCurrentLocation()

const App = () =>
  <Provider store={store}>
    <Router id="router">
      <HomeContainer path="/" />
      <TestContainer path="/test" />
    </Router>
  </Provider>

export default App