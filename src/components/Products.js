import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Import components
import Header from './Home/Header'
import ContentWrapper from './Home/ContentWrapper'
import NavWrapper from './Home/NavWrapper'
import LoaderWrapper from './Home/LoaderWrapper'
import Sorting from './Home/Sorting'
import Filtering from './Home/Filtering'
import ProductCardsList from './Home/ProductCardsList'
import Footer from './Home/Footer'

// Import actions
import {
  uiActions,
  sortActions
} from '../actions'

// Import locale
import locale from '../locale/Home'

class Products extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
    this.props.dispatch(uiActions.toggleNav(!this.props.ui.navOpen))
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
    let sortDirection = this.props.sort.sortDirection
    let sortList = this.props.sort.sortList

    if (this.props.sort.sortBy === sortBy) {
      sortDirection = sortDirection === 'ascending' ? 'descending' : 'ascending'
      sortList[id].sortDirection = sortList[id].sortDirection === 'ascending' ? 'descending' : 'ascending'
    }

    this.props.dispatch(sortActions.setSort(sortBy, sortDirection, sortList))
  }

  render() {

    return (
      <React.Fragment>
        <ContentWrapper label="Content">
          <Header label="Header" toggleNav={this.toggleNav} />

          <NavWrapper toggleNav={this.toggleNav} navOpen={this.props.ui.navOpen}>
            <LoaderWrapper loading={this.props.products.isFetching}>

              <Sorting
                sortList={this.props.sort.sortList}
                onClick={this.setSort}
                sortBy={this.props.sort.sortBy}
                sortDirection={this.props.sort.sortDirection}
              />

              <Filtering
                title={this.setTitle('secondary_category')}
                list={this.state.secondary_category}
                toggleItem={this.toggleFilter}
              />

              <ProductCardsList
                sortBy={this.props.sort.sortBy}
                sortDirection={this.props.sort.sortDirection}
                filters={this.state.filters}
                wines={this.props.products.wines}
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
  products: PropTypes.object,
  ui: PropTypes.object.isRequired,
  sort: PropTypes.object.isRequired
}

// Set default value for prop if not required and not present
Products.defaultProps = {
  products: {}
}

export default connect(mapStateToProps)(Products)