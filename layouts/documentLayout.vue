<template>
  <div class="layout">
    <header class="flex-grow-1 colored-header">
      <default-header :default-colored="true" />
    </header>
    <div class="flex-grow-1 content"><Nuxt /></div>
    <footer class="flex-grow-1" ref="footer">
      <default-footer />
    </footer>
    <div class="lines">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <div class="footer-bg"></div>
    <div class="header-bg"></div>
  </div>
</template>

<script>
import DefaultHeader from '~/components/DefaultLayout/DefaultHeader'
import DefaultFooter from '~/components/DefaultLayout/DefaultFooter'

export default {
  components: {
    DefaultHeader,
    DefaultFooter,
  },
}
</script>

<style lang="scss">
@import '~/assets/media_mixin';
@import '~/assets/common-style';
.colored-header {
  background-color: rgba(0, 0, 0, 0.8);
}
.header-bg {
  position: absolute;
  width: 2080px;
  height: 1078px;
  mask: url('~/static/images/backgrounds/bg.svg') no-repeat center;
  //////
  top: -450px;
  right: -150px;
  background-color: $light-blue-color;
  z-index: -1;
}
</style>
