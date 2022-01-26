import { FC } from 'react';
import Header from 'styles/Header';

import Toggle from './ThemeToggle';
import { TITLE } from '../../constants';

const AppHeader: FC = () => {
  return (
    <Header>
      <h1>{TITLE}</h1>
      <Toggle />
    </Header>
  );
};

export default AppHeader;
