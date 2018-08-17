import store from '../store'
import {
  locationActions,
  productActions,
  storeActions
} from '../actions'

export default () => {
  if ("geolocation" in navigator) {
    /* Geolocation is available */
    const successCallback = position => {
      const lat = position.coords.latitude
      const lon = position.coords.longitude

      // Store user's location
      store.dispatch(locationActions.receiveLocation(lat, lon))

      // Check if user is in Ontario
      if ((56 > lat && lat > 41) && (-95 < lon && lon < -74)) {
        console.log(`You are here in Ontario lat ${lat}°, lon ${lon}°`)
        // Fetch wines from nearest store to user's location
        store.dispatch(storeActions.fetchNearestStore(lat, lon))
      } else {
        console.log(`You are not in Ontario lat ${lat}°, lon ${lon}°`)
        store.dispatch(productActions.fetchWines())
      }
    }
  
    const errorCallback = error => {
      console.log('ERROR(' + error.code + '): ' + error.message)
    }
  
    const options = { timeout: 15000 }
  
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options)
  } else {
    /* Geolocation is not available */
    console.log('I am sorry, we are unable to find your location.')
  }
}