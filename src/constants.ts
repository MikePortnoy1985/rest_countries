type RegionsType = {
  id: string;
  region: string;
};

export const MODE = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
} as const;

export const LABEL = {
  LIGHT: 'Dark mode',
  DARK: 'Light Mode',
};

export const TITLE_TEXT = 'Where in the world?';

export const INPUT_PLACEHOLDER = 'Search for a country...';

export const SELECT_PLACEHOLDER = 'Filter by region';

export const REGIONS: Array<RegionsType> = [
  { id: '001', region: 'Africa' },
  { id: '002', region: 'Americas' },
  { id: '003', region: 'Asia' },
  { id: '004', region: 'Europe' },
  { id: '005', region: 'Oceania' },
  { id: '006', region: 'World' },
];

export const WORLD = REGIONS[REGIONS.length - 1].region;

export const COUNTRY_INFO = {
  POPULATION: 'Population',
  REGION: 'Region',
  CAPITAL: 'Capital',
};

export const BASE_URL = 'https://restcountries.com/v3.1';

export enum ProcessEnum {
  INITIAL = 'initial',
  REQUESTED = 'requested',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

export const BACK = 'Back';

export const BORDER_COUNTRIES = 'Border Countries';
