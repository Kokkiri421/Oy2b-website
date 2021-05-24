<template>
  <div class="calculator">
    <div class="calculator__content">
      <div class="calculator__container">
        <div class="calculator-form">
          <h4>
            Калькулятор IT&nbsp;Аутсорсинга
            <span class="dn-600">в Санкт&#8209;Петербурге</span>
          </h4>
          <div class="calculator-form__data" :style="chromeProgress">
            <div class="calculator-type">
              <div class="calculator-type__header">Рабочие места</div>
              <div class="calculator-type__slider">
                <input
                  type="number"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  class="input-number input-label"
                  name="computer-count"
                  min="0"
                  max="100"
                  step="1"
                  :value="computerCount"
                  @change="changeComputerCount($event, 100)"
                />
                <input
                  type="range"
                  class="input-slider computer-count"
                  id="computer-count"
                  name="computer-count"
                  min="0"
                  max="100"
                  :value="computerCount"
                  @input="changeComputerCount($event, 100)"
                />
                <label class="input-label" for="computer-count">100</label>
              </div>
            </div>
            <div class="calculator-type">
              <div class="calculator-type__header">Сервера</div>
              <div class="calculator-type__slider">
                <input
                  type="number"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  class="input-number input-label"
                  name="computer-count"
                  min="0"
                  max="50"
                  step="1"
                  :value="serverCount"
                  @input="changeServerCount($event, 50)"
                />
                <input
                  type="range"
                  id="server-count"
                  class="input-slider server-count"
                  name="server-count"
                  min="0"
                  max="50"
                  :value="serverCount"
                  @input="changeServerCount($event, 50)"
                />
                <label class="input-label" for="computer-count">50</label>
              </div>
            </div>
            <div class="calculator-type">
              <div class="calculator-type__header">Виртуальные сервера</div>
              <div class="calculator-type__slider">
                <input
                  type="number"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  class="input-number input-label"
                  name="virtual-server-count"
                  min="0"
                  max="50"
                  step="1"
                  :value="virtualServerCount"
                  @input="changeVirtualServerCount($event, 50)"
                />
                <input
                  type="range"
                  id="virtual-server-count"
                  class="input-slider virtual-server-count"
                  name="virtual-server-count"
                  min="0"
                  max="50"
                  :value="virtualServerCount"
                  @input="changeVirtualServerCount($event, 50)"
                />
                <label class="input-label" for="computer-count">50</label>
              </div>
            </div>
            <div class="calculator-type">
              <div class="calculator-type__header">
                Управляемое сетевое оборудование
              </div>
              <div class="calculator-type__slider">
                <input
                  type="number"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  class="input-number input-label"
                  name="net-count"
                  min="0"
                  max="50"
                  step="1"
                  :value="netCount"
                  @input="changeNetCount($event, 50)"
                />
                <input
                  type="range"
                  id="net-count"
                  class="input-slider net-count"
                  name="net-count"
                  min="0"
                  max="50"
                  :value="netCount"
                  @input="changeNetCount($event, 50)"
                />
                <label class="input-label" for="computer-count">50</label>
              </div>
            </div>
            <div class="calculator-type">
              <div class="calculator-type__header">Точки доступа</div>
              <div class="calculator-type__slider">
                <input
                  type="number"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  class="input-number input-label"
                  name="computer-count"
                  min="0"
                  max="100"
                  step="1"
                  :value="officeEquipmentCount"
                  @input="changeOfficeEquipmentCount($event, 100)"
                />
                <input
                  type="range"
                  class="input-slider office-equipment-count"
                  id="office-equipment-count"
                  name="office-equipment-count"
                  min="0"
                  max="100"
                  :value="officeEquipmentCount"
                  @input="changeOfficeEquipmentCount($event, 100)"
                />
                <label class="input-label" for="office-equipment-count"
                  >100</label
                >
              </div>
            </div>
            <!-- <div class="calculator-type">
              <div class="calculator-type__header">IP телефоны</div>
              <div class="calculator-type__slider">
                <input
                  type="number"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  class="input-number input-label"
                  name="phone-count"
                  min="0"
                  max="100"
                  step="1"
                  :value="phoneCount"
                  @input="changePhoneCount($event, 100)"
                />
                <input
                  type="range"
                  class="input-slider phone-count"
                  id="phone-count"
                  name="phone-count"
                  min="0"
                  max="100"
                  :value="phoneCount"
                  @input="changePhoneCount($event, 100)"
                />
                <label class="input-label" for="office-equipment-count"
                  >100</label
                >
              </div>
            </div> -->

            <div class="calculator-type switches">
              <div class="calculator-type switch-type">
                <div class="calculator-type__header">
                  Обслуживание видеонаблюдения
                </div>
                <label class="calculator-type__switch">
                  <input type="checkbox" :checked="cctv" @click="changeCCTV" />
                  <span class="slider round"></span>
                </label>
              </div>
              <!-- <div class="calculator-type switch-type">
                <div class="calculator-type__header">Точки доступа</div>
                <label class="calculator-type__switch">
                  <input
                    type="checkbox"
                    :checked="accessPoints"
                    @click="changeAccessPoints"
                  />
                  <span class="slider round"></span>
                </label>
              </div> -->
            </div>
          </div>
        </div>
      </div>

      <ratio-form
        :basic-price="basicPrice"
        :sysadmin-price="sysadminPrice"
        :standard-price="standardPrice"
        :is-server="serverCount > 0"
        :discount="discount"
        :sysadminCount="sysadminCount"
        :calculator-info="getCalculatorInfo"
      ></ratio-form>
      <div class="calculator__privacy">
        <p class="privacy">
          *Минимальная стоимость обслуживания - 5000р&nbsp;в&nbsp;месяц
        </p>
        <p class="privacy">
          **Конечная стоимость рассчитывается на&nbsp;основании
          технического&nbsp;аудита
        </p>
        <p class="privacy">***Видеонаблюдение рассчитывается отдельно</p>
        <p class="privacy">****В обслуживание рабочих мест входит настройка Оргтехники и IP Телефонных аппаратов</p>
      </div>
    </div>
  </div>
