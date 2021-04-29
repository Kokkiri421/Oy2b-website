<template>
  <div class="container">
    <navigation-menu
      :isActive="activeMenuStatus"
      :on-click="hideMenu"
      id="navigation-menu"
    />
    <div class="header wrapper">
      <div class="header-menu">
        <div class="logo" @click="hideMenu">
          <NuxtLink class="logo__link" :to="'/'">
            <div
              class="logo__img"
              @click="onLogoClick"
              :class="{
                isActive: activeMenuStatus,
                scroll_colored_bg: scrollPosition > 0,
                scroll_colored_bg_default:
                  (defaultScrollPosition > 0 && scrollPosition === null) ||
                  defaultColored,
              }"
              src="~/static/images/header-logo.svg"
              alt="OysterTelecom"
            />
          </NuxtLink>
        </div>
        <div class="menu-init">
          <button
            class="menu-init__button"
            :class="{
              isActive: activeMenuStatus,
              scroll_colored_bg: scrollPosition > 0,
              scroll_colored_bg_default:
                (defaultScrollPosition > 0 && scrollPosition === null) ||
                defaultColored,
            }"
            @click="showMenu"
            id="navigation-menu-button"
          ></button>
          <desktop-menu
            class="menu-init__menu"
            :class="{
              scroll_colored: scrollPosition > 0,
              scroll_colored_default:
                (defaultScrollPosition > 0 && scrollPosition === null) ||
                defaultColored,
            }"
          />
        </div>
      </div>
      <div class="header-contacts">
        <div class="phone">
          <a
            href="tel:+781260002030"
            :class="{
              scroll_colored: scrollPosition > 0,
              scroll_colored_default:
                (defaultScrollPosition > 0 && scrollPosition === null) ||
                defaultColored,
            }"
            class="phone__link header-tel"
            >+7 (812) 600-2030</a
          >
        </div>
        <div class="callback">
          <button
            class="dialog-button callback__button"
            :class="{
              scroll_colored: scrollPosition > 0,
              scroll_colored_default:
                (defaultScrollPosition > 0 && scrollPosition === null) ||
                defaultColored,
            }"
            @click="showModal"
          >
            Получить консультацию
          </button>
        </div>
      </div>
    </div>
    <modal-window v-if="isModalShown" :show="isModalShown" @onClick="showModal"
      ><ConsultationModalForm @onClick="showModal"
    /></modal-window>
  </div>
</template>

<script>
import NavigationMenu from '~/components/DefaultLayout/NavigationMenu'
import ModalWindow from '~/components/Common/ModalWindow'
import ConsultationModalForm from '~/components/Common/ConsultationModalForm'
import DesktopMenu from '~/components/DefaultLayout/DesktopMenu'

export default {
  data() {
    return {
      windowWidth: null,
      isActiveNavigationMenu: false,
      isModalShown: false,
      scrollPosition: null,
      defaultScrollPosition: null,
    }
  },
  components: {
    NavigationMenu,
    ModalWindow,
    ConsultationModalForm,
    DesktopMenu,
  },
  props: {
    defaultColored: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    activeMenuStatus: function () {
      return this.isActiveNavigationMenu
    },
  },
  methods: {
    onLogoClick: function () {
      if (this.$route.path === '/') {
        window.scrollTo({
          top: 0,
        })
      }
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    updateWindowWidth() {
      this.windowWidth = window.innerWidth
    },
    showMenu() {
      this.isActiveNavigationMenu = !this.isActiveNavigationMenu
    },
    hideMenu() {
      this.isActiveNavigationMenu = false
    },
    showModal() {
      this.isModalShown = !this.isModalShown
    },
  },
  beforeMount() {
    this.windowWidth = window.innerWidth
  },
  mounted() {
    this.defaultScrollPosition = window.scrollY
    window.addEventListener('scroll', this.updateScroll)
    window.addEventListener('resize', this.updateWindowWidth)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateScroll)
    window.removeEventListener('resize', this.updateWindowWidth)
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/colors';
.scroll_colored {
  color: #fff !important;
  stroke: #fff !important;
  border-color: #fff !important;
}
.scroll_colored_default {
  color: #fff !important;
  stroke: #fff !important;
  border-color: #fff !important;
}
.scroll_colored_bg {
  background-color: #fff !important;
}
.scroll_colored_bg_default {
  background-color: #fff !important;
}
.callback {
  position: relative;
}

.container {
  width: 100%;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 0;
  font-weight: 700;
  font-size: 1.2em;
  text-decoration-style: solid;
  @include _400() {
    font-size: 1em;
  }
}
.header-menu {
  color: $header-color !important;
  display: flex;
  flex-direction: row;
  z-index: 1;
  .logo {
    margin-right: 2.1em;
    @include _400 {
      margin-right: 0.5em;
    }
    &__link {
      display: inline-block;
    }
    &__img {
      mask: url('~/static/images/header-logo.svg') no-repeat center;
      background-color: $red-color1;
      transition: background-color 0.3s ease-out;
      height: 2.1em;
      width: 5.4em;
      @include _400 {
        height: 2em;
        width: 5em;
      }
    }
  }
  .menu-init {
    display: flex;
    align-items: center;
    &__button {
      mask: url('~/static/images/menuIcon.svg') no-repeat center;
      transition: background-color 0.3s ease-out;
      display: none;
      width: 30px;
      height: 24px;
      background-color: $red-color1;
      border: none;
      padding: 0;
      cursor: pointer;
      @include _1100() {
        display: block;
      }
    }
    &__menu {
      background-color: transparent;
      color: $header-color;
      stroke: $header-color;
      transition: 0.3s color ease-out, 0.3s stroke ease-out;
      @include _1100() {
        display: none;
      }
    }
  }
}
.header-contacts {
  display: flex;
  flex-direction: row;
  padding: 2px 0;
  .phone {
    &__link {
      display: flex;
      align-items: center;
      color: $header-color;
      background-color: transparent;
      transition: 0.3s color ease-out;
      cursor: default;
      text-decoration: none;
      height: 100%;
      top: 10px;
    }
  }
  .callback {
    margin-left: 20px;
    @include _700 {
      display: none;
    }
    font: 700 1/1.4em Montserrat, sans-serif;
    &__button {
      color: $header-color;
      cursor: pointer;
      background-color: transparent;
      border: 1px solid $header-color;
      z-index: -1;
      line-height: 1.6em;

      font-size: 0.6em;
      transition: color 0.2s ease-out, background-color 0.2s ease-out,
        border 0.2s ease-out, opacity 0.2s ease-out;
      &:hover {
        background-color: #d81428;
        border-color: #d81428 !important;
        color: #fff;
      }
    }
  }
}
.isActive {
  background-color: #d81428 !important;
}
</style>
