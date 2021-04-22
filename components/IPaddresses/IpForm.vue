<template>
  <div class="ip-address">
    <div class="ip-address-wrapper">
      <div class="ip-address-block">
        <h4 class="ip-address-block__header">Остались вопросы?</h4>
        <p class="article">
          Узнайте стоимость и&nbsp;получите тарифы на&nbsp;аренду или покупку
          IP&nbsp;адресов
        </p>
        <p class="form-error-message" v-if="errors.length > 0">
          Заполните обязательные поля
        </p>
        <div class="ip-address-block__form-container">
          <form class="ip-address-block-form" @submit="checkForm">
            <pretty-input
              :name="'name'"
              :placeholder="'Имя'"
              class="ip-address-block-form__item"
              :value="name"
              @onInput="setName"
              :error="errors.includes('name')"
            ></pretty-input>
            <pretty-input
              :name="'phone'"
              :placeholder="'Телефон'"
              class="ip-address-block-form__item"
              :value="phone"
              @onInput="setPhone"
              :error="errors.includes('phone')"
            ></pretty-input>
            <div class="ip-address-block-form__item">
              <button class="dialog-button">
                <div class="shining-button"></div>
                Оставить заявку
              </button>
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
    async checkForm(e) {
      e.preventDefault()
      this.errors = []
      let phone = this.phone
        .replace('+7(', '')
        .replace(')', '')
        .replace('-', '')
        .replace('-', '')
      if (!this.name) {
        this.errors.push('name')
      }
      if (!this.phone || phone.length !== 10) {
        this.errors.push('phone')
      }
      if (this.errors.length === 0) {
        let fullname = this.name.split(' ')
        let body = {
          contact: {
            name: fullname[0],
            surname: fullname[1] || '.',
            phones: [{ phone: phone }],
          },
          description: `Тип формы: IP Адреса\n`,
        }
        let response = await this.$axios
          .post('https://api-oycrm.oyster.su/site/tickets/v2', body)
          .then((res) => console.log(res.data))
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

.ip-address-wrapper {
  .ip-address-block {
    background-color: #f2f2f2;
    border-radius: 6px;
    padding: 1em;
    .ip-address-block-form {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      @include _1250() {
        flex-direction: column;
        width: 100%;
      }
      &__item {
        vertical-align: top;
        margin: 0 1em 1em 0;
        min-width: 0;
        @include _1250() {
          display: block;
          margin: 0 0 1em;
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
