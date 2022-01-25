import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from 'styles/Theme';
import useStore from '../hooks/useStore';

import { MODE } from '../constants';

const Theme: FC = observer(({ children }) => {
  const store = useStore();
  return (
    <ThemeProvider theme={store?.mode === MODE.DARK ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
});

export default Theme;
