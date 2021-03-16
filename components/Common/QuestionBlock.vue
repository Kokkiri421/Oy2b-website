<template>
  <div class="question-block">
    <div class="question-block__top-text">
      <h4 class="header">
        Задайте любой вопрос о подключении услуг связи бесплатно
      </h4>
      <p class="article">
        Мы бесплатно ответим на любые вопросы из области корпоративных
        телекоммуникационных услуг.<br />
        Поможем разобраться и оптимизировать расходы на услуги связи.
      </p>
      <h5 class="header">Наши эксперты</h5>
      <p class="article">
        В Oyster Telecom работают технические специалисты с релевантным опытом
        из различных технических сфер услуг для бизнеса.
      </p>
    </div>
    <div class="question-block__form-container">
      <form class="question-block-form">
        <h4 class="question-block-form__header">Ваш вопрос:</h4>
        <label class="question-block-form__question__container">
          <textarea
            class="question-block-form__question"
            name="massage"
            cols="30"
            rows="5"
            placeholder="Например: Как подключить POS терминалы c помощью разделения Wi-Fi на 2 SSID?"
          ></textarea>
        </label>
        <h4 class="question-block-form__header">Ваши контакты:</h4>
        <pretty-input
          :name="'name'"
          :placeholder="'Имя'"
          class="question-block-form__item"
        ></pretty-input>
        <pretty-input
          :name="'phone'"
          :placeholder="'Телефон'"
          class="question-block-form__item"
        ></pretty-input>
        <pretty-input
          :name="'company'"
          :placeholder="'Компания'"
          class="question-block-form__item"
        ></pretty-input>
        <div class="question-block-form__item">
          <button class="dialog-button">Отправить</button>
        </div>
      </form>
      <div class="question-block__privacy">
        Нажимая кнопку «Оставить заявку», я даю своё согласие «Oyster Telecom»
        на обработку моих
        <a href="/privacy/">персональных данных</a>.
      </div>
    </div>
  </div>
</template>

<script>
import PrettyInput from '~/components/Common/PrettyInput'
export default {
  name: 'QuestionForm',
  components: {
    PrettyInput,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.question-block {
  .article {
    line-height: 1.62em;
    color: #999;
  }
  .header {
    margin-top: 2em;
    margin-bottom: 1em;
  }
  &__form-container {
    background-color: #f2f2f2;
    border-radius: 6px;
    padding: 2.75em 3em;
    margin: 3em 0;
    @include _600 {
      padding: 1em 1.2em;
    }
    .question-block-form {
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
    }
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
</style>
