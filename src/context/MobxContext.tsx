import { createContext, FC, useMemo } from 'react';

import Store, { StoreType } from '../store/store';
import { MODE } from '../constants';

const MobxContext = createContext<StoreType | null>(null);

export const MobxContextProvider: FC = ({ children }) => {
  const store = useMemo(() => new Store(MODE.LIGHT), []);
  return <MobxContext.Provider value={store}>{children}</MobxContext.Provider>;
};

export default MobxContext;
