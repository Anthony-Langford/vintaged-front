import React from 'react'
import { css } from 'emotion'
import PropTypes from 'prop-types'
import { Link, Match } from "@reach/router";

const base = css`
  display: block;
  text-decoration: none;
  margin: 16px;
  font-size: 16px;
  color: inherit;
`

const active = css`
  font-weight: bold;
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
`

export default function NavLinks({
  navOpen
}) {
  const links = [
    { name: 'Home', link: "/" },
    { name: 'Products', link: "/products" },
  ]

  return links.map(obj => (
    <Match path={obj.link} key={obj.name}>
      {props => (
        props.match ? (
          <Link
            to={obj.link}
            aria-current="true"
            tabIndex={navOpen ? '0' : '-1'}
            className={css`
              ${base};
              ${active};
            `}
          >
            {obj.name}
          </Link>
        ) : (
          <Link
            to={obj.link}
            aria-current="false"
            tabIndex={navOpen ? '0' : '-1'}
            css={`
              ${base};
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
NavLinks.propTypes = {
  navOpen: PropTypes.bool,
  match: PropTypes.object
}