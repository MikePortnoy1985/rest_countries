import { FC } from 'react';

import Button, { ButtonTitle } from 'styles/Button';
import { Arrow } from 'components/icons/Icons';

type PropsType = {
  buttonTitle?: string;
  disabled?: boolean;
  next?: boolean;
  onClick?: () => void;
  withMargin?: boolean;
};

const BackButton: FC<PropsType> = ({
  buttonTitle = '',
  disabled = false,
  next = false,
  onClick = () => {},
  withMargin = false,
}) => {
  return (
    <Button
      type="button"
      onClick={onClick}
      disabled={disabled}
      withMargin={withMargin}
    >
      <Arrow next={next} />
      {buttonTitle && <ButtonTitle>{buttonTitle}</ButtonTitle>}
    </Button>
  );
};

export default BackButton;
