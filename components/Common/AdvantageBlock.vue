<template>
  <div class="advantage">
    <h4 class="advantage__header">
      <slot name="header"></slot>
    </h4>
    <div class="advantage__text">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvantageBlock',
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/colors';

.advantage {
  //border-top: 1px solid $base-color1; //var(--color);
  background-color: #fff;
  padding: 1em;
  border-radius: 6px;
  margin-right: 3%;
  margin-bottom: 2em;
  @include _650() {
    margin-bottom: 1em;
  }
  &__header {
    font-weight: 700;
    //font-size: 2em;
    line-height: normal;
    margin-bottom: 0.3em;
    color: $green-color1; //var(--color);
  }
  &__text {
    line-height: 1.4em;
  }
  &:nth-last-child(-n + 1) {
    margin-right: 0;
    @include _1000() {
      margin-bottom: 0;
    }
  }
  @include _1000() {
    margin-right: 0;
  }
}
</style>
