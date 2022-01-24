import { FC, useState } from 'react';
import { ToggleContainer, Toggle, Track, Thumb } from 'styles/ThemeToggle';

import { MODE, LABEL } from '../../constants';

const AppToggle: FC = () => {
  const [mode, setMode] = useState<keyof typeof MODE>(MODE.LIGHT);

  const handleChecked = () => {
    setMode((prevMode) => (prevMode === MODE.LIGHT ? MODE.DARK : MODE.LIGHT));
  };

  const handleTouchChecked = () => {
    setMode((prevMode) => (prevMode === MODE.LIGHT ? MODE.DARK : MODE.LIGHT));
  };

  return (
    <ToggleContainer>
      <Toggle
        id="toggle"
        onClick={handleChecked}
        onTouchMove={handleTouchChecked}
      >
        <Track mode={mode} />
        <Thumb mode={mode} />
      </Toggle>
      <label htmlFor="toggle">
        {mode === MODE.LIGHT ? LABEL.LIGHT : LABEL.DARK}
      </label>
    </ToggleContainer>
  );
};

export default AppToggle;
