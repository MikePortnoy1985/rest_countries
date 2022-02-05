import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import Header from 'components/header/Header';
import AppContainer from 'styles/AppContainer';
import MainSection from 'styles/MainSection';

import CountriesView from './CountriesView';
import CountryView from './CountryView';
import useStore from '../hooks/useStore';
import useScreenWidth from '../hooks/useScreenWidth';

const MainView: FC = () => {
  const store = useStore();
  const innerWidth = useScreenWidth();

  store?.setCardsToShow(innerWidth);

  return (
    <AppContainer>
      <Header />
      <MainSection>
        <Routes>
          <Route path="/" element={<CountriesView />} />
          <Route path="/:id" element={<CountryView />} />
          <Route path="*" element={<CountriesView />} />
        </Routes>
      </MainSection>
    </AppContainer>
  );
};

export default observer(MainView);
