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
  navState,
  toggleNav,
  children
}) {
  return(
    <FlexWrapper>
      <OuterWrapper>
        <ContentWrapper>
          {children}
        </ContentWrapper>

        <Nav toggleNav={toggleNav} navState={navState} />
      </OuterWrapper>
      
      <NavOverlay toggleNav={toggleNav} navState={navState} />
    </FlexWrapper>
  )
}

// Static type checking for props
NavWrapper.propTypes = {
  navState: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
  children: PropTypes.node
}