import React from 'react'
import { Link } from "@reach/router";

export default () => (
  <Link
    to="/#"
    css={`
      display: flex;
    `}
  >
    <div
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
      <img
        alt="vintaged"
        width="36"
        height="36"
        src="/logo.svg"
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
  </Link>
)