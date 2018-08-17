import API from '../helpers/API'
import ApolloClient from "apollo-boost"
import gql from "graphql-tag"

const client = new ApolloClient({
  uri: API.WINES,
})

// Wine actions
const productActions = {
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
      dispatch(productActions.requestWines())

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
      `

      return client
        .query({ query: GET_WINES })
        .then(result => {
          dispatch(productActions.receiveWines(result.data.vintages))
        })
        .catch(error => console.log(error))
    }
  ),

  clearStore: () => ({
    type: 'CLEAR_STORE',
  })
};

export default productActions
