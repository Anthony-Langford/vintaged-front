import React from 'react'
import PropTypes from 'prop-types'
import { Link, Match } from "@reach/router";

export default function NavigationLinks() {
  const links = [
    { name: 'Home', link: "/" },
    { name: 'Test', link: "/test " }
  ]

  return links.map(obj => (
    <Match path={obj.link} key={obj.name}>
      {props => (
        props.match ? (
          <Link
            to={obj.link}
            css={`
              display: block;
              text-decoration: none;
              margin: 16px;
              font-size: 16px;
              color: inherit;
              ::before {
                content: '';
                height: 32px;
                width: 8px;
                margin-right: 16px;
                transform: translateX(-32px) translateY(-8px);
                position: absolute;
                display: inline-block;
                background-color: #AD1457;
              }
            `}
          >
            {obj.name}
          </Link>
        ) : (
          <Link
            to={obj.link}
            css={`
              display: block;
              text-decoration: none;
              margin: 16px;
              font-size: 16px;
              color: inherit;
              }
            `}
          >
            {obj.name}
          </Link>
        )
      )}
    </Match>
  ))
}

// Static type checking for props
NavigationLinks.propTypes = {
  match: PropTypes.object
}