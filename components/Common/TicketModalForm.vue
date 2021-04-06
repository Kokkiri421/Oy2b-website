<template>
  <div class="modal-form">
    <h4>Оставить заявку</h4>
    <form>
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
    font-size: 0.6em;
    line-height: 1.4em;
    color: #000;

    .link {
      color: #000;
      transition: color 0.3s ease-out;
      &:hover {
        color: #d81428;
      }
    }
  }
}
</style>
