import styled from 'react-emotion'

export default styled('div')`
  display: flex;
  flex-direction: column;
  padding: 8px;
  margin: 0.5rem;
  overflow: auto;
  width: 100%;
  max-width: 425px;
  background: white;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 7px;
  box-shadow: 0px 4px 1px -2px rgba(0,0,0,0.2),
    0px 2px 2px 0px rgba(0,0,0,0.14),
    0px 1px 5px 0px rgba(0,0,0,0.12);
`