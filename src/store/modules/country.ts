import { Module, ActionTree, MutationTree } from "vuex";
import { CountryState, CovidData } from "../types";
import { getDataFromLocal, setDataToLocal } from "@/utils";
import { COUNTRIES_LOCAL_URI } from "@/config";
import { fetchCountryAPI } from "@/api/covidAPI";
import { RootState } from "..";

const countryState: CountryState = {
  countries: [],
  isFetchingCountries: false,
  selectedCountry: "indonesia"
};

const countryActions: ActionTree<CountryState, RootState> = {
  fetchCountries: async ({ commit }) => {
    try {
      const countriesFromLocal = getDataFromLocal<CovidData[]>(
        COUNTRIES_LOCAL_URI
      );
      if (countriesFromLocal) {
        commit("setCountries", countriesFromLocal);
      } else {
        commit("setIsFetchingCountries", true);
      }

      const { data } = await fetchCountryAPI();
      commit("setCountries", data);
      setDataToLocal(COUNTRIES_LOCAL_URI, data);
    } catch (err) {
      console.log("ERROR WHILE FETCHING COUNTRIES", err);
    } finally {
      commit("setIsFetchingCountries", false);
    }
  }
};

const countryMutations: MutationTree<CountryState> = {
  setIsFetchingCountries: (state, loading) => {
    state.isFetchingCountries = loading;
  },
  setCountries: (state, countries) => {
    state.countries = countries;
  },
  setSelectedCountry: (state, selectedCountry) => {
    state.selectedCountry = selectedCountry;
  }
};

export const countryModule: Module<CountryState, RootState> = {
  namespaced: true,
  state: countryState,
  actions: countryActions,
  mutations: countryMutations
};

export default countryModule;
