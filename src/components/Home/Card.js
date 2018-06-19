import styled from 'react-emotion'

const Card = styled('div')`
  display: flex;
  overflow: scroll;
  padding: 4px;
  height: min-content;
  max-width: 425px;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 7px;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),
    0px 2px 2px 0px rgba(0,0,0,0.14),
    0px 1px 5px 0px rgba(0,0,0,0.12);
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 20px 0 rgba(0,0,0,0.3);
    border: 1px solid rgba(0,50,0,0.6);
  }
`

export default Card;