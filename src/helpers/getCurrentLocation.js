
import store from '../store'
import { commonActions } from '../actions'

export default () => {
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
  
    const options = { timeout: 15000 }
  
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options)
  } else {
    /* geolocation is not available */
    console.log('Geolocation is not available')
  }
}