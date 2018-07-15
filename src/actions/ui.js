const uiActions = {
  toggleNav: bool => ({
    type: 'TOGGLE_NAV',
    toggleNav: bool
  }),

  updateExpandedCards: expandedCards => {    
    return({
      type: 'UPDATE_EXPANDED_CARDS',
      expandedCards,
    })
  },
};

export default uiActions;