import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: ${(p) => p.theme.background};
  color: ${(p) => p.theme.textColor};
  min-height: 100vh;
  width: 100vw;
  padding-bottom: 3.125rem;
  transition: all 0.3s ease;
`;

export default AppContainer;
