import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import onClickOutside from 'react-onclickoutside'

// Import components
import Icon from './Icon'

const DropdownWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 0 6px;
  position: absolute;
  width: 180px;
  z-index: 3;
`

const TitleWrapper = styled('button')`
  display: flex;
  z-index: 4;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  border: 1px solid #D0D0D0;
  border-radius: 5px;
  background-color: White;
  &:hover {
    cursor: pointer;
  }
  &:active {
    outline: none;
  }
`

const Title = styled('span')`
  margin: 0 0 0 6px;
`

const List = styled('ul')`
  width: 100%;
  margin: auto;
  position: relative;
  border: 1px solid #D0D0D0;
  border-radius: 0 0 4px 4px;
  border-top: none;
  box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.12);
  top: -5px;
  padding: 5px 0 0 0;
  background-color: White;
`

const ListItem = styled('li')`
  list-style: none;
  display: flex;
`

const Button = styled('button')`
  width: 100%;
  height: 100%;
  margin: 2px;
  padding: 0.5rem;
  text-align: left;
  border: none;
  background: White;
  &:hover {
    cursor: pointer;
  }
`

class Dropdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
    
    this.toggleList = this.toggleList.bind(this)
  }

  handleClickOutside(){
    this.setState({
      isOpen: false
    })
  }

  toggleList() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const {
      title,
      list,
      toggleItem
    } = this.props

    const { isOpen } = this.state

    return(
      <div>
        <DropdownWrapper label="dropdown-wrapper">
          <TitleWrapper
            role="button"
            label="dropdown"
            onClick={this.toggleList}
          >
            <Title label="dropdown-title" isOpen={isOpen}>
              {title}
            </Title>
            {isOpen
              ? <Icon icon="arrow_up" height="24px" width="24px" name="arrow-down" margin='auto 6px' rotate={true} />
              : <Icon icon="arrow_up" height="24px" width="24px" name="arrow-up" margin='auto 6px' />
            }
          </TitleWrapper>
          {isOpen && (
            <List>
              {list.map(item => (
                <ListItem
                  key={item.id}
                  onClick={() => toggleItem(item.id, item.key)}
                >
                  <Button
                    role="button"
                    selected={item.selected}
                  >
                    {item.title}
                    {item.selected && (
                      <span css={`margin: 0 4px;`}>✔</span>
                    )}
                  </Button>
                </ListItem>
              ))}
            </List>
          )}
        </DropdownWrapper>
      </div>
    )
  }
}

// Static type checking for props
Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  toggleItem: PropTypes.func.isRequired
}

export default onClickOutside(Dropdown);