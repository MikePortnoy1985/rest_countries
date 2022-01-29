import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from 'components/header/Header';
import AppContainer from 'styles/AppContainer';
import MainSection from 'styles/MainSection';

import CountriesView from './CountriesView';
import CountryView from './CountryView';

const MainView: FC = () => {
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

export default MainView;
