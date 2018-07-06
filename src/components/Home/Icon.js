import React from 'react'
import PropTypes from 'prop-types'

export default function Icon ({
  icon,
  height,
  width,
  margin
}) {
  return(
    <div css={`
      position: relative;
      overflow: hidden;
      display: inline-block;
      margin: ${margin};
      padding: 0;
      width: ${height};
      height: ${width};
    `}>
      <img
        alt=""
        width="36"
        height="36"
        src={`/${icon}.svg`}
        css={`
          position: absolute;
          top: 0px;
          left: 0px;
          transition: opacity 0.5s;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
          opacity: 1;
        `}
      />
    </div>
  )
}

// Static type checking for props
Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
}

// Set default value for prop if not required and not present
Icon.defaultProps = {
  height: '36px',
  width: '36px',
  margin: 'auto'
}