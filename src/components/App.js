import React from 'react'
import { Provider } from 'react-redux'
import { Router } from "@reach/router"

// Import helpers
import store from '../store'
import '../styles/normalize.css'

// Import containers
import TestContainer from '../components/TestContainer'

store.subscribe(() => {})

const Home = () => <TestContainer />

const App = () =>
  <Provider store={store}>
    <Router>
      <Home path="/" />
    </Router>
  </Provider>

export default App