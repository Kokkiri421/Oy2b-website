<template>
  <div class="modal-form">
    <h4>Оставить заявку</h4>
    <p class="form-error-message" v-if="errors.length > 0">
      Заполните обязательные поля
    </p>
    <form @submit="checkForm">
      <pretty-input
        :name="'name'"
        :placeholder="'Ваше Имя'"
        class="modal-form__item"
        :value="name"
        @onInput="setName"
        :error="errors.includes('name')"
      ></pretty-input>
      <pretty-input
        :name="'phone'"
        :placeholder="'Телефон'"
        class="modal-form__item"
        :value="phone"
        @onInput="setPhone"
        :error="errors.includes('phone')"
      ></pretty-input>

      <button class="dialog-button modal-form__button">Оставить заявку</button>
    </form>
    <div class="modal-form__privacy">
      <NuxtLink class="link" to="/privacy/"
        >политика конфиденциальности</NuxtLink
      >
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
        console.log('ip-adress form')
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
@import '~/assets/colors';
.modal-form {
  padding: 1em;
  max-width: 650px;
  &__item {
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 1em;
  }
  &__button {
    width: 100%;
    margin-bottom: 1em;
  }
  &__privacy {
    font-size: 0.6em;
    line-height: 1.4em;
    color: $text-color;

    .link {
      color: $text-color;
      transition: color 0.3s ease-out;
      &:hover {
        color: #d81428;
      }
    }
  }
}
</style>
