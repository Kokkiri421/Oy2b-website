<template>
  <div class="question-block">
    <div class="question-block__top-text">
      <slot name="top-text"></slot>
    </div>
    <div class="question-block__form-container" ref="order">
      <form class="question-block-form" @submit="checkForm">
        <h4 class="question-block-form__header">Ваш вопрос:</h4>
        <p class="form-error-message" v-if="errors.length > 0">
          Заполните обязательные поля
        </p>
        <label class="question-block-form__question__container">
          <textarea
            class="question-block-form__question"
            name="question"
            cols="30"
            rows="7"
            :placeholder="question"
            v-model="userQuestion"
            :class="{
              'question-block-form__error':
                errors.includes('question') && !userQuestion,
            }"
          ></textarea>
        </label>
        <h4 class="question-block-form__header">Ваши контакты:</h4>

        <pretty-input
          :name="'name'"
          :placeholder="'Имя'"
          class="question-block-form__item"
          :value="name"
          @onInput="setName"
          :error="errors.includes('name')"
        ></pretty-input>
        <pretty-input
          :name="'phone'"
          :placeholder="'Телефон'"
          class="question-block-form__item"
          :value="phone"
          @onInput="setPhone"
          :error="errors.includes('phone')"
        ></pretty-input>
        <pretty-input
          :name="'company'"
          :placeholder="'Компания'"
          class="question-block-form__item"
          :value="company"
          @onInput="setCompany"
          :error="errors.includes('company')"
        ></pretty-input>
        <div class="question-block-form__item">
          <button class="dialog-button">
            <div class="shining-button"></div>
            Отправить
          </button>
        </div>
      </form>
      <div class="question-block__privacy">
        <NuxtLink to="/privacy/">политика конфиденциальности</NuxtLink>
      </div>
    </div>
    <div class="question-block__bottom-text">
      <slot name="bottom-text"></slot>
    </div>
  </div>
</template>

<script>
import PrettyInput from '~/components/Common/PrettyInput'
export default {
  name: 'QuestionForm',
  data() {
    return {
      userQuestion: '',
      name: '',
      phone: '',
      company: '',
      errors: [],
    }
  },
  components: {
    PrettyInput,
  },
  props: {
    question: { type: String, required: true },
  },
  methods: {
    checkForm(e) {
      e.preventDefault()
      this.errors = []
      if (!this.userQuestion) {
        this.errors.push('question')
      }
      if (!this.name) {
        this.errors.push('name')
      }
      if (!this.phone) {
        this.errors.push('phone')
      }
      if (!this.company) {
        this.errors.push('company')
      }
      if (this.errors.length === 0) {
        console.log('question form')
        return true
      }
      console.log(this.errors)
    },
    setName(e) {
      this.name = e.target.value
    },
    setPhone(e) {
      this.phone = e.target.value
    },
    setCompany(e) {
      this.company = e.target.value
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/colors';
.question-block {
  .header {
    margin-top: 2em;
    margin-bottom: 1em;
  }
  &__form-container {
    background-color: $form-bg-color;
    border-radius: 6px;
    padding: 1em;
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
        border: 2px solid transparent;
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
      &__error {
        border-color: $red-color1 !important;
      }
      &__item {
        vertical-align: top;
        margin: 0 1em 1em 0;
        width: calc(25% - 0.75em);
        @include _1250() {
          display: block;
          margin: 0 0 1em;
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
    font-size: 0.6em;
    line-height: 1.4em;
    a {
      color: #999;
      transition: color 0.3s ease-out;
      &:hover {
        color: $red-color1;
      }
    }
  }
}
</style>