</template>

<script>
import Ratio from '~/components/ItOutsource/Ratio'
import RatioForm from '~/components/ItOutsource/RatioForm'
export default {
  data() {
    return {
      // computerCount: 10,
      // serverCount: 1,
      // officeEquipmentCount: 5,
    }
  },
  props: {
    computerCount: { type: Number, required: true },
    serverCount: { type: Number, required: true },
    virtualServerCount: { type: Number, required: true },
    netCount: { type: Number, required: true },
    officeEquipmentCount: { type: Number, required: true },
    phoneCount: { type: Number, required: true },
    cctv: { type: Boolean, required: true },
    accessPoints: { type: Boolean, required: true },
    changeComputerCount: { type: Function, required: true },
    changeServerCount: { type: Function, required: true },
    changeVirtualServerCount: { type: Function, required: true },
    changeNetCount: { type: Function, required: true },
    changeOfficeEquipmentCount: { type: Function, required: true },
    changePhoneCount: { type: Function, required: true },
    changeCCTV: { type: Function, required: true },
    changeAccessPoints: { type: Function, required: true },
    basicPrice: { type: Number, required: true },
    standardPrice: { type: Number, required: true },
    sysadminPrice: { type: Number, required: true },
    sysadminCount: { type: Number, required: true },
    discount: { type: Number, required: true },
  },
  components: { Ratio, RatioForm },
  computed: {
    chromeProgress() {
      return {
        '--computer-progress': `${this.computerCount}%`,
        '--server-progress': `${this.serverCount * 2}%`,
        '--virtual-server-progress': `${this.virtualServerCount * 2}%`,
        '--net-progress': `${this.netCount * 2}%`,
        '--office-equipment-progress': `${this.officeEquipmentCount}%`,
        '--phone-progress': `${this.phoneCount}%`,
      }
    },
    getCalculatorInfo() {
      return {
        computerCount: this.computerCount,
        serverCount: this.serverCount,
        virtualServerCount: this.virtualServerCount,
        officeEquipmentCount: this.officeEquipmentCount,
        phoneCount: this.phoneCount,
        netCount: this.netCount,
        cctv: this.cctv,
        accessPoints: this.accessPoints,
      }
    },
    // basicPrice() {
    //   return (
    //     this.computerCount * 600 +
    //     this.serverCount * 1500 +
    //     this.officeEquipmentCount * 200
    //   )
    // },
    // standardPrice() {
    //   return (
    //     this.computerCount * 750 +
    //     this.serverCount * 1800 +
    //     this.officeEquipmentCount * 300
    //   )
    // },
    // expertPrice() {
    //   return (
    //     this.computerCount * 900 +
    //     this.serverCount * 2200 +
    //     this.officeEquipmentCount * 300
    //   )
    // },
  },
  methods: {},
  mounted() {},
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/colors';
.calculator {
  &__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    @include _1300() {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  &__calculator {
    order: 3;
    flex-basis: 100%;
  }
  &__container {
    flex-grow: 1;
  }
  &__privacy {
    margin-top: 1em;
    @include _1300() {
      margin-bottom: 1em;
    }
    .privacy {
      font-size: 0.8em;
      color: #00000085;

      @include _600() {
        font-size: 0.7em;
      }
    }
  }
}
.calculator-form {
  //box-shadow: 0 0 20px 0 rgb(0 0 0 / 20%);
  background: #fff;
  box-sizing: border-box;
  padding: 1em;
  border-radius: 6px;
  height: 452px;
  flex-grow: 1;
  margin-right: 1em;
  @include _1300() {
    margin-right: 0;
    margin-bottom: 1em;
    height: min-content;
  }
  @include _600() {
    padding: 20px;
  }
  &__data {
    margin-top: 2em;
  }
}
.calculator-type {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.6em;
  @include _1300() {
    flex-direction: column;
    margin-bottom: 1em;
  }

  &:nth-last-child(-n + 1) {
    margin-bottom: 1em;
  }
  &__header {
    min-width: 350px;
    //margin-right: 3em;
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
      min-width: 1.5em;
      &:nth-child(n + 1) {
        text-align: right;
        min-width: 1.7em;
      }
      &:nth-child(n + 2) {
        min-width: 1.5em;
        text-align: left;
        margin-right: 1em;
        color: #ddd;
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
        $base-color1 0%,
        $base-color1 var(--computer-progress),
        $form-bg-color var(--computer-progress),
        $form-bg-color 100%
      );
    }

    .server-count[type='range']::-webkit-slider-runnable-track {
      background: linear-gradient(
        to right,
        $base-color1 0%,
        $base-color1 var(--server-progress),
        $form-bg-color var(--server-progress),
        $form-bg-color 100%
      );
    }

    .server-count[type='range']::-webkit-slider-runnable-track {
      background: linear-gradient(
        to right,
        $base-color1 0%,
        $base-color1 var(--server-progress),
        $form-bg-color var(--server-progress),
        $form-bg-color 100%
      );
    }
    .virtual-server-count[type='range']::-webkit-slider-runnable-track {
      background: linear-gradient(
        to right,
        $base-color1 0%,
        $base-color1 var(--virtual-server-progress),
        $form-bg-color var(--virtual-server-progress),
        $form-bg-color 100%
      );
    }
    .net-count[type='range']::-webkit-slider-runnable-track {
      background: linear-gradient(
        to right,
        $base-color1 0%,
        $base-color1 var(--net-progress),
        $form-bg-color var(--net-progress),
        $form-bg-color 100%
      );
    }

    .office-equipment-count[type='range']::-webkit-slider-runnable-track {
      background: linear-gradient(
        to right,
        $base-color1 0%,
        $base-color1 var(--office-equipment-progress),
        $form-bg-color var(--office-equipment-progress),
        $form-bg-color 100%
      );
    }
    .phone-count[type='range']::-webkit-slider-runnable-track {
      background: linear-gradient(
        to right,
        $base-color1 0%,
        $base-color1 var(--phone-progress),
        $form-bg-color var(--phone-progress),
        $form-bg-color 100%
      );
    }
  }
  &__switch {
    justify-self: flex-start;
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;

    @include _1300() {
      margin-top: 0.5em;
    }
    input {
      opacity: 0;
      width: 0;
      height: 0;
      &:checked + .slider {
        background-color: $base-color1;
      }
      &:checked + .slider:before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
      }
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      border-radius: 16px;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      &:before {
        position: absolute;
        content: '';
        height: 16px;
        width: 16px;
        left: 2px;
        bottom: 2px;
        border-radius: 100%;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }
    }
  }
}
.switches {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @include _1300() {
    margin-bottom: 0 !important;
  }
}
.switch-type {
  justify-content: flex-start;
  @include _1300() {
    margin-bottom: 0 !important;
  }
  &:nth-child(2) {
    margin-left: 1em;
    .calculator-type__header {
      min-width: fit-content !important;
      margin-right: 3em;
      @include _1300() {
        margin-right: 0;
      }
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
  border: 1px solid #fff;
  border-radius: 6px;
  width: 100%;
  height: 6px;
  cursor: pointer;
}
input[type='range']::-webkit-slider-thumb {
  margin-top: -6px;
  width: 14px;
  height: 14px;
  background: $base-color1;

  border-radius: 14px;
  cursor: pointer;
  -webkit-appearance: none;
}
input[type='range']::-moz-range-track {
  background: #ffffff;
  border: 1px solid #fff;
  border-radius: 6px;
  width: 100%;
  height: 3px;
  cursor: pointer;
}
input[type='range']::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: $base-color1;
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
  border: 2px solid $base-color3;
  border-radius: 12px;
}
input[type='range']::-ms-fill-upper {
  background: #ffffff;
  border: 2px solid $base-color3;
  border-radius: 12px;
}
input[type='range']::-ms-thumb {
  width: 14px;
  height: 14px;
  background: $base-color1;
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
  background-color: $base-color1;
  border-radius: 6px;
  height: 4px;
}
input[type='range']::-moz-range-track {
  background-color: $form-bg-color;
}
/* IE*/
input[type='range']::-ms-fill-lower {
  background-color: $base-color1;
}
input[type='range']::-ms-fill-upper {
  background-color: $form-bg-color;
}
</style>
