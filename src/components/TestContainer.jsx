import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ThemeProvider } from 'emotion-theming'

// Import helpers
import store from '../store'
import {commonActions} from '../actions'

// Import components
import Title from '../components/Title'
import Background from '../components/Background'
import CelestialObject from '../components/CelestialObject'



// Define themes
const dayTheme = {
  skyColor: '#37d8e6',
  celestialObjectColor: '#ffdd00',
  celestialObjectBorderColor: '#f1c40f'
}

const nightTheme = {
  skyColor: '#2c3e50',
  celestialObjectColor: '#bdc3c7',
  celestialObjectBorderColor: '#eaeff2'
}

class TestContainer extends React.Component {
  constructor(props) {
    super(props)

    // Set initial state for the container
    this.state = {
      title: 'Vintaged',
      isDay: true,
      theme: dayTheme,
    }
  }

  componentWillMount() {   
    // Display loader before mount
    // store.dispatch(commonActions.toggleLoader(true))

    store.dispatch(commonActions.fetchWines())

    // Bind functions to global scope
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    // Hide loader on mount
    // store.dispatch(commonActions.toggleLoader(false))
  }

  componentWillUnmount() {
    // Display loader on unmount
    // store.dispatch(commonActions.toggleLoader(true))
  }

  handleClick() {
    const isDay = this.state.isDay
    this.setState({
      isDay: !isDay,
      theme: isDay ? nightTheme : dayTheme,
      title: isDay ? '🍾' : 'Vintaged',
    })
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        {/* Add a wrapper */}
        <Background>
          <Title>{this.state.title}</Title>
          <CelestialObject
            onClick={this.handleClick}>
          </CelestialObject>
        </Background>
      </ThemeProvider>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state,
  }
}

// Static type checking for props
TestContainer.propTypes = {
  // optionalPropThatIsAnObject: PropTypes.objectOf(PropTypes.shape),
  dispatch: PropTypes.func.isRequired,
}

// Set default value for prop if not required and not present
TestContainer.defaultProps = {
  // optionalPropThatIsAnObject: {},
}

export default connect(mapStateToProps)(TestContainer)
