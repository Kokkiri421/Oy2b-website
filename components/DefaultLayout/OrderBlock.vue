<template>
  <div class="wrapper order">
    <div class="order-wrapper">
      <div class="order-block">
        <h4 class="order-block__header">
          Получите бесплатную консультацию специалиста
          <br />
          в области бизнес провайдинга:
        </h4>
        <div class="order-block__form-container">
          <form class="order-block__form">
            <div clas="order-block__form-item"></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderBlock',
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.order-wrapper {
  padding: 3em 0;
  .order-block {
    background-color: #f2f2f2;
    border-radius: 6px;
    padding: 2.75em 3em;
    @include _600 {
      padding: 1em 1.2em;
    }

    &__header {
    }
  }
}
</style>
