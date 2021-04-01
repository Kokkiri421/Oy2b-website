<template>
  <div class="modal-form">
    <h4>Оставить заявку</h4>
    <pretty-input
      :name="'name'"
      :placeholder="'Ваше Имя'"
      class="modal-form__item"
    ></pretty-input>
    <pretty-input
      :name="'phone'"
      :placeholder="'Телефон'"
      class="modal-form__item"
    ></pretty-input>
    <pretty-input
      :name="'cv'"
      :placeholder="'Резюме'"
      :type="'file'"
      class="modal-form__item"
    ></pretty-input>
    <button class="dialog-button modal-form__button">Оставить заявку</button>
  </div>
</template>

<script>
import PrettyInput from '~/components/Common/PrettyInput'
export default {
  components: {
    PrettyInput,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.modal-form {
  padding: 2em;
  max-width: 650px;
  color: #000;
  &__item {
    border: 1px solid #dfdfdf;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 1em;
  }
  &__button {
    width: 100%;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
  &__privacy {
    font-size: 0.8em;
    line-height: 1.4em;
    color: #000;
    .link {
      color: #000;
    }
  }
}
</style>
