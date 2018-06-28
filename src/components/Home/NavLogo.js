import React from 'react'
import PropTypes from 'prop-types'

const NavLogo = (props) => (
  <button
    onClick={props.onClick}
    css={`
      position: fixed;
      bottom: 0px;
      right: 0px;
      background-color: #AD1457;
      border-radius: 50%;
      padding: 16px;
      margin: 32px;
      animation: animation-1m49nxd 0.25s ease-in;
      transition: background-color 150ms ease-in-out;
      border-width: 0px;
      border-style: initial;
      border-color: initial;
      border-image: initial;
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
      <title>Navigation Logo</title>
      <g>
        <path d="m5 10h30v3.4h-30v-3.4z m0 11.6v-3.2h30v3.2h-30z m0 8.4v-3.4h30v3.4h-30z">
        </path>
      </g>
    </svg>
  </button>
)

// Static type checking for props
NavLogo.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default NavLogo