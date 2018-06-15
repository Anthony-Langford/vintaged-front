import styled from 'react-emotion'

const Card = styled('div')`
  display: flex;
  overflow: scroll;
  padding: 4px;
  height: min-content;
  max-width: 425px;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 7px;
  box-shadow: 0px 1px 0 #d10000,
    2px 2px 0 #FFC107,
    3px 4px 0 #019DC9;
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 20px 0 rgba(0,0,0,0.3);
    border: 1px solid rgba(0,50,0,0.6);
  }
`

export default Card;