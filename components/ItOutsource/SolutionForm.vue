<template>
  <div class="solution">
    <div class="solution-wrapper">
      <div class="solution-block">
        <h4 class="solution-block__header">Не нашли подходящее решение?</h4>
        <p class="article">
          Оформите заявку прямо сейчас и мы подберем для вас лучшую цену!
        </p>
        <p class="form-error-message" v-if="errors.length > 0">
          Заполните обязательные поля
        </p>
        <div class="solution-block__form-container">
          <form class="solution-block-form" @submit="checkForm">
            <pretty-input
              :name="'name'"
              :placeholder="'Имя'"
              class="solution-block-form__item"
              :value="name"
              @onInput="setName"
              :error="errors.includes('name')"
            ></pretty-input>
            <pretty-input
              :name="'phone'"
              :placeholder="'Телефон'"
              class="solution-block-form__item"
              :value="phone"
              @onInput="setPhone"
              :error="errors.includes('phone')"
            ></pretty-input>
            <div class="solution-block-form__item">
              <button class="dialog-button">
                <div class="shining-button"></div>
                Оставить заявку
              </button>
            </div>
          </form>
          <div class="solution-block__privacy">
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
  data() {
    return {
      name: '',
      phone: '',

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
      if (this.errors.length === 0) {
        console.log('solution form')
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
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';

.solution-wrapper {
  padding: 3em 0;

  .solution-block {
    background-color: #f2f2f2;
    bsolution-radius: 6px;
    padding: 2.75em 3em;
    @include _600 {
      padding: 1em 1.2em;
    }
    .solution-block-form {
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
