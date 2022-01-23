import { FC } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

if (
  !new (class {
    x;
    // eslint-disable-next-line no-prototype-builtins
  })().hasOwnProperty('x')
)
  throw new Error('Transpiler is not configured correctly');

const AppContainer = styled.div`
  background-color: aquamarine;
  height: 100vh;
  width: 100vw;
`;

const App: FC = () => <AppContainer>Мишаня красавчик</AppContainer>;

ReactDOM.render(<App />, document.getElementById('app'));
