
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
        console.log('User is in Ontario')
        // Fetch wines from nearest store to user's location
        store.dispatch(commonActions.fetchWines(lat, lon))
      } else {
        console.log('User is not in Ontario')
      }
      
      console.log(`lat ${lat}°, lon ${lon}°`)
    }
  
    const errorCallback = error => {
      console.log('ERROR(' + error.code + '): ' + error.message);
      store.dispatch(commonActions.fetchWines())
    }
  
    const options = { timeout: 15000 }
  
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options)
  } else {
    /* Geolocation is not available */
    console.log('Geolocation is not available 👎🏽');
  }
}