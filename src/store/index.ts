import Vue from "vue";
import Vuex, { Store } from "vuex";
import { themeModule } from "./modules/theme";
import { countryModule } from "./modules/country";
import { covidModule } from "./modules/covid";
import { ThemeState, CountryState, CovidState } from "./types";

Vue.use(Vuex);

export type RootState = {
  themeModule: ThemeState;
  countryModule: CountryState;
  covidModule: CovidState;
};

export const store: Store<RootState> = new Vuex.Store({
  modules: {
    themeModule,
    countryModule,
    covidModule
  }
});

declare global {
  interface Window {
    store: typeof store;
  }
}

// eslint-disable-next-line
window.store = store;

export default store;
