import { Module, ActionTree, MutationTree } from "vuex";
import { THEME_DARK, THEME_LIGHT } from "@/config";
import { ThemeState } from "../types";
import { RootState } from "..";

const themeState: ThemeState = {
  theme: THEME_DARK
};

const themeActions: ActionTree<ThemeState, RootState> = {
  switchTheme: ({ commit, state }) => {
    commit("setTheme", state.theme === THEME_DARK ? THEME_LIGHT : THEME_DARK);
  }
};

const themeMutations: MutationTree<ThemeState> = {
  setTheme: (state, theme) => {
    state.theme = theme;
  }
};

export const themeModule: Module<ThemeState, RootState> = {
  namespaced: true,
  state: themeState,
  actions: themeActions,
  mutations: themeMutations
};

export default themeModule;
