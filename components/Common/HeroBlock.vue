<template>
  <div class="hero-block">
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
      </div>
      <div v-if="isAnchor" class="hero-block-anchor-container">
        <div class="hero-block-anchor" @click="scrollDown">
          <a>
            <icon
              :icon-name="'expand-icon'"
              class="expand-icon"
              :view-box="'0 0 24 24'"
            >
              <menu-arrow-icon />
            </icon>
          </a>
        </div>
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
    checkForm(e) {
      e.preventDefault()
      this.errors = []

      if (!this.company) {
        this.errors.push('company')
      }
      if (!this.phone) {
        this.errors.push('phone')
      }
      if (this.errors.length === 0) {
        console.log('hero form')
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
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/colors';

.hero-block {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: $light-blue-color;
  z-index: 1;
  &:before {
    //background-size: cover;
    content: '';
    position: absolute;
    //width: 100px;
    //height: 100px;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 45vh 0 0 80vw;
    border-color: transparent transparent transparent $bg-color;
  }
  &:after {
    //background-size: cover;
    content: '';
    position: absolute;
    //width: 100px;
    //height: 100px;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 25vh 20vw;
    border-color: transparent transparent $bg-color transparent;
    z-index: -1;
  }

  .hero-block-content {
    position: relative;
    //z-index: 2 !important;
    padding: 100px 0;
    color: #444444;
    @include _765() {
      padding: 73px 0;
    }
    @include _640() {
      padding: 70px 0 3em;
    }

    .hero-block-top {
      max-width: 800px;

      &__header {
        font-size: 3em;
        line-height: 52px;
        margin: 0 0 0.75em;

        @include _600() {
          font-size: 2em;
          line-height: normal;
        }
        @include _400() {
          font-size: 1.5em;
        }
      }

      &__description {
        font-weight: 500;
        font-size: 1em;
        line-height: 20px;
        margin-bottom: 2em;
        @include _400() {
          font-size: 0.9em;
        }
      }
    }

    .hero-block-form-container {
      background: #f2f2f2;
      color: #444444;
      border-radius: 6px;
      padding: 1em 2em;
      width: fit-content;
      max-width: calc(100% - 4em);
      @include _950() {
        width: calc(100% - 4em);
      }

      .hero-block-form {
        display: flex;
        flex-direction: row;
        @include _950() {
          display: block;
          width: 100%;
        }

        &__item {
          vertical-align: top;
          margin: 0 1em 1em 0;
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
        font-size: 0.8em;
        margin-bottom: 1em;
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
}
</style>
