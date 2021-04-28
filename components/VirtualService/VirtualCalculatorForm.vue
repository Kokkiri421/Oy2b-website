<template>
  <div class="calculator">
    <div class="calculator__content">
      <div class="calculator-form page-content-block">
        <h4>Калькулятор стоимости Виртуального Сервера&nbsp;(VDS)</h4>
        <div class="calculator-form__data" :style="chromeProgress">
          <div class="calculator-type">
            <div class="calculator-type__header">
              Количество ядер (vCPU) у сервера
            </div>
            <div class="calculator-type__slider">
              <input
                type="number"
                class="input-number input-label"
                name="сpu-count"
                min="0"
                max="30"
                step="1"
                v-model="cpuCount"
                @change="changeField($event, cpuCount, 30)"
              />
              <input
                type="range"
                class="input-slider cpu-count"
                id="сpu-count"
                name="сpu-count"
                min="0"
                max="30"
                v-model="cpuCount"
                @change="changeField($event, cpuCount, 30)"
              />
              <label class="input-label" for="сpu-count">30</label>
            </div>
          </div>
          <div class="calculator-type">
            <div class="calculator-type__header">
              Количество Gb оперативной памяти (RAM)
            </div>
            <div class="calculator-type__slider">
              <input
                type="number"
                class="input-number input-label"
                name="ram-count"
                min="0"
                max="64"
                step="1"
                v-model="ramCount"
                @change="changeField($event, ramCount, 64)"
              />
              <input
                type="range"
                class="input-slider ram-count"
                id="ram-count"
                name="ram-count"
                min="0"
                max="64"
                v-model="ramCount"
                @change="changeField($event, ramCount, 64)"
              />
              <label class="input-label" for="ram-count">64</label>
            </div>
          </div>
          <div class="calculator-type">
            <div class="calculator-type__header">
              Количество Gb, быстрые SSD
            </div>
            <div class="calculator-type__slider">
              <input
                type="number"
                class="input-number input-label"
                name="ssd-count"
                min="0"
                max="300"
                step="10"
                v-model="ssdCount"
                @input="changeField($event, ssdCount, 300, 10)"
              />
              <input
                type="range"
                class="input-slider ssd-count"
                id="ssd-count"
                name="ssd-count"
                min="0"
                max="300"
                step="10"
                v-model="ssdCount"
                @change="changeField($event, ssdCount, 300)"
              />
              <label class="input-label" for="ram-count">300</label>
            </div>
          </div>
          <div class="calculator-type">
            <div class="calculator-type__header">
              Количество Gb, медленные HDD
            </div>
            <div class="calculator-type__slider">
              <input
                type="number"
                class="input-number input-label"
                name="hdd-count"
                min="0"
                max="4000"
                step="100"
                v-model="hddCount"
                @input="changeField($event, hddCount, 4000, 100)"
              />
              <input
                type="range"
                class="input-slider hdd-count"
                id="hdd-count"
                name="hdd-count"
                min="0"
                max="4000"
                step="100"
                v-model="hddCount"
                @change="changeField($event, hddCount, 4000)"
              />
              <label class="input-label" for="hdd-count">3000</label>
            </div>
          </div>
          <div class="calculator-type radio-type">
            <div class="calculator-type__header">
              Ежедневный бэкап, глубина хранения
            </div>
            <div class="radio-buttons">
              <div class="calculator-form__radio">
                <input
                  id="0"
                  name="radio"
                  type="radio"
                  :checked="type === 0"
                  @change="
                    () => {
                      type = 0
                    }
                  "
                />
                <label for="0" class="radio-label">Без бэкапа</label>
              </div>
              <div class="calculator-form__radio">
                <input
                  id="7"
                  name="radio"
                  type="radio"
                  :checked="type === 7"
                  @change="
                    () => {
                      type = 7
                    }
                  "
                />
                <label for="7" class="radio-label">7 дней</label>
              </div>
              <div class="calculator-form__radio">
                <input
                  id="14"
                  name="radio"
                  type="radio"
                  :checked="type === 14"
                  @change="
                    () => {
                      type = 14
                    }
                  "
                />
                <label for="14" class="radio-label">14 дней</label>
              </div>
              <div class="calculator-form__radio">
                <input
                  id="28"
                  name="radio"
                  type="radio"
                  :checked="type === 28"
                  @change="
                    () => {
                      type = 28
                    }
                  "
                />
                <label for="28" class="radio-label">28 дней</label>
              </div>
            </div>
          </div>

          <!--          <div class="calculator-type switch-type">-->
          <!--            <div class="calculator-type__header">-->
          <!--              Обслуживание видеонаблюдения-->
          <!--            </div>-->
          <!--            <label class="calculator-type__switch">-->
          <!--              <input type="checkbox" :checked="cctv" />-->
          <!--              <span class="slider round"></span>-->
          <!--            </label>-->
          <!--          </div>-->
          <!--          <p class="privacy">-->
          <!--            *Минимальная стоимость обслуживания - 10000р&nbsp;в&nbsp;месяц-->
          <!--          </p>-->
          <!--          <p class="privacy">-->
          <!--            **Конечная стоимость рассчитывается на&nbsp;основании-->
          <!--            технического&nbsp;аудита-->
          <!--          </p>-->
        </div>
        <div class="price-form-button">
          <div class="form-container" ref="order">
            <p class="form-error-message" v-if="errors.length > 0">
              Заполните обязательные поля
            </p>
            <p class="form-success-message" v-else-if="success">
              Заявка успешно отправлена
            </p>
            <form class="name-phone-company-form" @submit="checkForm">
              <pretty-input
                :name="'name'"
                :placeholder="'Имя'"
                class="name-phone-company-form__item"
                :value="name"
                @onInput="setName"
                :error="errors.includes('name')"
                :white-bg="true"
              ></pretty-input>
              <pretty-input
                :name="'phone'"
                :placeholder="'Телефон'"
                class="name-phone-company-form__item"
                :value="phone"
                @onInput="setPhone"
                :error="errors.includes('phone')"
                :white-bg="true"
              ></pretty-input>
              <pretty-input
                :name="'company'"
                :placeholder="'Компания'"
                class="name-phone-company-form__item"
                :value="company"
                @onInput="setCompany"
                :error="errors.includes('company')"
                :white-bg="true"
              ></pretty-input>
              <div class="name-phone-company-form__item">
                <button class="dialog-button">
                  <div class="shining-button1"></div>
                  Рассчитать стоимость
                </button>
              </div>
            </form>
            <div class="price__privacy">
              <NuxtLink to="/privacy/">политика конфиденциальности</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Ratio from '~/components/ItOutsource/Ratio'
