import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

// Import components
import Nav from './Nav'
import NavOverlay from './NavOverlay'

const FlexWrapper = styled('div')`
  flex: 1;
`

const OuterWrapper = styled('div')`
  position: absolute;
  top: 68px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`

const ContentWrapper = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  transition: none;
`

export default function NavWrapper({
  navOpen,
  toggleNav,
  children
}) {
  return(
    <FlexWrapper>
      <OuterWrapper>
        <ContentWrapper>
          {children}
        </ContentWrapper>

        <Nav toggleNav={toggleNav} navOpen={navOpen} />
      </OuterWrapper>
      
      <NavOverlay toggleNav={toggleNav} navOpen={navOpen} />
    </FlexWrapper>
  )
}

// Static type checking for props
NavWrapper.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
  children: PropTypes.node
}