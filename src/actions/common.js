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

  fetchWines: (lat, lon) => (
    dispatch => {
      dispatch(commonActions.requestWines())

      const GET_WINES = gql`
        {
          vintages(
            limit: 40
            skip: 0
            filter: "{'heat':{'$gte':2.5},'sold':{'$gte':10},'price_in_cents':{'$gte':1500},'release_units':{'$gte':200},'inventory_count':{'$gte':20}}"
            sort: "{'heat':-1}"
          ) {
            id
            name
            alcohol_content
            heat
            ${(lat && lon) ? `store_LAPI(lat:${lat} lon:${lon}){
              store_id
              quantity
            }` : ''}
            image_url
            image_thumb_url
            tasting_note
            price_in_cents
            product_no
            released_on
            volume_in_milliliters
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
    return({
      type: 'RECEIVE_WINE',
      wine,
      receivedAt: Date.now(),
    })
  },

  receiveLocation: (lat, lon) => (
    {
      type: 'RECEIVE_LOCATION',
      lat,
      lon
    }
  ),

  fetchStores: () => (
    dispatch => {
      const GET_STORES = gql`
        {
          stores() {
            id
            name
          }
        }
      `

      return client
        .query({ query: GET_STORES })
        .then(result => {
          dispatch(commonActions.receiveStores(result.data))
        })
        .catch(error => console.log(error))
    }
  ),

  receiveStores: stores => {    
    return({
      type: 'RECEIVE_STORES',
      stores,
      receivedAt: Date.now(),
    })
  },

  clearStore: () => ({
    type: 'CLEAR_STORE',
  })
};

export default commonActions;