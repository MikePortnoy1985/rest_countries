import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import BackButton from 'components/button/Button';
import Country from 'components/country/Country';
import { BACK } from '../constants';

const CountryView: FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <>
      <BackButton buttonTitle={BACK} onClick={handleNavigate} withMargin />
      <Country />
    </>
  );
};

export default CountryView;
