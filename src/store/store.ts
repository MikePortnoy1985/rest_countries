import { makeAutoObservable } from 'mobx';
import { MODE } from '../constants';

export type StoreType = {
  mode: keyof typeof MODE;
  setMode: () => void;
};

class Store {
  mode: keyof typeof MODE;

  constructor(mode: keyof typeof MODE) {
    makeAutoObservable(this);
    this.mode = mode;
  }

  setMode() {
    this.mode = this.mode === MODE.LIGHT ? MODE.DARK : MODE.LIGHT;
  }
}

export default Store;
