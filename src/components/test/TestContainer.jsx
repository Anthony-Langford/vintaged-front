import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ThemeProvider } from 'emotion-theming'

// Import components
import Title from './Title'
import Background from './Background'
import CelestialObject from './CelestialObject'

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

    // Bind functions to global scope
    this.handleClick = this.handleClick.bind(this)
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
  dispatch: PropTypes.func.isRequired,
}

// Set default value for prop if not required and not present
TestContainer.defaultProps = {
}

export default connect(mapStateToProps)(TestContainer)
