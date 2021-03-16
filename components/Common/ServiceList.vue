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
  margin: 8em 0 3em;
  @include _950() {
    column-count: 1;
  }
  @include _650() {
    margin: 3em 0;
  }
}
</style>
