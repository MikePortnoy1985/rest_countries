import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import {
  IconWrapper,
  Label,
  Thumb,
  Track,
  Toggle,
  ToggleContainer,
} from 'styles/ThemeToggle';
import { Moon } from 'components/icons/Icons';

import useStore from '../../hooks/useStore';
import { MODE, LABEL } from '../../constants';

const AppToggle: FC = observer(() => {
  const store = useStore();
  const handleChecked = () => {
    store?.setMode();
  };

  const handleTouchChecked = () => {
    store?.setMode();
  };

  return (
    <ToggleContainer>
      <Toggle
        id="toggle"
        onClick={handleChecked}
        onTouchMove={handleTouchChecked}
      >
        <Track mode={store?.mode} />
        <Thumb mode={store?.mode} />
      </Toggle>
      <IconWrapper>
        <Moon />
      </IconWrapper>
      <Label htmlFor="toggle">
        {store?.mode === MODE.LIGHT ? LABEL.LIGHT : LABEL.DARK}
      </Label>
    </ToggleContainer>
  );
});

export default AppToggle;
