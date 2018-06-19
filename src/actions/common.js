import API from '../helpers/API';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: API.WINES,
});

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
      return client
        .query({
          query: gql`
            {
              vintages { id name heat }
            }
          `
        })
        // .then((response) => {
        //   // Return an empty object if there are no wines
        //   if (response.status === 404) {
        //     return {};
        //   }

        //   return response.json();
        // })
        .then(result => {
          dispatch(commonActions.receiveWines(result.data.vintages));
        })
        .catch(error => console.log(error));
    }
  ),

  fetchWine: wineId => (
    dispatch => {
      return client
        .query({
          query: gql`
            {
              vintages(id: "${wineId}") { id name heat }
            }
          `
        })
        // .then((response) => {
        //   // Return an empty object if there are no wines
        //   if (response.status === 404) {
        //     return {};
        //   }

        //   return response.json();
        // })
        .then(result => {
          console.log(`Wine Id ${wineId}`, result);
          dispatch(commonActions.receiveWine(result.data.vintages[0]));
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