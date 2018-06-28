import React from 'react'
import PropTypes from 'prop-types'

export default function Heart(props) {
  return (
    <div
      css={`
        height: 25px;
      `}
    >
      <input
        id={`toggle-heart${props.id}`}
        type="checkbox"
        css={`
          position: absolute;
          left: -100vw;
          @keyframes heart { 0%, 17.5% { font-size: 0; } }
          &:checked + label {
            color: #e2264d;
            will-change: font-size;
            animation: heart 0.7s cubic-bezier(.17, .89, .32, 1.49);
          }
          cursor: pointer;
        `}
      />
      <label
        htmlFor={`toggle-heart${props.id}`}
        css={`
          color: #aab8c2;
          width: min-content;
          font-size: 25px;
        `}
      >
        ❤
      </label>
    </div>
  )
}

// Static type checking for props
Heart.propTypes = {
  id: PropTypes.string.isRequired,
}