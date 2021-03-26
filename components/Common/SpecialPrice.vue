<template>
  <div class="special-price">
    <h5>Как сэкономить?</h5>
    <div class="banner" :style="{ background: backgroundColor }">
      <div class="text">
        <slot name="text"></slot>
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
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.special-price {
  .banner {
    color: #fff;
    padding: 1.5em;
    font-size: 1.5em;
    line-height: 150%;
    border-radius: 4px;
    @include _900() {
      padding: 1em;
      font-size: 1.25em;
      line-height: 125%;
    }
  }
}
</style>
