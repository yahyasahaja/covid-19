<template>
  <div class="container" :class="{ large }">
    <div class="label">
      {{ label }}
    </div>
    <div class="value">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: Number,
      default: 0
    },
    large: {
      type: Boolean,
      default: false
    }
  },
  name: "BaseDataViewer"
};
</script>

<style scoped lang="scss">
.container {
  display: block;
  margin: 10px 20px;
  transition: 0.3s;

  .label,
  .value {
    text-align: center;
  }

  .label {
    font-size: 12pt;
  }

  .value {
    font-size: 15pt;
    font-weight: bold;
  }

  &:hover {
    transform: scale(1.5);
  }
}

.container.large {
  .value {
    font-size: 25pt;
    font-weight: bold;
  }
}
</style>
