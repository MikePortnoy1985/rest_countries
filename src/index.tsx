import { FC } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from 'styles/Theme';
import GlobalStyles from 'styles/GlobalStyles';
import MainView from './views/MainView';

if (
  !new (class {
    x = '';
    // eslint-disable-next-line no-prototype-builtins
  })().hasOwnProperty('x')
)
  throw new Error('Transpiler is not configured correctly');

const mode = true;

const App: FC = () => {
  return (
    <ThemeProvider theme={mode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <MainView />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
