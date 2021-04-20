<template>
  <div class="analysis">
    <div class="analysis__top-text">
      <slot name="top-text"></slot>
    </div>
    <div class="form-container" ref="order">
      <h4 class="name-phone-company-form__header">
        Проанализируем вашу ситуацию и дадим персональные рекомендации
      </h4>
      <p class="form-error-message" v-if="errors.length > 0">
        Заполните обязательные поля
      </p>
      <form class="name-phone-company-form" @submit="checkForm">
        <pretty-input
          :name="'name'"
          :placeholder="'Имя'"
          class="name-phone-company-form__item"
          :value="name"
          @onInput="setName"
          :error="errors.includes('name')"
        ></pretty-input>
        <pretty-input
          :name="'phone'"
          :placeholder="'Телефон'"
          class="name-phone-company-form__item"
          :value="phone"
          @onInput="setPhone"
          :error="errors.includes('phone')"
        ></pretty-input>
        <pretty-input
          :name="'company'"
          :placeholder="'Компания'"
          class="name-phone-company-form__item"
          :value="company"
          @onInput="setCompany"
          :error="errors.includes('company')"
        ></pretty-input>
        <div class="name-phone-company-form__item">
          <button class="dialog-button">
            <div class="shining-button"></div>
            Отправить
          </button>
        </div>
      </form>
      <div class="analysis__privacy">
        <NuxtLink to="/privacy/">политика конфиденциальности</NuxtLink>
      </div>
    </div>
    <div class="analysis__bottom-text">
      <slot name="bottom-text"></slot>
    </div>
  </div>
</template>

<script>
import PrettyInput from '~/components/Common/PrettyInput'

export default {
  data() {
    return {
      name: '',
      phone: '',
      company: '',
      errors: [],
    }
  },
  components: {
    PrettyInput,
  },

  methods: {
    checkForm(e) {
      e.preventDefault()
      this.errors = []
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
        console.log('analysis form')
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

.analysis {
  .article {
    line-height: 1.62em;
    color: #999;
    @include _700() {
      font-size: 0.9em;
    }
  }

  .header {
    margin-bottom: 1em;
  }

  .form-container {
    background-color: $text-color;
    border-radius: 6px;
    padding: 1em;
    //margin: 3em 0;
    @include _650 {
    }

    .name-phone-company-form {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-bottom: 1em;
      &__header {
        flex-basis: 100%;
        color: #fff;
      }

      &__error {
        border-color: $red-color1 !important;
      }

      &__item {
        vertical-align: top;
        margin: 0 1em 0 0;
        width: calc(25% - 0.75em);
        @include _1000() {
          display: block;
          margin: 0 0 1em;
          width: 100%;
        }

        button {
          width: 100%;
        }

        &:nth-last-child(-n + 1) {
          margin: 0;
        }
      }

      @include _1000() {
        flex-direction: column;
      }
    }
  }

  &__privacy {
    color: #fff;
    font-size: 0.6em;
    line-height: 1.4em;

    a {
      color: #fff;
      transition: color 0.3s ease-out;

      &:hover {
        color: $red-color1;
      }
    }
  }
}
</style>
