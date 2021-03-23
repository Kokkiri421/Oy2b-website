<template>
  <div class="wrapper">
    <div class="form-background">
      <form class="audit-form">
        <h4 class="audit-form__header">
          Оставьте сейчас заявку на бесплатный экспресс аудит
        </h4>
        <pretty-input
          :name="'name'"
          :placeholder="'Имя'"
          class="audit-form__item"
        ></pretty-input>
        <pretty-input
          :name="'phone'"
          :placeholder="'Телефон'"
          class="audit-form__item"
        ></pretty-input>
        <pretty-input
          :name="'company'"
          :placeholder="'Компания'"
          class="audit-form__item"
        ></pretty-input>
        <div class="audit-form__item">
          <button class="dialog-button">Отправить заявку</button>
        </div>
      </form>
      <div class="audit-form__privacy">
        Нажимая кнопку «Отправить&nbsp;заявку», я&nbsp;даю своё согласие
        «Oyster&nbsp;Telecom» на&nbsp;обработку моих
        <a href="/privacy/">персональных данных</a>.
      </div>
    </div>
  </div>
</template>

<script>
import PrettyInput from '~/components/Common/PrettyInput'
export default {
  name: 'AuditForm',
  components: {
    PrettyInput,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.form-background {
  background-color: #f2f2f2;
  border-radius: 6px;
  padding: 2.75em 3em;
  margin: 3em 0;
  @include _600 {
    padding: 1em 1.2em;
  }
  .audit-form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    &__header {
      flex-basis: 100%;
    }
    &__question {
      appearance: none;
      padding: 0.8em 1em;
      border: 1px solid #fff;
      border-radius: 4px;
      width: 100%;
      line-height: 1.6em;
      min-height: 3.2em;
      box-sizing: border-box;
      resize: none;
      font: 400 1em/1.1em Montserrat, sans-serif;
      &__container {
        flex-basis: 100%;
        margin-bottom: 1em;
      }
      &::placeholder {
        line-height: 1.6em;
      }
    }
    &__item {
      vertical-align: top;
      margin: 0 2% 1em 0;
      width: 23.5%;
      @include _1250() {
        display: block;
        margin: 1em 0;
        width: 100%;
      }
      button {
        width: 100%;
      }
      &:nth-last-child(-n + 1) {
        margin-right: 0;
      }
    }
    @include _1250() {
      flex-direction: column;
    }
    &__privacy {
      color: #999;
      font-size: 0.8em;
      line-height: 1.4em;
      a {
        color: #999;
      }
    }
  }
}
</style>
