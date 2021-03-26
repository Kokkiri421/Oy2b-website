<template>
  <div class="layout">
    <header class="flex-grow-1 colored-header">
      <default-header />
    </header>
    <div class="flex-grow-1 content"><Nuxt /></div>
    <footer class="flex-grow-1" ref="footer">
      <default-footer />
    </footer>
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
</style>
