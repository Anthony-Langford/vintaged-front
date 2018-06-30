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
  openNav,
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

          <Nav toggleNav={toggleNav} openNav={openNav} />
        </InnerNavWrapper>
        
        <NavOverlay toggleNav={toggleNav} openNav={openNav} />

        <NavButton onClick={toggleNav} />
      </div>
    </FlexWrapper>
  )
}

// Static type checking for props
NavWrapper.propTypes = {
  openNav: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
  children: PropTypes.node
}