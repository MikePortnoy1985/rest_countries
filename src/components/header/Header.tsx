import { FC } from 'react';
import Header, { Title } from 'styles/Header';

import Toggle from './ThemeToggle';
import { TITLE_TEXT } from '../../constants';

const AppHeader: FC = () => {
  return (
    <Header>
      <Title>{TITLE_TEXT}</Title>
      <Toggle />
    </Header>
  );
};

export default AppHeader;
