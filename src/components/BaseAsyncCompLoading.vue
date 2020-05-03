<template>
  <div class="async-loading">
    <v-progress-linear
      :height="'10px'"
      indeterminate
      color="primary"
    ></v-progress-linear>
  </div>
</template>

<style scoped>
.async-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
</style>
