import { Module, ActionTree, MutationTree } from "vuex";
import { CovidState, CovidData } from "../types";
import {
  getDataFromLocal,
  setDataToLocal,
  calculateCovidTotal,
  adjustCovidTimeline
} from "@/utils";
import { COVID_DATA_LOCAL_URI } from "@/config";
import { fetchCovidAPI } from "@/api/covidAPI";
import { RootState } from "..";

const covidState: CovidState = {
  covids: [],
  isFetchingCovidData: false,
  covidTotal: {
    Active: 0,
    Confirmed: 0,
    Deaths: 0,
    Recovered: 0,
    Country: "Loading ... ",
    Date: "Loading ... "
  }
};

const covidActions: ActionTree<CovidState, RootState> = {
  fetchCovidData: async ({ commit, rootState }) => {
    try {
      const covidDataFromLocal = getDataFromLocal<CovidData[]>(
        COVID_DATA_LOCAL_URI
      );
      if (covidDataFromLocal) {
        commit("setCovids", adjustCovidTimeline(covidDataFromLocal));
        commit("setCovidTotal", calculateCovidTotal(covidDataFromLocal));
      } else {
        commit("setIsFetchingCovidData", true);
      }

      const { data } = await fetchCovidAPI(
        rootState.countryModule.selectedCountry
      );
      commit("setCovids", adjustCovidTimeline(data));
      commit("setCovidTotal", calculateCovidTotal(data));
      setDataToLocal(COVID_DATA_LOCAL_URI, data);
    } catch (err) {
      console.log("ERROR WHILE FETCHING COUNTRIES", err);
    } finally {
      commit("setIsFetchingCovidData", false);
    }
  }
};

const covidMutations: MutationTree<CovidState> = {
  setIsFetchingCovidData: (state, loading) => {
    state.isFetchingCovidData = loading;
  },
  setCovids: (state, covids) => {
    state.covids = covids;
  },
  setCovidTotal: (state, covidTotal) => {
    state.covidTotal = covidTotal;
  }
};

export const covidModule: Module<CovidState, RootState> = {
  namespaced: true,
  state: covidState,
  actions: covidActions,
  mutations: covidMutations
};

export default covidModule;
