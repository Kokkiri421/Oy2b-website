<template>
  <div class="special-price">
    <h4>Как сэкономить?</h4>
    <div class="banner">
      <div>
        <div class="text">
          <slot name="text"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpecialPrice',
  props: {
    backgroundColor: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/colors';
.special-price {
  .banner {
    padding: 1em;

    border-radius: 6px;
    background-color: $form-bg-color;
  }
  .text {
    font-size: 1.7em;
    line-height: normal;
    @include _1300() {
      font-size: 1.5em;
    }
    @include _700() {
      font-size: 1.2em;
    }
  }
}
</style>
