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
      dispatch(commonActions.requestWines())

      const GET_WINES = gql`
        {
          vintages {
            id
            name
            heat
            image_url
            image_thumb_url
            tasting_note
            price_in_cents
            volume_in_milliliters
            alcohol_content
            product_no
            origin
            secondary_category
            varietal
            style
            producer_name
          }
        }
      `

      return client
        .query({ query: GET_WINES })
        .then(result => {
          dispatch(commonActions.receiveWines(result.data.vintages))
        })
        .catch(error => console.log(error))
    }
  ),

  fetchWine: wineId => (
    dispatch => {

      const GET_WINE = gql`
        {
          vintages(id: "${wineId}") {
            id
            name
            heat
            image_url
            image_thumb_url
            tasting_note
            price_in_cents
            volume_in_milliliters
            alcohol_content
            product_no
            origin
            secondary_category
            varietal
            style
            producer_name
          }
        }
      `

      return client
        .query({ query: GET_WINE })
        .then(result => {
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