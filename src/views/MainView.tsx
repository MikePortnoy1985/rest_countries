import { FC } from 'react';

import Header from 'components/header/Header';
import Input from 'components/input/Input';
import AppContainer from 'styles/AppContainer';
import MainSection from 'styles/MainSection';
import FlexContainer from 'styles/FlexContainer';
import GridContainer from 'styles/GridContainer';
import Card from 'styles/Card';

const MainView: FC = () => {
  return (
    <AppContainer>
      <Header />
      <MainSection>
        <FlexContainer>
          <Input />
        </FlexContainer>
        <GridContainer>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Card key={item} />
          ))}
        </GridContainer>
      </MainSection>
    </AppContainer>
  );
};

export default MainView;
