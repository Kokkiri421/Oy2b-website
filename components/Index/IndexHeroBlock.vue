<template>
  <div class="hero-block">
    <div class="wrapper">
      <div class="index">
        <div class="index-top">
          <h1 class="index-top__header">
            Комплексные услуги связи <br class="dn-600" />и IT сервисы
          </h1>
          <div class="index-top__description dn-600">
            Телекоммуникационные услуги и сервисы для компаний с высоким
            трафиком, включая доступ в интернет, прокладку и обслуживание
            оптоволоконной инфраструктуры, организацию корпоративных wi-fi
            пространств, телефонию, IP видеонаблюдение и нейросетевую аналитику,
            виртуализацию и перенос бизнеса в облако.
          </div>
        </div>
        <div class="index-form-container">
          <div class="index-form-container__prefix">
            Проверьте возможность подключения:
          </div>
          <form class="index-form">
            <pretty-input
              :name="'address'"
              :placeholder="'Адрес/Организация'"
              class="index-form__item"
            ></pretty-input>
            <pretty-input
              :name="'phone'"
              :placeholder="'Телефон'"
              class="index-form__item"
            ></pretty-input>
            <div class="index-form__item">
              <button class="dialog-button">Оставить заявку</button>
            </div>
          </form>
          <div class="index-form-container__legal">
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('~/static/images/index-bg.jpg');
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .index {
    padding: 100px 0;
    color: #ffffff;
    @include _765() {
      padding: 73px 0;
    }
    @include _640() {
      padding: 70px 0 3em;
    }
    .index-top {
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
        margin-bottom: 2.5em;
      }
    }
    .index-form-container {
      .index-form {
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
