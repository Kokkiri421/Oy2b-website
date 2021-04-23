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

.layout {
  height: 100%;
  position: relative;
  overflow: hidden;
}
.footer-bg {
  position: absolute;
  width: 2080px;
  height: 1078px;
  transform: rotate(-180deg);
  mask: url('~/static/images/backgrounds/bg.svg') no-repeat center;
  //////
  bottom: -700px;
  left: -200px;
  background-color: $form-bg-color;
  z-index: -1;
}
.scroll_colored {
  background-color: rgba(0, 0, 0, 0.8);
}
.scroll_colored_default {
  background-color: rgba(0, 0, 0, 0.8);
  transition: none;
}
.lines {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  box-sizing: border-box;
  width: calc(100vw - 20em);
  @include _900() {
    width: calc(100vw - 5em);
  }
  @include _600() {
    width: calc(100vw - 3em);
  }
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin: 0 auto;
  z-index: -2;
  .line {
    width: 1px;
    height: 100%;
    background: #eee;
    //&:nth-child(1) {
    //  background: transparent;
    //}
    //&:nth-last-child(-n + 1) {
    //  background: transparent;
    //}
  }
}
</style>
