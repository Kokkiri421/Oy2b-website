<template>
  <div class="modal-form">
    <h4>Откликнуться на вакансию</h4>
    <form @submit="checkForm">
      <pretty-input
        :name="'name'"
        :placeholder="'Имя'"
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
      <pretty-input
        :name="'cv'"
        :placeholder="'Загрузить резюме'"
        :type="'file'"
        :file="cv ? cv.name : null"
        class="modal-form__item"
        @onInput="setCV"
        :error="errors.includes('cv')"
      ></pretty-input>
      <button class="dialog-button modal-form__button">Оставить резюме</button>
    </form>
  </div>
</template>

<script>
import PrettyInput from '~/components/Common/PrettyInput'
export default {
  data() {
    return {
      name: '',
      phone: '',
      cv: null,
      success: false,
      errors: [],
    }
  },
  components: {
    PrettyInput,
  },
  props: {
    vacancyName: {
      type: String,
      default: '',
    },
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
      if (!this.cv) {
        this.errors.push('cv')
      }
      if (this.errors.length === 0) {
        let fullname = this.name.split(' ')
        let routename = this.$store.state.routeNames[this.$route.path]
        let body = {
          dev: process.env.APP_ENV === 'dev',
          contact: {
            name: fullname[0],
            vacancy: this.vacancyName,
            surname: fullname[1] || '.',
            phones: [{ phone: phone }],
            cv: this.cv,
          },
          //description: `Тип формы: ${routename}. Рассчёт стоимости работ\nКопмания: ${this.company}`,
        }
        console.log(body.contact)
        this.phone = ''
        this.name = ''
        this.cv = null
        this.setSuccess()
        // let response = await this.$axios
        //   .post('https://api-oycrm.oyster.su/site/tickets/v2', body)
        //   .then((res) => console.log(res.data))
        //   .then(() => {
        //     this.phone = ''
        //     this.name = ''
        //     this.company = ''
        //     this.setSuccess()
        //   })
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
    setCV(e) {
      this.cv = Object(e.target.files[0])
    },
    setSuccess() {
      this.success = true
      setTimeout(() => (this.success = false), 2000)
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
  color: $text-color;
  &__item {
    border: 1px solid #dfdfdf;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 1em;
  }
  &__button {
    width: 100%;
  }
  &__privacy {
    font-size: 0.8em;
    line-height: 1.4em;
    color: $text-color;
    .link {
      color: $text-color;
    }
  }
}
</style>