import RatioForm from '~/components/ItOutsource/RatioForm'
import PrettyInput from '~/components/Common/PrettyInput'

export default {
  data() {
    return {
      cpuCount: 1,
      ramCount: 16,
      ssdCount: 50,
      hddCount: 1000,
      type: 0,
      name: '',
      phone: '',
      company: '',
      success: false,
      errors: [],
      isVisiblePriceForm: false,
      // serverCount: 1,
      // officeEquipmentCount: 5,
    }
  },
  components: { Ratio, RatioForm, PrettyInput },
  computed: {
    chromeProgress() {
      return {
        '--cpu-progress': `${this.cpuCount * (100 / 30)}%`,
        '--ram-progress': `${this.ramCount * (100 / 64)}%`,
        '--ssd-progress': `${this.ssdCount * (100 / 300)}%`,
        '--hdd-progress': `${this.hddCount * (100 / 4000)}%`,
      }
    },
  },

  methods: {
    changeField: function (e, field, max, step = 1) {
      e.target.value = e.target.value.replace(/[^0-9]/g, '')
      if (e.target.value > max) {
        e.target.value = max
      } else if (e.target.value < 0) {
        e.target.value = 0
      }
      field = Math.floor(e.target.value / step) * step
    },
    async checkForm(e) {
      e.preventDefault()
      if (this.success) return
      this.errors = []
      let phone = this.phone
        .replace('+7(', '')
        .replace(')', '')
        .replace('-', '')
        .replace('-', '')
      if (!this.name) {
        this.errors.push('name')
      }
      if (!this.phone || phone.length !== 10) {
        this.errors.push('phone')
      }
      if (!this.company) {
        this.errors.push('company')
      }
      if (this.errors.length === 0) {
        let fullname = this.name.split(' ')
        let routename = this.$store.state.routeNames[this.$route.path]
        let body = {
          dev: process.env.APP_ENV === 'dev',
          contact: {
            name: fullname[0],
            surname: fullname[1] || '.',
            phones: [{ phone: phone }],
          },
          description: `Тип формы: ${routename}. Стоимость виртуального сервера\nКопмания: ${
            this.company
          }\nЯдра процессора: ${this.cpuCount}\nОЗУ: ${this.ramCount}gb\nSSD: ${
            this.ssdCount
          }gb\nSSD: ${this.hddCount}gb\nБэкап: ${
            this.type ? 'Глубина хранения ' + this.type + ' дней' : 'Без бэкапа'
          }\n`,
        }
        let gtmName = this.$store.state.gtmNames[this.$route.path]
        let response = await this.$axios
          .post(process.env.CRM_LINK, body)
          // .then((res) => console.log(res.data))
          .then(() => dataLayer.push({ event: gtmName }))
          .finally(
            async () =>
              await this.$axios
                .post(process.env.BOT_LINK, body)
                // .then((res) => console.log(res.data))
                .then(async () => {
                  await this.setSuccess()
                  this.phone = ''
                  this.company = ''
                  this.name = ''
                })
          )
        return true
      }
      console.log(this.errors)
    },
    setName(e) {
      this.name = e.target.value
    },
    setPhone(e) {
      this.phone = e.target.value
    },
    setCompany(e) {
      this.company = e.target.value
    },
    setSuccess() {
      this.success = true
      setTimeout(() => (this.success = false), 5000)
    },
    setVisiblePriceForm() {
      this.isVisiblePriceForm = !this.isVisiblePriceForm
    },
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/colors';

.form-container {
  width: 100%;
  border-radius: 6px;
  margin-top: 1em;
  //margin: 3em 0;
  @include _650 {
  }

  &__top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .name-phone-company-form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 1em;

    &__header {
      max-width: calc(100% - 150px - 1em);
      @include _650() {
        max-width: 100%;
      }
    }

    &__error {
      border-color: black !important;
    }

    &__item {
      border-color: red;
      vertical-align: top;
      margin: 0 1em 0 0;
      width: calc(25% - 0.75em);
      @include _1000() {
        display: block;
        margin: 0 0 1em;
        width: 100%;
      }

      button {
        width: 100%;
      }

      &:nth-last-child(-n + 1) {
        margin: 0;
      }
    }

    @include _1000() {
      flex-direction: column;
    }
  }
}

.price {
  &__privacy {
    color: #fff;
    font-size: 0.6em;
    line-height: 1.4em;

    a {
      color: $text-color;
      transition: color 0.3s ease-out;

      &:hover {
        color: $red-color1;
      }
    }
  }
}

.calculator {
  &__content {
    flex-direction: column;
    justify-content: flex-start;
    .price-form-button {
      margin-top: 1em;
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: flex-end;
      .dialog-button {
        //width: calc(25% - 3em / 4);
        @include _600() {
          flex-grow: 1;
        }
      }
      @include _600() {
        margin-top: 2em;
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

  flex-grow: 1;

  margin-right: 0;
  height: fit-content;

  &__data {
    margin-top: 2em;
  }

  .privacy {
    font-size: 0.8em;
    color: #00000085;
    @include _600() {
      font-size: 0.7em;
    }
  }

  $color1: #fff;
  $color2: $base-color1;

  &__radio {
    position: relative;

    margin-right: 1.5em;
    @include _1300() {
      margin-top: 0.5em;
    }
    &:nth-last-child(-n + 1) {
      margin-right: 0;
    }
    input[type='radio'] {
      position: absolute;
      opacity: 0;
      left: -30px;
      z-index: 2;
      width: 100%;
      height: 100%;

      + .radio-label {
        margin-right: 1em;
        @include _600() {
          font-size: 0.8em;
          min-width: auto;
        }
        &:before {
          content: '';
          position: absolute;
          left: -30px;
          width: 20px;
          height: 20px;
          border-radius: 100%;
          border: 1px solid #dfdfdf;
          transition: border-color 0.2s ease-out;
          z-index: 1;
        }

        &::after {
          content: '';
          position: absolute;
          left: -25px;
          top: 5px;
          width: 12px;
          height: 12px;
          border-radius: 100%;

          transition: border-color 0.2s ease-out;
          z-index: 1;
        }
      }

      &:checked {
        + .radio-label {
          &:before {
            //background-color: $color2;
            border-radius: 100%;
            //box-shadow: inset 0 0 0 6px $color1;
          }

          &:after {
            background-color: $color2;
          }
        }
      }

      &:focus {
        + .radio-label {
          &:before {
            outline: none;
            border-color: $color2;
          }
        }
      }

      &:disabled {
        + .radio-label {
          &:before {
            box-shadow: inset 0 0 0 4px $color1;
            border-color: darken($color1, 25%);
            background: darken($color1, 25%);
          }
        }
      }

      + .radio-label {
        &:empty {
          &:before {
            margin-right: 0;
          }
        }
      }
    }
  }
}

.calculator-type {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.5em;
  @include _1300() {
    flex-direction: column;
    margin-bottom: 1em;
  }

  &:nth-last-child(-n + 1) {
    margin-bottom: 0em;
  }

  &__header {
    min-width: 400px;
    //margin-right: 3em;
    @include _1300() {
      margin-bottom: 0.25em;
    }
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
        min-width: 2.7em;
      }

      &:nth-child(n + 2) {
        color: #ddd;
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

    .cpu-count[type='range']::-webkit-slider-runnable-track {
      background: linear-gradient(
        to right,
        $base-color1 0%,
        $base-color1 var(--cpu-progress),
        $form-bg-color var(--cpu-progress),
        $form-bg-color 100%
      );
    }

    .ram-count[type='range']::-webkit-slider-runnable-track {
      background: linear-gradient(
        to right,
        $base-color1 0%,
        $base-color1 var(--ram-progress),
        $form-bg-color var(--ram-progress),
        $form-bg-color 100%
      );
    }

    .ssd-count[type='range']::-webkit-slider-runnable-track {
      background: linear-gradient(
        to right,
        $base-color1 0%,
        $base-color1 var(--ssd-progress),
        $form-bg-color var(--ssd-progress),
        $form-bg-color 100%
      );
    }

    .hdd-count[type='range']::-webkit-slider-runnable-track {
      background: linear-gradient(
        to right,
        $base-color1 0%,
        $base-color1 var(--hdd-progress),
        $form-bg-color var(--hdd-progress),
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

.switch-type,
.radio-type {
  justify-content: flex-start;
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

.radio-buttons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 2em;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
