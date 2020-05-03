<template>
  <div class="switch" @click="switchAllTheme">
    <font-awesome-icon icon="magic" />
  </div>
</template>

<script lang="ts">
import { mapActions } from "vuex";
import { THEME_LIGHT } from "../config";

export default {
  methods: {
    ...mapActions("themeModule", ["switchTheme"]),
    switchAllTheme() {
      const currentTheme = this.$store.state.themeModule.theme;
      this.$vuetify.theme.dark = currentTheme === THEME_LIGHT;
      this.switchTheme();
    }
  }
};
</script>

<style scoped lang="scss">
.switch {
  position: fixed;
  top: 20px;
  left: 20px;
  width: auto;
  font-size: 20pt;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.5);
  }

  &:active {
    transform: scale(1);
    opacity: 0.5;
  }
}
</style>
