<template>
  <div class="hero-block">
    <div class="wrapper">
      <div class="hero-block-content">
        <div class="hero-block-top">
          <h1 class="hero-block-top__header">
            <slot name="header"></slot>
          </h1>
          <div class="hero-block-top__description dn-600">
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
    </div>
  </div>
</template>

<script>
import PrettyInput from '~/components/Common/PrettyInput'
export default {
  components: {
    PrettyInput,
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
      }
      &__description {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
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
}
</style>
