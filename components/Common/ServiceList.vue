<template>
  <div class="service-list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ServiceList',
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.service-list {
  display: block;
  column-count: 2;

  @include _950() {
    column-count: 1;
  }
}
</style>
