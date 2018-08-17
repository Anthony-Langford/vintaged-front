// Wine actions
const locationActions = {
  receiveLocation: (lat, lon) => (
    {
      type: 'RECEIVE_LOCATION',
      lat,
      lon
    }
  ),
  
  clearStore: () => ({
    type: 'CLEAR_STORE',
  })
};

export default locationActions
