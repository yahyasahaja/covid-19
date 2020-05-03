import { THEME_LIGHT, THEME_DARK } from "@/config";

export interface ThemeState {
  theme: typeof THEME_DARK | typeof THEME_LIGHT;
}

//COUNTRY
export interface Country {
  Country: string;
  Slug: string;
}

export interface CountryState {
  countries: Country[];
  isFetchingCountries: boolean;
  selectedCountry: string;
}

//COVID_DATA
export interface CovidData {
  Country: string;
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Active: number;
  Date: string;
}

export interface CovidState {
  covidTotal: CovidData;
  covids: CovidData[];
  isFetchingCovidData: boolean;
}
