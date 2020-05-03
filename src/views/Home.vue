<template>
  <div class="home">
    <h1>Covid-19 Tracking</h1>
    <div class="data-wrapper">
      <div class="main-data">
        <BaseDataViewer large label="Confirmed" :value="covidTotal.Confirmed" />
      </div>
      <div class="second-data">
        <BaseDataViewer label="Recovered" :value="covidTotal.Recovered" />
        <BaseDataViewer label="Deaths" :value="covidTotal.Deaths" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BaseDataViewer from "@/components/BaseDataViewer.vue";
import { mapState } from "vuex";
import { CovidState } from "@/store/types";

export default {
  name: "Home",
  computed: mapState<CovidState>("covidModule", {
    covidTotal: (state: CovidState) => state.covidTotal
  }),
  components: {
    BaseDataViewer
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  height: calc(100vh - 155px);
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    text-align: center;
    font-weight: bold;
    margin-bottom: 40px;
  }

  .data-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 350px;
    height: 350px;
    border-radius: 500px;
    border: 2px dashed;

    .main-data,
    .second-data {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
