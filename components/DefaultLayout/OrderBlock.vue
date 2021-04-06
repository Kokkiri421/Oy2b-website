<template>
  <div class="order">
    <div class="order-wrapper">
      <div class="order-block">
        <h4 class="order-block__header">
          Получите бесплатную консультацию специалиста
          <br />
          в области бизнес провайдинга:
        </h4>
        <div class="order-block__form-container">
          <form class="order-block-form">
            <pretty-input
              :name="'address'"
              :placeholder="'Организация или Адрес'"
              class="order-block-form__item"
            ></pretty-input>
            <pretty-input
              :name="'phone'"
              :placeholder="'Телефон'"
              class="order-block-form__item"
            ></pretty-input>
            <div class="order-block-form__item">
              <button class="dialog-button">Оставить заявку</button>
            </div>
          </form>
          <div class="order-block__privacy">
            Нажимая кнопку «Оставить заявку», я даю своё согласие «Oyster
            Telecom» на обработку моих
            <NuxtLink to="/privacy/">персональных данных</NuxtLink>.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PrettyInput from '~/components/Common/PrettyInput'
export default {
  name: 'OrderBlock',
  components: {
    PrettyInput,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';

.order-wrapper {
  padding: 3em 0;

  .order-block {
    background-color: #f2f2f2;
    border-radius: 6px;
    padding: 2.75em 3em;
    @include _600 {
      padding: 1em 1.2em;
    }
    .order-block-form {
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
      font-size: 0.8em;
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
