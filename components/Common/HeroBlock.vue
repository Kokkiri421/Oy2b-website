<template>
  <div class="hero-block">
    <div class="hero-block__background"></div>
    <div class="wrapper">
      <div class="hero-block-content">
        <div class="hero-block-top">
          <h1 class="hero-block-top__header">
            <slot name="header"></slot>
          </h1>
          <div class="hero-block-top__description">
            <slot name="description"></slot>
          </div>
        </div>
        <div v-if="!userForm" class="hero-block-form-container">
          <div class="hero-block-form-container__prefix">
            <slot name="form-prefix"></slot>
          </div>
          <p class="form-error-message" v-if="errors.length > 0">
            Заполните обязательные поля
          </p>
          <p class="form-success-message" v-else-if="success">
            Заявка удачно отправлена
          </p>
          <p class="form-placeholder-message" v-else></p>
          <form class="hero-block-form" @submit="checkForm">
            <pretty-input
              :name="'company'"
              :placeholder="'Организация или Адрес'"
              class="hero-block-form__item"
              :value="company"
              @onInput="setCompany"
              :error="errors.includes('company')"
            ></pretty-input>
            <pretty-input
              :name="'phone'"
              :placeholder="'Телефон'"
              class="hero-block-form__item"
              :value="phone"
              @onInput="setPhone"
              :error="errors.includes('phone')"
            ></pretty-input>
            <div class="hero-block-form__item">
              <button class="dialog-button">
                <div class="shining-button"></div>
                Оставить заявку
              </button>
            </div>
          </form>
          <div class="hero-block-form-container__legal">
            <NuxtLink to="/legal/">Политика конфиденциальности</NuxtLink>
          </div>
        </div>
        <div v-else>
          <slot name="user-form"></slot>
        </div>
        <img class="photo" src="~/static/images/block-images/heroblock.png" />
      </div>
    </div>
  </div>
</template>

<script>
import PrettyInput from '~/components/Common/PrettyInput'
import Icon from '~/components/Icons/Icon'
import MenuArrowIcon from '~/components/Icons/MenuArrowIcon'

export default {
  data() {
    return {
      company: '',
      phone: '',
      errors: [],
      success: false,
    }
  },
  components: {
    PrettyInput,
    Icon,
    MenuArrowIcon,
  },
  props: {
    isAnchor: {
      type: Boolean,
      default: true,
    },
    userForm: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    scrollDown() {
      this.$emit('onClick')
    },
    async checkForm(e) {
      e.preventDefault()
      this.errors = []
      let phone = this.phone
        .replace('+7(', '')
        .replace(')', '')
        .replace('-', '')
        .replace('-', '')
      if (!this.company) {
        this.errors.push('company')
      }
      if (!this.phone || phone.length !== 10) {
        this.errors.push('phone')
      } else if (this.errors.length === 0) {
        let routename = this.$store.state.routeNames[this.$route.path]
        let body = {
          dev: process.env.APP_ENV === 'dev',
          contact: {
            name: 'Новый',
            surname: 'Контакт',
            phones: [{ phone: phone }],
          },
          description: `Тип формы: ${routename}. Проверка адреса\nКомпания или адрес: ${this.company}\n`,
        }
        let response = await this.$axios
          .post('https://api-oycrm.oyster.su/site/tickets/v2', body)
          .then((res) => console.log(res.data))
          .then(() => {
            this.phone = ''
            this.company = ''
            this.setSuccess()
          })
        return true
      }
      console.log(this.errors)
    },
    setCompany(e) {
      this.company = e.target.value
    },
    setPhone(e) {
      this.phone = e.target.value
    },
    setSuccess() {
      this.success = true
      setTimeout(() => (this.success = false), 2000)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/colors';

.hero-block {
  width: 100%;
  position: relative;
  &__background {
    position: absolute;
    width: 2080px;
    height: 1078px;
    mask: url('~/static/images/backgrounds/bg.svg') no-repeat center;
    //////
    top: -450px;
    right: -150px;
    background-color: $light-blue-color;
  }
  .wrapper {
    height: 100%;
  }
  .hero-block-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    height: 650px;
    position: relative;
    z-index: 1;
    padding: 6em 0;
    color: #444444;
    @include _950() {
      height: 750px;
    }
    @include _765() {
      padding: 73px 0;
    }
    @include _650() {
      padding: 70px 0 3em;
      height: fit-content;
    }

    .hero-block-top {
      max-width: 800px;

      &__header {
        font-size: 3em;
        line-height: 52px;
        margin: 0 0 1em;

        @include _600() {
          font-size: 2em;
          line-height: normal;
        }
        @include _400() {
          font-size: 1.5em;
        }
      }

      &__description {
        margin-bottom: 1em;
        @include _400() {
          font-size: 0.9em;
        }
      }
    }

    .hero-block-form-container {
      box-sizing: border-box;
      background: $form-bg-color;
      color: $text-color;
      border-radius: 6px;
      padding: 1em;
      width: fit-content;
      max-width: calc(100%);
      @include _950() {
        width: calc(100%);
      }

      .hero-block-form {
        display: flex;
        flex-direction: row;
        margin-bottom: 1em;
        @include _950() {
          display: block;
          width: 100%;
        }

        &__item {
          vertical-align: top;
          margin-right: 1em;
          width: 280px;

          &:nth-last-child(-n + 1) {
            margin-right: 0;
          }

          @include _950() {
            display: block;
            margin: 1em 0;
            width: 100%;
          }

          button {
            width: 100%;
          }
        }
      }

      &__prefix {
        margin-bottom: 1em;
        @include _400() {
          font-size: 0.9em;
        }
      }

      &__legal {
        font-size: 0.6em;
        line-height: normal;

        a {
          color: #444444;
          transition: color 0.3s ease-out;

          &:hover {
            color: $red-color1;
          }
        }
      }
    }
  }

  .hero-block-anchor-container {
    position: relative;
    text-align: center;
    z-index: 1;
    .hero-block-anchor {
      cursor: pointer;
      position: absolute;
      .expand-icon {
        height: 35px;
        width: 35px;

        transition: transform 0.3s;
        vertical-align: middle;
        fill: none;
        stroke: $text-color;
        stroke-width: 3px;
        stroke-linejoin: round;
        stroke-linecap: round;
      }
      width: 100%;
      height: 0;
      bottom: 50px;
      animation-name: bounce;
      animation-timing-function: ease;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      @include _765() {
        bottom: 37px;
      }
      @include _640() {
        bottom: 2em;
      }
    }

    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      10% {
        transform: translateY(0);
      }
      30% {
        transform: translateY(-1em);
      }
      50% {
        transform: translateY(0);
      }
      57% {
        transform: translateY(-0.2em);
      }
      64% {
        transform: translateY(0);
      }
      80% {
        transform: translateY(-0.1em);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
  .photo {
    position: absolute;
    width: 500px;
    height: 400px;
    right: 0;
    bottom: 35%;
    @include _1250() {
      display: none;
    }
    margin-right: -5em;
  }
}
</style>
