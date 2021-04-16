<template>
  <div class="hero-block">
    <div class="background-element"></div>
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
          <a
            ><svg
              width="24"
              height="11"
              viewBox="0 0 24 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.7"
                d="M1 1L12 9L23 1"
                stroke="white"
                stroke-width="2"
              ></path></svg
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PrettyInput from '~/components/Common/PrettyInput'
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .hero-block-content {
    padding: 100px 0;
    color: #ffffff;
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
      .hero-block-form {
        display: flex;
        flex-direction: row;
        @include _950() {
          display: block;
        }
        &__item {
          vertical-align: top;
          margin: 0 1em 1em 0;
          min-width: 280px;
          @include _950() {
            display: block;
            margin: 1em 0;
            width: 100%;
          }
          button {
            @include _950() {
              width: 100%;
            }
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
          color: #fff;
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
