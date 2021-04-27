<template>
  <div class="special-price">
    <h4>Как сэкономить?</h4>
    <div class="banner">
      <div class="content">
        <div class="text">
          <slot name="text"></slot>
        </div>
        <!--        <div class="image-container">-->
        <!--          <img-->
        <!--            class="image"-->
        <!--            src="~/static/images/block-images/special-price.png"-->
        <!--          />-->
        <!--        </div>-->
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
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .text {
    font-size: 1.7em;
    line-height: normal;
    max-width: calc(100% - 150px - 1em);
    @include _1300() {
      font-size: 1.5em;
    }
    @include _700() {
      font-size: 1.2em;
    }
    @include _650() {
      max-width: 100%;
    }
  }
  .image-container {
    height: 100%;
    width: 150px;
    position: relative;
    .image {
      position: absolute;
      width: 300px;
      height: 300px;
      bottom: -135px;
      left: -90px;
      transform: rotate(-30deg);
    }
    @include _650() {
      display: none;
    }
  }
}
</style>
