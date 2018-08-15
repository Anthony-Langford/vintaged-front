
import store from '../store'
import { commonActions } from '../actions'

export default () => {
  if ("geolocation" in navigator) {
    /* Geolocation is available */
    const successCallback = position => {
      const lat = position.coords.latitude
      const lon = position.coords.longitude

      // Store user's location
      store.dispatch(commonActions.receiveLocation(lat, lon))

      // Check if user is in Ontario
      if ((52.84 > lat && lat > 42) && (-83.026 > lon > -90)) {
        console.log(`You are here in Ontario lat ${lat}°, lon ${lon}°`)
        // Fetch wines from nearest store to user's location
        store.dispatch(commonActions.fetchWines())
      } else {
        console.log(`You are not in Ontario lat ${lat}°, lon ${lon}°`)
        store.dispatch(commonActions.fetchWines())
      }
    }
  
    const errorCallback = error => {
      console.log('ERROR(' + error.code + '): ' + error.message);
    }
  
    const options = { timeout: 15000 }
  
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options)
  } else {
    /* Geolocation is not available */
    console.log('I am sorry, we are unable to find your location.');
  }
}