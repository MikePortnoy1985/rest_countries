import { FC } from 'react';

import BackButton from 'components/backButton/BackButton';
import Country from 'components/country/Country';

const CountryView: FC = () => {
  return (
    <>
      <BackButton />
      <Country />
    </>
  );
};

export default CountryView;
