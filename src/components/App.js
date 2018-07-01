import React from 'react'
import { Provider } from 'react-redux'
import { Router } from "@reach/router"

// Import containers
import HomeContainer from './Home'

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
    </Router>
  </Provider>

export default App