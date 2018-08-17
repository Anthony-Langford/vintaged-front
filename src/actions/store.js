import API from '../helpers/API'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import { productActions } from './index'

const client = new ApolloClient({
  uri: API.WINES,
})

// Wine actions
const storeActions = {
  receiveStore: store => ({
    type: 'RECEIVE_STORE',
    store,
    receivedAt: Date.now(),
  }),

  fetchNearestStore: (lat, lon) => (
    dispatch => {
      const FIND_NEAREST_STORE = gql`
        {
          store(lat: ${lat} lon: ${lon}) {
            id
            name
            available_vintages{
              id
              quantity
                vintage {
                  id
                  name
                  alcohol_content
                  heat
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
                  sold
                  sold_percent
                  release_units
                  days_since_release
                  sugar_in_grams_per_liter
                  sugar_content
              }
            }
          }
        }
      `

      return client
        .query({ query: FIND_NEAREST_STORE })
        .then(result => {
          const wines = []
          result.data.store.available_vintages.map(wine => {
            wines.push(wine.vintage)
          })
          dispatch(storeActions.receiveStore(result.data.store))
          dispatch(productActions.receiveWines(wines))
        })
        .catch(error => console.log(error))
    }
  ),

  clearStore: () => ({
    type: 'CLEAR_STORE',
  })
};

export default storeActions
