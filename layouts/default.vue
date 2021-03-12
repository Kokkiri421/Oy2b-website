<template>
  <div class="default-layout">
    <header class="flex-grow-1" :class="{ scroll_colored: scrollPosition > 0 }">
      <default-header />
    </header>
    <div class="flex-grow-1 content"><Nuxt /></div>
    <div class="flex-grow-1 order">order</div>
    <footer class="flex-grow-1">
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
      scrollPosition: 0,
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
  mounted() {
    this.updateScroll()
    window.addEventListener('scroll', this.updateScroll)
  },
}
</script>
<style lang="scss">
@import '~/assets/media_mixin';
body {
  margin: 0;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 1em;
  line-height: 1.4em;
}
.default-layout {
  header {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1em 0;
    transition: background-color 0.3s ease-out;
  }
  .content {
    height: 800px;
    background: #706e67;
  }
  .order {
    height: 500px;
  }
  display: flex;
  flex-direction: column;

  .test-border {
    border: 1px solid black;
  }
  .flex-grow-1 {
    flex-grow: 1;
  }
}

.wrapper {
  max-width: 1300px;
  padding: 0 50px;
  margin: 0 auto;
  @include _900 {
    padding: 0 20px;
  }
  @include _600 {
    padding: 0 10px;
  }
}
.scroll_colored {
  background-color: rgba(0, 0, 0, 0.8);
  transition: background-color 0.3s ease-out;
}
.dialog-button {
  border-radius: 4px;
  padding: 0.8em 1.8em;
  font-weight: 700;
}
.underline-animated-link {
  display: inline;
  position: relative;
  &:before {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: inline-block;
    height: 1px;
    left: 0;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s;
    width: 0;
  }
  &:hover:before {
    width: 50%;
  }
  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: inline-block;
    height: 1px;
    right: 0;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 50%;
  }
}
button {
  &:focus {
    outline: none;
    box-shadow: none;
  }
}
</style>
