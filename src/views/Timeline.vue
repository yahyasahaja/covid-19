<template>
  <div class="container">
    <base-timeline :items="covids" />
  </div>
</template>

<script lang="ts">
import BaseTimeline from "@/components/BaseTimeline.vue";
import { mapState } from "vuex";
import { CovidState } from "@/store/types";

export default {
  computed: mapState<CovidState>("covidModule", {
    covids: (state: CovidState) => state.covids
  }),
  components: {
    BaseTimeline
  }
};
</script>

<style>
.container {
  display: block;
  padding-top: 30px;
}
</style>
