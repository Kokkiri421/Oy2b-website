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
        <div class="hero-block-form-container">
          <div class="hero-block-form-container__prefix">
            <slot name="form-prefix"></slot>
          </div>
          <form class="hero-block-form">
            <pretty-input
              :name="'address'"
              :placeholder="'Адрес/Организация'"
              class="hero-block-form__item"
            ></pretty-input>
            <pretty-input
              :name="'phone'"
              :placeholder="'Телефон'"
              class="hero-block-form__item"
            ></pretty-input>
            <div class="hero-block-form__item">
              <button class="dialog-button">Оставить заявку</button>
            </div>
          </form>
          <div class="hero-block-form-container__legal">
            Нажимая кнопку «Оставить заявку», я даю свое согласие на обработку
            персональных данных согласно

            <a href="/legal/">Политике конфиденциальности</a>.
          </div>
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
  components: {
    PrettyInput,
  },
  props: {
    isAnchor: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    scrollDown() {
      this.$emit('onClick')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.hero-block {
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
          margin: 1em 1em 2em 0;
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
      &__legal {
        font-size: 0.8em;
        line-height: 1.4em;
        a {
          color: #fff;
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
