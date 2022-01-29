import { FC } from 'react';

import Input from 'components/input/Input';
import Filter from 'components/filter/Filter';
import Cards from 'components/cards/Cards';
import FlexContainer from 'styles/FlexContainer';

const CountriesView: FC = () => {
  return (
    <>
      <FlexContainer>
        <Input />
        <Filter />
      </FlexContainer>
      <Cards />
    </>
  );
};

export default CountriesView;
