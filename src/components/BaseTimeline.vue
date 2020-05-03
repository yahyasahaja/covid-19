<template>
  <div class="timeline">
    <div
      class="timeline-item"
      v-for="(item, i) in items"
      :style="{
        fontSize: `${calculateFontSize(i, items.length, 0, 12, 10)}pt`
      }"
      :key="i"
    >
      <div class="item-left">
        {{ item.Date }}
      </div>

      <div class="item-right">
        <div class="detail confirmed">Confirmed: {{ item.Confirmed }}</div>
        <div class="detail">Active: {{ item.Active }}</div>
        <div class="detail">Recovered: {{ item.Recovered }}</div>
        <div class="detail">Deaths: {{ item.Deaths }}</div>
        <div class="dot" />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    calculateFontSize(cur, max, min, maxFontSize, minFontSize) {
      const percent = (cur - min) / (max - min);
      return (1 - percent) * (maxFontSize - minFontSize) + minFontSize;
    }
  }
});
</script>

<style lang="scss" scoped>
.timeline {
  width: 100%;

  .timeline-item {
    width: 100%;
    display: flex;
    transition: 0.3s;
    border-radius: 100px;

    @media (min-width: 480px) {
      &:hover {
        background: rgba(103, 103, 103, 0.2);
      }
    }

    .item-left,
    .item-right {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 30px;
      padding-top: 10px;
      padding-bottom: 50px;
    }

    &:first-child {
      .item-left,
      .item-right {
        padding-top: 0;
      }
    }

    &:last-child {
      .item-right {
        border-left: 2px dashed;
      }
    }

    .item-left {
      align-items: flex-end;
      font-weight: bold;
    }

    .item-right {
      border-left: 2px solid;
      align-items: flex-start;
      position: relative;
      min-width: 200px;

      .dot {
        position: absolute;
        left: -9px;
        width: 15px;
        height: 15px;
        border-radius: 100px;
        background: var(--text-color);
      }

      .detail {
        font-weight: 300;
      }

      .confirmed {
        font-weight: bold;
      }
    }
  }
}
</style>
