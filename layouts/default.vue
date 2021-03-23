<template>
  <div class="default-layout">
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
import OrderBlock from '~/components/DefaultLayout/OrderBlock'

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
    OrderBlock,
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
body {
  margin: 0;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 1em;
  line-height: 1.4em;
  overflow-x: hidden;
}
.default-layout {
  header {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1em 0;
    transition: background-color 0.3s ease-out;
    z-index: 100;
  }
  .content {
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
}
.scroll_colored_default {
  background-color: rgba(0, 0, 0, 0.8);
  transition: none;
}

.dialog-button {
  border-radius: 4px;
  padding: 0.8em 1.8em;
  font-weight: 700;
  background-color: #d81428;
  color: #fff;
  font-size: 1em;
  line-height: 1.6em;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease-out, background-color 0.2s ease-out,
    border 0.2s ease-out, opacity 0.2s ease-out;
  &:hover {
    background-color: #ec3346;
  }
}
.article {
  margin-bottom: 1em;
}
.article:nth-last-child(-n + 1) {
  margin-bottom: 0;
}
.dn-600 {
  @include _600() {
    display: none;
  }
}
.underline-animated-link {
  display: inline;
  position: relative;
  &:before {
    background: #fff;
    bottom: 0;
    content: '';
    display: inline-block;
    height: 1px;
    left: 0;

    position: absolute;

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
.page-content {
  margin: 6em 0 3em;
  @include _950() {
    margin: 3em 0;
  }
}
.page-content-block {
  margin-bottom: 3em;
  @include _950() {
    margin-bottom: 2em;
  }
}
.nuxtlink {
  text-decoration: none;
}
.table-container {
  overflow-x: auto;
  .table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    max-width: 100vw;
    position: relative;
    border: 1px solid #eee;
    thead {
      width: 100%;
      th {
        &:first-child {
          position: sticky;
          left: 0;
          z-index: 2;
          background-color: #fff;
        }
      }
    }
    tbody {
      tr {
        &:nth-child(even) {
          background-color: #fff;
        }
        &:nth-child(odd) {
          background-color: #eee;
        }
      }
      th {
        position: sticky;
        left: 0;
        z-index: 1;
        background-color: inherit;
      }
      .default-hidden {
        display: none;
        opacity: 0;
        transition: 1s ease-out;
      }
      .show {
        display: table-row;
        opacity: 1;
      }
    }
    th,
    td {
      padding: 0.66em 2.12em;
      border: 1px solid #eee;
      text-align: center;
      @include _900() {
        font-size: 0.9em;
        padding: 0.25em 0.5em;
      }
      @include _600() {
        font-size: 0.8em;
        line-height: 1.2em;
      }
    }
    th {
      text-align: left;
      font-weight: 400;
    }
    &__icon {
      width: 1.25em;
      height: 1.25em;
      vertical-align: middle;
    }
    .dialog-button {
      padding: 0.4em 1em;
    }
  }
}
button {
  font: 400 1em/1.1em;
  font-family: Montserrat, sans-serif;
  line-height: 1.6em;
  &:focus {
    outline: none;
    box-shadow: none;
  }
}
p {
  margin: 0;
  padding: 0;
}
ul {
  margin: 0;
  padding-left: 1.2em;
}
h1 {
  font-size: 4em;
  line-height: 1.2em;
  margin-bottom: 0.5em;
  @include _1300() {
    font-size: 3em;
  }
  @include _700() {
    font-size: 2em;
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
h5 {
  font-size: 1.5em;
  @include _1300() {
    font-size: 1.15em;
  }
  @include _700() {
    font-size: 1.1em;
  }
}
h6 {
  font-size: 1em;
}
</style>
