import { ChangeEvent } from 'react';
import { makeAutoObservable } from 'mobx';

import { MODE } from '../constants';

export type StoreType = {
  mode: keyof typeof MODE;
  searchQuery: string;
  setMode: () => void;
  // eslint-disable-next-line no-unused-vars
  setSearchQuery: (event: ChangeEvent<HTMLInputElement>) => void;
};

class Store {
  mode: keyof typeof MODE;

  searchQuery = '';

  constructor(mode: keyof typeof MODE) {
    makeAutoObservable(this);
    this.mode = mode;
  }

  setMode = () => {
    this.mode = this.mode === MODE.LIGHT ? MODE.DARK : MODE.LIGHT;
  };

  setSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    this.searchQuery = event.target.value;
  };
}

export default Store;
