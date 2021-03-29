<template>
  <div class="advantage">
    <div class="advantage__header"><slot name="header"></slot></div>
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
  padding-top: 1em;
  border-top: 1px solid $base-color1;//var(--color);
  margin-right: 3%;
  margin-bottom: 2em;
  &__header {
    font-weight: 700;
    font-size: 2em;
    line-height: normal;
    margin-bottom: 0.3em;
    color: $base-color1;//var(--color);
  }
  &__text {
    line-height: 1.4em;
  }
  &:nth-last-child(-n + 1) {
    margin-right: 0;
    @include _900() {
      margin-bottom: 0;
    }
  }
  @include _900() {
    border-top: none;
    padding-top: 0;
  }
}
</style>
