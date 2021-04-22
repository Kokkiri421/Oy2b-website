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

  @include _1000() {
    flex-direction: column;
    box-sizing: border-box;
  }
}
</style>
