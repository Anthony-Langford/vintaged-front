import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Import helpers
import store from '../store'
import { commonActions } from '../actions'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      wine: null
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.props.common.wines !== prevProps.common.wines) {
      const wineId = this.props.common.wines[0]._id

      store.dispatch(commonActions.fetchWine(wineId))
        .then(() => {
          this.setState({
            wine: this.props.common[wineId]
          }, () => {
          })
        })
    }
  }

  render() {
    const wine = this.state.wine;

    return (
      !wine ? (
        <div>
          Loading...
        </div>
      ) : (
        <div css={`
          display: flex;
          flex-flow: row wrap;
          height: 100vh;
          padding: 1rem;
        `}>
          <div css={`
            display: flex;
            height: 200px;
            width: 320px;
            padding: 0.5rem;
            border: 1px solid black;
            border-radius: 7px;
          `}>
            <img src={wine.image_thumb_url} height="140px" />
            <div css={`
            display: flex;
          `}>
              <span>Name: {wine.name}</span>
            </div>
          </div>
        </div>
      )
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state,
  }
}

// Static type checking for props
Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  common: PropTypes.object
}

// Set default value for prop if not required and not present
Home.defaultProps = {
  common: {}
}

export default connect(mapStateToProps)(Home)