<template>
  <div class="advantage-list">
    <slot name="advantage-list"></slot>
  </div>
</template>

<script>
export default {
  name: 'AdvantageList',
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.advantage-list {
  display: flex;
  flex-direction: row;

  @include _900() {
    flex-direction: column;
  }
}
</style>
