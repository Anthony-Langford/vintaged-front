import React from 'react'

const Heart = () => (
  <div
    css={`
      height: 25px;
    `}
  >
    <input
      id="toggle-heart"
      type="checkbox"
      css={`
        position: absolute;
        left: -100vw;
        @keyframes heart { 0%, 17.5% { font-size: 0; } }
        &:checked + label {
          color: #e2264d;
          will-change: font-size;
          animation: heart 1s cubic-bezier(.17, .89, .32, 1.49);
        }
        cursor: pointer;
      `}
    />
    <label
      htmlFor="toggle-heart"
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

export default Heart