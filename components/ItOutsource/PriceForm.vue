<template>
  <div class="price">
    <div class="price__top-text">
      <slot name="top-text"></slot>
    </div>
    <div class="price__form-container" ref="order">
      <h4 class="price-form__header">
        Проанализируем вашу ситуацию и дадим персональные рекомендации
      </h4>
      <p class="form-error-message" v-if="errors.length > 0">
        Заполните обязательные поля
      </p>
      <form class="price-form" @submit="checkForm">
        <pretty-input
          :name="'name'"
          :placeholder="'Имя'"
          class="price-form__item"
          :value="name"
          @onInput="setName"
          :error="errors.includes('name')"
        ></pretty-input>
        <pretty-input
          :name="'phone'"
          :placeholder="'Телефон'"
          class="price-form__item"
          :value="phone"
          @onInput="setPhone"
          :error="errors.includes('phone')"
        ></pretty-input>
        <pretty-input
          :name="'company'"
          :placeholder="'Компания'"
          class="price-form__item"
          :value="company"
          @onInput="setCompany"
          :error="errors.includes('company')"
        ></pretty-input>
        <div class="price-form__item">
          <button class="dialog-button">
            <div class="shining-button"></div>
            Отправить
          </button>
        </div>
      </form>
      <div class="price__privacy">
        <NuxtLink to="/privacy/">политика конфиденциальности</NuxtLink>
      </div>
    </div>
    <div class="price__bottom-text">
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
        console.log('price form')
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

.price {
  .article {
    line-height: 1.62em;
    color: #999;
    @include _700() {
      font-size: 0.9em;
    }
  }

  .header {
    margin-top: 2em;
    margin-bottom: 1em;
  }

  &__form-container {
    background-color: $light-blue-color;
    border-radius: 6px;
    padding: 1.5em 3em;
    margin: 3em 0;
    @include _650 {
      padding: 1.5em;
    }

    .price-form {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      &__header {
        flex-basis: 100%;
        color: $text-color;
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
    color: $text-color;
    font-size: 0.6em;
    line-height: 1.4em;

    a {
      color: $text-color;
      transition: color 0.3s ease-out;

      &:hover {
        color: $red-color1;
      }
    }
  }
}
</style>
