import { createContext, FC } from 'react';
import Store, { StoreType } from '../store/store';

import { MODE } from '../constants';

const MobxContext = createContext<StoreType | null>(null);

export const MobxContextProvider: FC = ({ children }) => {
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MobxContext.Provider value={new Store(MODE.LIGHT)}>
      {children}
    </MobxContext.Provider>
  );
};

export default MobxContext;
