import { FC } from 'react';

import Input from 'components/input/Input';
import Select from 'components/select/Select';
import Cards from 'components/cards/Cards';
import FlexContainer from 'styles/FlexContainer';
import Pagination from 'components/pagination/Pagination';

const CountriesView: FC = () => {
  return (
    <>
      <FlexContainer>
        <Input />
        <Select />
      </FlexContainer>
      <Cards />
      <Pagination />
    </>
  );
};

export default CountriesView;
