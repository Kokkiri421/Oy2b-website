<template>
  <div class="layout">
    <header class="flex-grow-1">
      <default-header />
    </header>
    <nuxt />
    <div class="lines">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <!--    <div class="footer-bg"></div>-->
    <div class="header-bg"></div>
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
</style>
