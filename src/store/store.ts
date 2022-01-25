import { makeAutoObservable } from 'mobx';
import { MODE } from '../constants';

class Store {
  mode: keyof typeof MODE = MODE.LIGHT;

  constructor() {
    makeAutoObservable(this);
  }

  setMode() {
    this.mode = this.mode === MODE.LIGHT ? MODE.DARK : MODE.LIGHT;
  }
}

export default new Store();
