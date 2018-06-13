import 'whatwg-fetch';
import API from '../helpers/API';

// Common actions
const commonActions = {
  requestWines: () => ({
    type: 'REQUEST_WINES',
  }),

  receiveWines: wines => ({
    type: 'RECEIVE_WINES',
    wines,
    receivedAt: Date.now(),
  }),

  fetchWines: () => (
    dispatch => {
      dispatch(commonActions.requestWines());
      return fetch(`${API.WINES}`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
      })
        .then((response) => {
          // Return an empty object if there are no wines
          if (response.status === 404) {
            return {};
          }

          return response.json();
        })
        .then(json => {
          console.log('Wines', json);
          dispatch(commonActions.receiveWines(json));
        })
        .catch(error => console.log(error));
    }
  ),

  fetchWine: wineId => (
    dispatch => {
      return fetch(`${API.WINES}/${wineId}`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
      })
        .then((response) => {
          // Return an empty object if there are no wines
          if (response.status === 404) {
            return {};
          }

          return response.json();
        })
        .then(json => {
          console.log(`Wine Id ${wineId}`, json);
          dispatch(commonActions.receiveWine(json));
        })
        .catch(error => console.log(error));
    }
  ),

  receiveWine: wine => {    
    return ({
      type: 'RECEIVE_WINE',
      wine,
      receivedAt: Date.now(),
    })
  },

  clearStore: () => ({
    type: 'CLEAR_STORE',
  })
};

export default commonActions;