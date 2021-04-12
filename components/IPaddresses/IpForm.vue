<template>
  <div class="ip-address">
    <div class="ip-address-wrapper">
      <div class="ip-address-block">
        <h4 class="ip-address-block__header">
          Остались вопросы?
        </h4>
        <p class="article">Узнайте стоимость и&nbsp;получите тарифы на&nbsp;аренду или покупку IP&nbsp;адресов</p>
        <div class="ip-address-block__form-container">
          <form class="ip-address-block-form">
            <pretty-input
              :name="'name'"
              :placeholder="'Имя'"
              class="ip-address-block-form__item"
            ></pretty-input>
            <pretty-input
              :name="'phone'"
              :placeholder="'Телефон'"
              class="ip-address-block-form__item"
            ></pretty-input>
            <div class="ip-address-block-form__item">
              <button class="dialog-button"><div class="shining-button"></div>Оставить заявку</button>
            </div>
          </form>
          <div class="ip-address-block__privacy">
            <NuxtLink to="/privacy/">политика конфиденциальности</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PrettyInput from '~/components/Common/PrettyInput'
export default {
  name: 'ip-addressBlock',
  components: {
    PrettyInput,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';

.ip-address-wrapper {
  padding: 3em 0;

  .ip-address-block {
    background-color: #f2f2f2;
    border-radius: 6px;
    padding: 2.75em 3em;
    @include _600 {
      padding: 1em 1.2em;
    }
    .ip-address-block-form {
      display: flex;
      flex-direction: row;
      @include _1250() {
        flex-direction: column;
      }
      &__item {
        vertical-align: top;
        margin: 0 2% 1em 0;
        min-width: 0;
        @include _1250() {
          display: block;
          margin: 1em 0;
          width: 100%;
        }
        button {
          @include _1250() {
            width: 100%;
          }
        }
      }
    }
    &__privacy {
      color: #999;
      font-size: 0.6em;
      line-height: 1.4em;
      a {
        color: #999;
        transition: color 0.3s ease-out;
        &:hover {
          color: #d81428;
        }
      }
    }
  }
}
</style>
