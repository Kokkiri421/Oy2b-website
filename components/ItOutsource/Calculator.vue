<template>
  <div class="calculator">
    <div class="calculator__slider">
      <label for="computer-count">0</label>
      <input
        type="range"
        class="input-slider"
        id="computer-count"
        name="computer-count"
        min="0"
        max="100"
        v-model="computerCount"
      />
      <label for="computer-count">100</label>
      <input
        type="number"
        class="input-number"
        name="computer-count"
        min="0"
        max="100"
        step="1"
        v-model="computerCount"
        @input="test"
      />
    </div>
    <div class="calculator__slider">
      <label for="server-count">0</label>
      <input
        type="range"
        id="server-count"
        name="server-count"
        min="0"
        max="50"
        v-model="serverCount"
      />
      <label for="computer-count">50</label>
    </div>
    <div class="calculator__slider">
      <label for="office-equipment-count">0</label>
      <input
        type="range"
        id="office-equipment-count"
        name="office-equipment-count"
        min="0"
        max="100"
        v-model="officeEquipmentCount"
      />
      <label for="office-equipment-count">100</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      computerCount: 10,
      serverCount: 1,
      officeEquipmentCount: 5,
    }
  },
  methods: {
    test: function () {
      this.computerCount = this.computerCount.replace(/[^0-9]/g, '')
      if (this.computerCount > 100) {
        this.computerCount = 100
      }
      if (this.computerCount < 0) {
        this.computerCount = 0
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.calculator {
  &__slider {
    display: flex;
    flex-direction: row;
    align-items: center;
    .input-slider {
      flex-basis: 80%;
    }
    .input-number {
      font-family: Montserrat, sans-serif;
      font-weight: 400;
      font-size: 1em;
      width: 2em;
      height: 1.1em;
      padding: 0.25em 0.5em;
      border-radius: 6px;
      border: 1px solid #aaa;
      -moz-appearance: textfield;
      -webkit-appearance: textfield;
      text-align: center;
    }
  }
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
