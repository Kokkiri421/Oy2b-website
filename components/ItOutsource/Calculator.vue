<template>
  <div class="calculator wrapper">
    <div class="calculator-form page-content-block">
      <h4>
        Калькулятор IT&nbsp;Аутсорсинга
        <span class="dn-600">в Санкт-Петербурге</span>
      </h4>
      <div class="calculator-form__data" :style="chromeProgress">
        <div class="calculator-type">
          <div class="calculator-type__header">
            Сколько у вас в компании компьютеров
          </div>
          <div class="calculator-type__slider">
            <label class="input-label" for="computer-count">0</label>
            <input
              type="range"
              class="input-slider computer-count"
              id="computer-count"
              name="computer-count"
              min="0"
              max="100"
              v-model="computerCount"
            />
            <label class="input-label" for="computer-count">100</label>
            <input
              type="number"
              class="input-number"
              name="computer-count"
              min="0"
              max="100"
              step="1"
              v-model="computerCount"
              @change="test"
            />
          </div>
        </div>
        <div class="calculator-type">
          <div class="calculator-type__header">
            Сколько у вас в компании серверов
          </div>
          <div class="calculator-type__slider">
            <label class="input-label" for="server-count">0</label>
            <input
              type="range"
              id="server-count"
              class="input-slider server-count"
              name="server-count"
              min="0"
              max="50"
              v-model="serverCount"
            />
            <label class="input-label" for="computer-count">50</label>
            <input
              type="number"
              class="input-number"
              name="computer-count"
              min="0"
              max="50"
              step="1"
              v-model="serverCount"
              @change="test"
            />
          </div>
        </div>
        <div class="calculator-type">
          <div class="calculator-type__header">
            Сколько у вас в компании оргтехники
          </div>
          <div class="calculator-type__slider">
            <label class="input-label" for="office-equipment-count">0</label>
            <input
              type="range"
              class="input-slider office-equipment-count"
              id="office-equipment-count"
              name="office-equipment-count"
              min="0"
              max="100"
              v-model="officeEquipmentCount"
            />
            <label class="input-label" for="office-equipment-count">100</label>
            <input
              type="number"
              class="input-number"
              name="computer-count"
              min="0"
              max="100"
              step="1"
              v-model="officeEquipmentCount"
              @change="test"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Ratio from '~/components/ItOutsource/Ratio'
export default {
  data() {
    return {
      computerCount: 10,
      serverCount: 1,
      officeEquipmentCount: 5,
      currentRatio: 2,
      recolorProgressChrome: {
        background: 'red',
      },
    }
  },
  components: { Ratio },
  computed: {
    chromeProgress() {
      return {
        '--computer-progress': `${this.computerCount}%`,
        '--server-progress': `${this.serverCount * 2}%`,
        '--office-equipment-progress': `${this.officeEquipmentCount}%`,
      }
    },
  },
  methods: {
    changeRatio: function (ratio) {
      this.currentRatio = ratio

      this.scrollToRatio(3, this.currentRatio)
    },
    scrollToRatio: function (count, number) {
      this.$refs['expert'].scrollLeft =
        (this.$refs['expert'].clientWidth * number) / count
    },
    test: function (e) {
      console.log(e.target.value)
      e.target.value = e.target.value.replace(/[^0-9]/g, '')
      if (e.target.value > 100) {
        e.target.value = 100
      } else if (e.target.value < 0) {
        e.target.value = 0
      }
      this.computerCount = e.target.value
    },
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';

.calculator-form {
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 20%);
  padding: 30px;
  border-radius: 6px;
  @include _600() {
    padding: 20px;
  }
  &__data {
    margin-top: 1em;
  }
}
.calculator-type {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2em;
  @include _900() {
    flex-direction: column;
    margin-bottom: 1em;
  }
  &:nth-last-child(-n + 1) {
    margin-bottom: 1em;
  }
  &__header {
    min-width: 350px;
    margin-right: 3em;
    @include _600() {
      font-size: 0.8em;
      min-width: auto;
    }
  }
  &__slider {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    .input-slider {
      flex-grow: 1;
      margin: 0 1em;
    }
    .input-label {
      color: #aaa;
      &:nth-child(n + 2) {
        min-width: 1.5em;
        text-align: left;
        margin-right: 1em;
      }
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
    .computer-count[type='range']::-webkit-slider-runnable-track {
      background: linear-gradient(
        to right,
        #009ee3 0%,
        #009ee3 var(--computer-progress),
        #fff var(--computer-progress),
        #fff 100%
      );
    }

    .server-count[type='range']::-webkit-slider-runnable-track {
      background: linear-gradient(
        to right,
        #009ee3 0%,
        #009ee3 var(--server-progress),
        #fff var(--server-progress),
        #fff 100%
      );
    }

    .office-equipment-count[type='range']::-webkit-slider-runnable-track {
      background: linear-gradient(
        to right,
        #009ee3 0%,
        #009ee3 var(--office-equipment-progress),
        #fff var(--office-equipment-progress),
        #fff 100%
      );
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
// range styling
input[type='range'] {
  border-radius: 6px;
  width: 100%;
  margin: 4px 0;
  background-color: transparent;
  -webkit-appearance: none;
}
input[type='range']:focus {
  outline: none;
}
input[type='range']::-webkit-slider-runnable-track {
  border: 2px solid #7dd7ff;
  border-radius: 6px;
  width: 100%;
  height: 6px;
  cursor: pointer;
}
input[type='range']::-webkit-slider-thumb {
  margin-top: -6px;
  width: 14px;
  height: 14px;
  background: #009ee3;

  border-radius: 14px;
  cursor: pointer;
  -webkit-appearance: none;
}
input[type='range']::-moz-range-track {
  background: #ffffff;
  border: 2px solid #7dd7ff;
  border-radius: 6px;
  width: 100%;
  height: 2px;
  cursor: pointer;
}
input[type='range']::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: #009ee3;
  border: 0px solid rgba(0, 0, 0, 0);
  border: 0;
  border-radius: 14px;
  cursor: pointer;
}
input[type='range']::-ms-track {
  background: transparent;
  border-color: transparent;
  border-width: 4px 0;
  color: transparent;
  width: 100%;
  height: 6px;
  cursor: pointer;
}
input[type='range']::-ms-fill-lower {
  background: #fafafa;
  border: 2px solid #7dd7ff;
  border-radius: 12px;
}
input[type='range']::-ms-fill-upper {
  background: #ffffff;
  border: 2px solid #7dd7ff;
  border-radius: 12px;
}
input[type='range']::-ms-thumb {
  width: 14px;
  height: 14px;
  background: #009ee3;
  border: 0px solid rgba(0, 0, 0, 0);
  border: 0;
  border-radius: 14px;
  cursor: pointer;
  margin-top: 0px;
  /*Needed to keep the Edge thumb centred*/
}
input[type='range']:focus::-ms-fill-lower {
  background: #ffffff;
}
input[type='range']:focus::-ms-fill-upper {
  background: #ffffff;
}
@supports (-ms-ime-align: auto) {
  /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
  input[type='range'] {
    margin: 0;
    /*Edge starts the margin from the thumb, not the track as other browsers do*/
  }
}
/** FF*/
input[type='range']::-moz-range-progress {
  background-color: #009ee3;
}
input[type='range']::-moz-range-track {
  background-color: #fff;
}
/* IE*/
input[type='range']::-ms-fill-lower {
  background-color: #009ee3;
}
input[type='range']::-ms-fill-upper {
  background-color: #fff;
}
</style>
