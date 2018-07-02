import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

// Import components
import Nav from './Nav'
import NavButton from './NavButton'
import NavOverlay from './NavOverlay'

const FlexWrapper = styled('div')`
  flex: 1;
`

const InnerNavWrapper = styled('div')`
  position: absolute;
  top: 68px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
`

const ContentWrapper = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
`

export default function NavWrapper({
  navState,
  toggleNav,
  children
}) {
  return (
    <FlexWrapper>
      <div label="OuterNavWrapper">
        <InnerNavWrapper>
          <ContentWrapper>
            {children}
          </ContentWrapper>

          <Nav toggleNav={toggleNav} navState={navState} />
        </InnerNavWrapper>
        
        <NavOverlay toggleNav={toggleNav} navState={navState} />

        <NavButton onClick={toggleNav} />
      </div>
    </FlexWrapper>
  )
}

// Static type checking for props
NavWrapper.propTypes = {
  navState: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
  children: PropTypes.node
}