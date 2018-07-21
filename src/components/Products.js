import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import store from '../store'

// Import components
import Header from './Home/Header'
import ContentWrapper from './Home/ContentWrapper'
import NavWrapper from './Home/NavWrapper'
import LoaderWrapper from './Home/LoaderWrapper'
import Dropdown from './Home/Dropdown'
import ProductCardsList from './Home/ProductCardsList'
import SortList from './Home/SortList'
import Footer from './Home/Footer'

// Import actions
import { uiActions } from '../actions'

// Import locale
import locale from '../locale/Home'

class Products extends React.Component {
  constructor(props) {
    super(props)
    // TODO: Move sorting and filtering to redux store
    this.state = {
      sortKey: {
        sortBy: 'heat',
        sortDirection: 'descending',
      },
      sortList: [
        {
          id: 0,
          title: 'Heat',
          value: 'heat',
          sortDirection: 'descending'
        },
        {
          id: 1,
          title: 'Price',
          value: 'price_in_cents',
          sortDirection: 'ascending'
        }
      ],
      filters: {
        secondary_category: []
      },
      secondary_category: [
        {
          id: 0,
          title: 'Red Wine',
          selected: false,
          key: 'secondary_category'
        },
        {
          id: 1,
          title: 'White Wine',
          selected: false,
          key: 'secondary_category'
        },
        {
          id: 2,
          title: 'Rosé Wine',
          selected: false,
          key: 'secondary_category'
        }
      ]
    }

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.setSort = this.setSort.bind(this);
  }

  toggleNav() {
    store.dispatch(uiActions.toggleNav(!this.props.ui.navState))
  }

  // Update the state upon changing selected filters
  toggleFilter(id, key) {
    // Find the category
    let category = this.state[key]

    // Toggle the selected boolean
    category[id].selected = !category[id].selected

    // Find the corresponding filter array
    let updatedFilters = this.state.filters[key]

    // Update the filter array
    if (updatedFilters.indexOf(category[id].title) === -1) {
      updatedFilters.push(category[id].title)
    } else {
      updatedFilters.splice(updatedFilters.indexOf(category[id].title), 1)
    }

    this.setState({
      [key]: category,
      filters: {
        [key]: updatedFilters
      }
    })
  }
  
  // Sets the dropdown title depending on selected items
  setTitle(category) {
    const itemsSelected = this.state[category].filter(item => (item.selected === true)).length

    if (itemsSelected === 0) {
      return locale.category[0]
    }
    else if (itemsSelected === 1) {
      return `${itemsSelected} ${locale.category[1]}`
    }
    else if (itemsSelected > 1) {
      return `${itemsSelected} ${locale.category[2]}`
    }
  }

  setSort(sortBy, id) {

    let sortList = this.state.sortList

    if (this.state.sortKey.sortBy === sortBy) {
      sortList[id].sortDirection = sortList[id].sortDirection === 'ascending' ? 'descending' : 'ascending'
    }

    this.setState({
      sortKey: {
        sortBy,
        sortDirection: sortList[id].sortDirection
      },
      sortList
    })
  }

  render() {
    return (
      <React.Fragment>
        <ContentWrapper label="Content">
          <Header label="Header" toggleNav={this.toggleNav} />

          <NavWrapper toggleNav={this.toggleNav} navState={this.props.ui.navState}>
            <LoaderWrapper loading={this.props.common.isFetching}>
              <div label="Sorting" css={`display: flex; justify-content: start; margin: 0.25rem 0.5rem;`}>
                <div css={`display: flex; margin: 8px 0; align-items: center;`}>
                  <span>Sort by:</span>
                  <SortList
                    sortList={this.state.sortList}
                    onClick={this.setSort}
                    selected={this.state.sortKey.sortBy}
                  />
                </div>
              </div>

              <div label="Filtering" css={`display: flex; justify-content: start; margin: 0.25rem 0.5rem;`}>
                <div css={`margin: 8px 0;`}>
                  <span>Filter by:</span>
                </div>

                <Dropdown
                  title={this.setTitle('secondary_category')}
                  list={this.state.secondary_category}
                  toggleItem={this.toggleFilter}
                />
              </div>

              <ProductCardsList
                sortBy={this.state.sortKey.sortBy}
                sortDirection={this.state.sortKey.sortDirection}
                filters={this.state.filters}
                wines={this.props.common.wines}
              />
            </LoaderWrapper>
          </NavWrapper>

          <Footer />
        </ContentWrapper>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state
  }
}

// Static type checking for props
Products.propTypes = {
  dispatch: PropTypes.func.isRequired,
  common: PropTypes.object,
  ui: PropTypes.object.isRequired
}

// Set default value for prop if not required and not present
Products.defaultProps = {
  common: {}
}

export default connect(mapStateToProps)(Products)