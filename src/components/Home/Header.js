//emotion
import React from 'react'

// Import components
import Logo from './Logo'

export default () => (
  <div
    label="Header"
    css={`
      background: #1D2029;
    `}
  >
    <div
      css={`
        display: flex;
        flex: 1;
        overflow: auto;
        justify-content: space-between;
        padding: 16px;
      `}
    >
      <div
        css={`
          display: inline;
          flex: 1;
          align-items: center;
          opacity: 1;
          transition: opacity 200ms ease;
          width: min-content;
        `}
      >
        <nav>
          <Logo />
        </nav>
      </div>
      <h1
        css={`
          margin: 0 0 0 8px;
          width: 100%;
          font-family: 'Oswald';
          font-size: 32px;
          color: #f5f5f5;
        `}
      >
        Vintaged
      </h1>
    </div>
  </div>
)