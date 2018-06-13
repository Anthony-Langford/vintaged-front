import 'whatwg-fetch';
import API from '../helpers/API';

// Common actions
const commonActions = {
  testAction: bool => ({
    type: 'testAction',
    bool,
  }),

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
          console.log('json response', json);
          dispatch(commonActions.receiveWines(json));
        })
        .catch(error => console.log(error));
    }
  ),

  clearStore: () => ({
    type: 'CLEAR_STORE',
  })
};

export default commonActions;