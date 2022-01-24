import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: ${(p) => p.theme.background};
  color: ${(p) => p.theme.textColor};
  height: 100vh;
  width: 100vw;
`;

export default AppContainer;
