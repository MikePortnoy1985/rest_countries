import { FC } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { observer } from 'mobx-react-lite';

import { lightTheme, darkTheme } from 'styles/Theme';
import GlobalStyles from 'styles/GlobalStyles';
import MainView from './views/MainView';
import store from './store/store';

import { MODE } from './constants';

const App: FC = observer(() => {
  return (
    <ThemeProvider theme={store.mode === MODE.DARK ? darkTheme : lightTheme}>
      <GlobalStyles />
      <MainView />
    </ThemeProvider>
  );
});

ReactDOM.render(<App />, document.getElementById('app'));
