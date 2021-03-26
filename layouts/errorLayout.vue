<template>
  <div class="error-background layout">
    <header class="flex-grow-1">
      <default-header />
    </header>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'errorLayout',
}
</script>

<style lang="scss">
@import '~/assets/media_mixin';
@import '~/assets/common-style';
.error-background {
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  background-image: url('~/static/images/backgrounds/404-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #111;
  @include _900() {
    background-image: none;
  }
}
</style>
