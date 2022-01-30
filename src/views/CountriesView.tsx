import { FC } from 'react';

import Input from 'components/input/Input';
import Select from 'components/select/Select';
import Cards from 'components/cards/Cards';
import FlexContainer from 'styles/FlexContainer';

const CountriesView: FC = () => {
  return (
    <>
      <FlexContainer>
        <Input />
        <Select />
      </FlexContainer>
      <Cards />
    </>
  );
};

export default CountriesView;
