<template>
  <div class="default-layout">
    <header class="flex-grow-1" :class="{ scroll_colored: scrollPosition > 0 }">
      <default-header />
    </header>
    <div class="flex-grow-1 content"><Nuxt /></div>
    <div class="flex-grow-1">
      <order-block />
    </div>
    <footer class="flex-grow-1">
      <default-footer />
    </footer>
  </div>
</template>

<script>
import DefaultHeader from '~/components/DefaultLayout/DefaultHeader'
import DefaultFooter from '~/components/DefaultLayout/DefaultFooter'
import OrderBlock from '~/components/DefaultLayout/OrderBlock'
export default {
  data() {
    return {
      scrollPosition: 0,
    }
  },

  components: {
    DefaultHeader,
    DefaultFooter,
    OrderBlock,
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
    z-index: 1;
  }
  .content {
    height: 800px;
    background: #706e67;
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
form {
  .pretty-input {
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 23%;
    margin: 0 2% 1em 0;
    .form-input {
      appearance: none;
      padding: 0.8em 1em;
      border: 1px solid #fff;
      border-radius: 4px;
      min-width: 280px;
      line-height: 1.6em;
      min-height: 3.2em;
      box-sizing: border-box;
      resize: none;
      font: 400 1em/1.1em Montserrat, sans-serif;
      &__placeholder {
        position: absolute;
        line-height: 1.6em;
        left: 1em;
        top: 0;
        color: #999;
        font-size: 1em;
        padding: 0 0.3em;
        transform: scale(1) translateY(0.8em);
        transition: transform 0.2s ease-out;
        transform-origin: 0 0;
        pointer-events: none;
        border-radius: 4px;
      }
    }
  }
}
h4 {
  font-size: 2em;
  margin: 0 0 0.7em 0;
  font-weight: 700;
  line-height: normal;
  @include _1300() {
    font-size: 1.5em;
  }
  @include _700() {
    font-size: 1.2em;
  }
}
</style>
