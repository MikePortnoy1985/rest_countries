import { FC } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: aquamarine;
  height: 100vh;
  width: 100vw;
`;

const MainView: FC = () => {
  return (
    <AppContainer>
      <h1>Main view</h1>
    </AppContainer>
  );
};

export default MainView;
