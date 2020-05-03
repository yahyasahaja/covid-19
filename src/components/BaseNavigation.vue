<template>
  <div class="nav">
    <div class="button-wrapper">
      <base-switch-theme />
      <v-btn class="nav-btn" text to="/">Home</v-btn>
      <v-btn class="nav-btn" text to="/timeline">Timeline</v-btn>
    </div>
    <div class="search-wrapper">
      <v-autocomplete
        v-model="selectedCountry"
        :items="countries"
        filled
        rounded
        label="Country"
        :color="materialColor"
        hide-details
      ></v-autocomplete>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import BaseSwitchTheme from "@/components/BaseSwitchTheme.vue";
import { THEME_LIGHT } from "../config";
import { mapActions, mapState } from "vuex";
import { CountryState } from "@/store/types";

type Data = () => {
  selectedCountry: string | null;
};

export default {
  data() {
    return {
      selectedCountry: null
    };
  },
  computed: {
    materialColor() {
      const currentTheme = (this as any).$store.state.themeModule.theme;
      return currentTheme === THEME_LIGHT ? "black" : "white";
    },
    ...mapState<CountryState>("countryModule", {
      countries: (state: CountryState) => {
        return state.countries.map(country => ({
          text: country.Country,
          value: country.Slug
        }));
      }
    })
  },
  watch: {
    selectedCountry(slug: string) {
      (this as any).$store.state.countryModule.selectedCountry = slug;
      (this as any).fetchCovidData(slug);
    }
  },
  methods: {
    ...mapActions("countryModule", ["fetchCountries"]),
    ...mapActions("covidModule", ["fetchCovidData"])
  },
  mounted() {
    (this as any).fetchCountries();
    (this as any).selectedCountry = (this as any).$store.state.countryModule.selectedCountry;
  },
  components: {
    BaseSwitchTheme
  }
};
</script>

<style lang="scss">
.nav {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  padding: 20px 0;
  background-color: var(--background-color);

  .button-wrapper {
    display: flex;
    justify-content: center;

    .nav-btn {
      margin: 0 10px;
    }
  }

  .search-wrapper {
    max-width: 400px;
    margin: 10px auto;
  }
}
</style>
