import { FC } from 'react';

import Header from 'components/header/Header';
import Input from 'components/input/Input';
import Filter from 'components/filter/Filter';
import Cards from 'components/cards/Cards';
import AppContainer from 'styles/AppContainer';
import MainSection from 'styles/MainSection';
import FlexContainer from 'styles/FlexContainer';

const MainView: FC = () => {
  return (
    <AppContainer>
      <Header />
      <MainSection>
        <FlexContainer>
          <Input />
          <Filter />
        </FlexContainer>
        <Cards />
      </MainSection>
    </AppContainer>
  );
};

export default MainView;
