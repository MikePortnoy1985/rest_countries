import { useLayoutEffect, useState } from 'react';

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth));

    return () => {
      window.removeEventListener('resize', () =>
        setScreenWidth(window.innerWidth),
      );
    };
  }, []);

  return Number(screenWidth);
};

export default useScreenWidth;
