import { FC } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import MainView from './views/MainView';

if (
  !new (class {
    x;
    // eslint-disable-next-line no-prototype-builtins
  })().hasOwnProperty('x')
)
  throw new Error('Transpiler is not configured correctly');

const GLOBAL = createGlobalStyle`
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
}

body {
  overflow-X: hidden;
}
`;

const App: FC = () => {
  return (
    <>
      <GLOBAL />
      <MainView />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
