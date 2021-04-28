<template>
  <div class="modal-form">
    <h4>Оставить заявку</h4>
    <p class="form-error-message" v-if="errors.length > 0">
      Заполните обязательные поля
    </p>
    <p class="form-success-message" v-else-if="success">
      Заявка успешно отправлена
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

      <button class="dialog-button modal-form__button" :disabled="success">
        Оставить заявку
      </button>
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
      success: false,
      errors: [],
    }
  },
  components: {
    PrettyInput,
  },
  props: {
    price: { type: Number, default: 0 },
    calculatorInfo: { type: Object, default: null },
  },
  methods: {
    async checkForm(e) {
      e.preventDefault()
      if (this.success) return
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
        let routename = this.$store.state.routeNames[this.$route.path]
        let body = {
          dev: process.env.APP_ENV === 'dev',
          contact: {
            name: fullname[0],
            surname: fullname[1] || '.',
            phones: [{ phone: phone }],
          },
          description: `Тип формы: ${routename}. Оставить заявку\n${
            this.price ? 'Цена: ' + this.price + '\n' : ''
          }${
            this.calculatorInfo
              ? 'Кол-во компьютеров: ' +
                this.calculatorInfo.computerCount +
                '\n' +
                'Кол-во серверов: ' +
                this.calculatorInfo.serverCount +
                '\n' +
                'Кол-во виртуальных серверов: ' +
                this.calculatorInfo.virtualServerCount +
                '\n' +
                'Кол-во сетевого оборудования: ' +
                this.calculatorInfo.netCount +
                '\n' +
                'Кол-во оргтехники: ' +
                this.calculatorInfo.officeEquipmentCount +
                '\n' +
                'Кол-во IP-телефонов: ' +
                this.calculatorInfo.phoneCount +
                '\n' +
                'Обслуживание видеонаблюдения: ' +
                (this.calculatorInfo.cctv ? 'да' : 'нет') +
                '\n' +
                'Точки доступа: ' +
                (this.calculatorInfo.accessPoints ? 'да' : 'нет') +
                '\n'
              : ''
          }`,
        }
        let gtmName = this.$store.state.gtmNames[this.$route.path]
        let response = await this.$axios
          .post(process.env.CRM_LINK, body)
          // .then((res) => console.log(res.data))
          .then(() => dataLayer.push({ event: gtmName }))
          .finally(
            async () =>
              await this.$axios
                .post(process.env.BOT_LINK, body)
                // .then((res) => console.log(res.data))
                .then(async () => {
                  await this.setSuccess()
                  this.phone = ''
                  this.company = ''
                  this.name = ''
                })
          )
      }
      console.log(this.errors)
    },
    setName(e) {
      this.name = e.target.value
    },
    setPhone(e) {
      this.phone = e.target.value
    },
    setSuccess() {
      this.success = true
      setTimeout(() => (this.success = false), 5000)
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
  box-sizing: border-box;
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
