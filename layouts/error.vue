<template>
  <div class="error-container">
    <div class="error">
      <p class="error__code" v-if="error.statusCode">{{ error.statusCode }}</p>
      <p class="error__message" v-if="error.statusCode === 404">
        Страница, которую вы&nbsp;ищете, не&nbsp;найдена.
      </p>
      <p class="error__message" v-else>Произошла неизвестная ошибка.</p>
      <NuxtLink to="/">
        <button class="error__button dialog-button">
          Вернуться на главную
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'errorLayout',
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/common-style';
.error-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  .error {
    flex-grow: 1;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 10em;
    &__code {
      color: #fff;
      font-size: 8em;
      line-height: normal;
      text-align: center;
      display: none;
      @include _900() {
        display: block;
      }
    }
    &__message {
      color: #fff;
      font-size: 1.6em;
      line-height: normal;
      padding-bottom: 1em;
      text-align: center;
    }
    &__button {
      width: 100%;
    }
    @include _900() {
      justify-content: center;
      margin-bottom: 0;
    }
  }
}
</style>
