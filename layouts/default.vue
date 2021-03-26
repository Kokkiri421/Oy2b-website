<template>
  <div class="layout">
    <header
      class="flex-grow-1"
      :class="{
        scroll_colored: scrollPosition > 0,
        scroll_colored_default:
          defaultScrollPosition > 0 && scrollPosition === null,
      }"
    >
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
  data() {
    return {
      scrollPosition: null,
      defaultScrollPosition: null,
    }
  },

  components: {
    DefaultHeader,
    DefaultFooter,
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
  },
  computed: {},
  mounted() {
    this.defaultScrollPosition = window.scrollY

    window.addEventListener('scroll', this.updateScroll)
  },
}
</script>
<style lang="scss">
@import '~/assets/media_mixin';
@import '~/assets/common-style';
.scroll_colored {
  background-color: rgba(0, 0, 0, 0.8);
}
.scroll_colored_default {
  background-color: rgba(0, 0, 0, 0.8);
  transition: none;
}
</style>
