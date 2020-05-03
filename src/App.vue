<template>
  <v-app>
    <div id="app" :class="{ light: isLight, dark: isDark }">
      <BaseNavigation />
      <div class="router-wrapper">
        <router-view />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import { mapState } from "vuex";
import { ThemeState } from "@/store/types";
import { THEME_LIGHT, THEME_DARK } from "./config";
import BaseNavigation from "@/components/BaseNavigation.vue";

export default {
  computed: mapState<ThemeState>("themeModule", {
    isLight: (state: ThemeState) => state.theme === THEME_LIGHT,
    isDark: (state: ThemeState) => state.theme === THEME_DARK
  }),
  components: {
    BaseNavigation
  }
};
</script>

<style lang="scss" scoped>
.router-wrapper {
  padding-top: 155px;
  min-height: 100vh;
}
</style>

<style lang="scss">
#app {
  --light-color: #fafafa;
  --dark-color: #333333;
}

/* variables */
#app.light {
  --background-color: var(--light-color);
  --background-image: url("/img/bg-light.png");
  --text-color: var(--dark-color);
}

#app.dark {
  --background-color: var(--dark-color);
  --background-image: url("/img/bg-dark.png");
  --text-color: var(--light-color);
}

#app {
  background: var(--background-image);
  background-color: var(--background-color);
  color: var(--text-color);
  transition: 0.3s;
  min-height: 100vh;

  a,
  a:visited {
    color: var(--text-color);
    transition: 0.3s;
  }
}
</style>
