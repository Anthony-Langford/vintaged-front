import React from 'react'
import PropTypes from 'prop-types'

export default function NavButton({ onClick }) {
  return(
    <button
      label="NavButton"
      onClick={onClick}
      css={`
        position: relative;
        overflow: hidden;
        display: inline-block;
        margin: 0;
        padding: 0;
        width: 36px;
        height: 36px;
      `}
    >
      <svg
        fill="currentColor"
        preserveAspectRatio="xMidYMid meet"
        height="32"
        width="32"
        viewBox="0 0 40 40"
        style={{"verticalAlign": "middle", "color": "white"}}
      >
        <title>Open Navigation</title>
        <g>
          <path d="m5 10h30v3.4h-30v-3.4z m0 11.6v-3.2h30v3.2h-30z m0 8.4v-3.4h30v3.4h-30z">
          </path>
        </g>
      </svg>
    </button>
  )
}

// Static type checking for props
NavButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}