import { FC } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from 'styles/GlobalStyles';

import MainView from './views/MainView';
import ThemeProvider from './context/ThemeContext';
import { MobxContextProvider } from './context/MobxContext';

const App: FC = () => {
  return (
    <MobxContextProvider>
      <ThemeProvider>
        <GlobalStyles />
        <BrowserRouter>
          <MainView />
        </BrowserRouter>
      </ThemeProvider>
    </MobxContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
