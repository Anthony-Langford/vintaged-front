import styled from 'react-emotion';

const Background = styled('div')`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.skyColor};
`;

export default Background;