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
  width: 175px;
`

const TitleWrapper = styled('div')`
  display: flex;
  z-index: 2;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  border: 1px solid #D0D0D0;
  border-radius: 5px;
  background-color: white;
`

const Title = styled('span')`
  margin: 4px 6px;
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
  background-color: white;
`

const ListItem = styled('li')`
  padding: 8px;
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
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    const { title, list, toggleItem } = this.props
    const { isOpen } = this.state

    return(
      <div>
        <DropdownWrapper label="dropdown-wrapper">
          <TitleWrapper onClick={this.toggleList}>
            <Title label="dropdown-title">
              {title}
            </Title>
            {isOpen
              ? <Icon icon="arrow_down" height="24px" width="24px" name="arrow-down" margin='auto 6px' />
              : <Icon icon="arrow_up" height="24px" width="24px" name="arrow-up" margin='auto 6px' />
            }
          </TitleWrapper>
          {isOpen && (
            <List>
              {list.map((item) => (
                <ListItem css={`list-style: none;`} key={item.id} onClick={() => this.props.toggleItem(item.id, item.key)}>
                  <span>{item.title}</span>
                  {item.selected && (
                    <span> ✔</span>
                  )}
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