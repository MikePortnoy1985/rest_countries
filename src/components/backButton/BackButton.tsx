import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Button, { ButtonTitle } from 'styles/BackButton';
import { Arrow } from 'components/icons/Icons';

import { BACK } from '../../constants';

const BackButton: FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };
  return (
    <Button type="button" onClick={handleNavigate}>
      <Arrow />
      <ButtonTitle>{BACK}</ButtonTitle>
    </Button>
  );
};

export default BackButton;
