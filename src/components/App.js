import React from 'react'
import { Provider } from 'react-redux'
import { Router } from "@reach/router"

// Import helpers
import store from '../store'
import '../styles/normalize.css'
import { commonActions } from '../actions'

// Import containers
import HomeContainer from './Home'

store.subscribe(() => {})

if ("geolocation" in navigator) {
  /* geolocation is available */
  const successCallback = position => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude

    store.dispatch(commonActions.receiveLocation(lat, lon))
    store.dispatch(commonActions.fetchWines(lat, lon))
    
    console.log(`I know where you are 🤫🤡🤐👽👀👁👁🔭 lat ${lat}°, lon ${lon}°`)
  }

  const errorCallback = error => {
    console.log('ERROR(' + error.code + '): ' + error.message);
    store.dispatch(commonActions.fetchWines())
  }

  const options = { timeout: 27000 }

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options)
} else {
  /* geolocation is not available */
  console.log('Geolocation is not available')
  store.dispatch(commonActions.fetchWines())
}

const Home = () => <HomeContainer />

const App = () =>
  <Provider store={store}>
    <Router>
      <Home path="/" />
    </Router>
  </Provider>

export default App