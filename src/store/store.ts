import { makeAutoObservable } from 'mobx';

import { MODE, BASE_URL, WORLD, ProcessEnum } from '../constants';

export interface Aym {
  official: string;
  common: string;
}

export interface Que {
  official: string;
  common: string;
}

export interface Spa {
  official: string;
  common: string;
}

export interface NativeName {
  aym: Aym;
  que: Que;
  spa: Spa;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface PEN {
  name: string;
  symbol: string;
}

export interface Currencies {
  PEN: PEN;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  aym: string;
  que: string;
  spa: string;
}

export interface Ara {
  official: string;
  common: string;
}

export interface Ces {
  official: string;
  common: string;
}

export interface Cym {
  official: string;
  common: string;
}

export interface Deu {
  official: string;
  common: string;
}

export interface Est {
  official: string;
  common: string;
}

export interface Fin {
  official: string;
  common: string;
}

export interface Fra {
  official: string;
  common: string;
}

export interface Hrv {
  official: string;
  common: string;
}

export interface Hun {
  official: string;
  common: string;
}

export interface Ita {
  official: string;
  common: string;
}

export interface Jpn {
  official: string;
  common: string;
}

export interface Kor {
  official: string;
  common: string;
}

export interface Nld {
  official: string;
  common: string;
}

export interface Per {
  official: string;
  common: string;
}

export interface Pol {
  official: string;
  common: string;
}

export interface Por {
  official: string;
  common: string;
}

export interface Rus {
  official: string;
  common: string;
}

export interface Slk {
  official: string;
  common: string;
}

export interface Spa2 {
  official: string;
  common: string;
}

export interface Swe {
  official: string;
  common: string;
}

export interface Urd {
  official: string;
  common: string;
}

export interface Zho {
  official: string;
  common: string;
}

export interface Translations {
  ara: Ara;
  ces: Ces;
  cym: Cym;
  deu: Deu;
  est: Est;
  fin: Fin;
  fra: Fra;
  hrv: Hrv;
  hun: Hun;
  ita: Ita;
  jpn: Jpn;
  kor: Kor;
  nld: Nld;
  per: Per;
  pol: Pol;
  por: Por;
  rus: Rus;
  slk: Slk;
  spa: Spa2;
  swe: Swe;
  urd: Urd;
  zho: Zho;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Fra2 {
  f: string;
  m: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Fra2;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Gini {
  2019: number;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface Flags {
  png: string;
  svg: string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface PostalCode {
  format: string;
  regex: string;
}

export type CountryType = {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
};

type CountryDescriptionType = {
  'Common Name': string;
  Population: number;
  Region: string;
  'Sub Region': string;
  Capital: string;
  'Top Level Domain': string;
  Currencies: string;
  Languages: string;
};

export type StoreType = {
  mode: keyof typeof MODE;
  countries: Array<CountryType>;
  countriesToRender: Array<CountryType>;
  selectedCountry: CountryType;
  process: ProcessEnum;
  searchQuery: string;
  error: string;
  setMode: () => void;
  getCountries: () => void;
  filterRegions: (filter: string) => void;
  findCountry: (query: string) => void;
  setSearchQuery: (query: string) => void;
  setCountries: (newResult: Array<CountryType>) => void;
  setCountriesForRender: (newResult: Array<CountryType>) => void;
  setSelectedCountry: (countryName: string) => void;
  getCountryDescription: () => CountryDescriptionType;
  getCountryByCioc: (cioc: string) => string;
};

class Store {
  public mode: keyof typeof MODE;

  public searchQuery = '';

  public countries: Array<CountryType> = [];

  public countriesToRender: Array<CountryType> = [];

  public process = ProcessEnum.INITIAL;

  public selectedCountry = {} as CountryType;

  public error = '';

  constructor(mode: keyof typeof MODE) {
    makeAutoObservable(this);
    this.mode = mode;
  }

  setMode = () => {
    this.mode = this.mode === MODE.LIGHT ? MODE.DARK : MODE.LIGHT;
  };

  setSearchQuery = (query: string, filterActive?: boolean) => {
    this.searchQuery = query;
    if (!query && !filterActive) {
      this.setCountriesForRender(this.countries);
    }
  };

  setProcess = (process: ProcessEnum) => {
    this.process = process;
  };

  setCountries = (newResult: Array<CountryType>) => {
    this.countries = newResult;
  };

  setCountriesForRender = (newCountries: Array<CountryType>) => {
    this.countriesToRender = newCountries;
  };

  getCountries = () => {
    this.setProcess(ProcessEnum.REQUESTED);
    return fetch(`${BASE_URL}/all`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.status) {
          this.setProcess(ProcessEnum.FAILED);
          this.error = response.message;
          return;
        }
        this.setCountries(response);
        this.setCountriesForRender(response);
        this.setProcess(ProcessEnum.SUCCEEDED);
      });
  };

  filterRegions = async (filter: string) => {
    if (filter === WORLD) {
      this.setCountriesForRender(this.countries);
      return;
    }
    const newCountries = this.countries.filter(
      (country) => country.region.toLowerCase() === filter.toLowerCase(),
    );
    this.setCountriesForRender(newCountries);
    if (this.searchQuery) {
      this.setSearchQuery('', true);
    }
  };

  findCountry = async (searchQuery: string) => {
    const newCountries = this.countries.filter((country) => {
      return (
        country.name.common
          .toLocaleLowerCase()
          .startsWith(searchQuery.toLowerCase()) ||
        country.name.official
          .toLocaleLowerCase()
          .startsWith(searchQuery.toLowerCase())
      );
    });
    this.setCountriesForRender(newCountries);
  };

  setSelectedCountry = (countryName: string) => {
    const country = this.countries.find(
      (item) => item.name.official === countryName,
    );
    if (country) {
      this.selectedCountry = country;
    }
  };

  getCountryDescription = (): CountryDescriptionType => {
    return {
      'Common Name': this.selectedCountry.name.common,
      Population: this.selectedCountry.population,
      Region: this.selectedCountry.region,
      'Sub Region': this.selectedCountry.subregion,
      Capital: this.selectedCountry.capital.join(', '),
      'Top Level Domain': this.selectedCountry.tld.join(', '),
      Currencies: Object.keys(this.selectedCountry.currencies).join(', '),
      Languages: Object.values(this.selectedCountry.languages).join(', '),
    };
  };

  getCountryByCioc = (cioc: string) => {
    const countryForRedirect = this.countries.find(
      (ctry) => ctry.cioc === cioc,
    );
    if (countryForRedirect) {
      this.setSelectedCountry(countryForRedirect.name.official);
    }
    return countryForRedirect?.name.official ?? '';
  };
}

export default Store;
