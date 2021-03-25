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
            <img
              class="logo__img"
              src="https://oy2b.ru/img/logo2x.png"
              alt="OysterTelecom"
            />
          </NuxtLink>
        </div>
        <div class="menu-init">
          <button
            class="menu-init__button"
            @click="showMenu"
            id="navigation-menu-button"
          >
            <img src="~/static/images/menuIcon.svg" />
          </button>
        </div>
      </div>
      <div class="header-contacts">
        <div class="phone">
          <a href="tel:+781260002030" class="phone__link">+7 (812) 600-2030</a>
        </div>
        <div class="callback">
          <button class="dialog-button callback__button" @click="showModal">
            Получить консультацию
          </button>
        </div>
      </div>
    </div>
    <modal-window :show="isModalShown" @onClick="showModal"
      ><ConsultationModalForm @onClick="showModal"
    /></modal-window>
  </div>
</template>

<script>
import NavigationMenu from '~/components/DefaultLayout/NavigationMenu'
import ModalWindow from '~/components/Common/ModalWindow'
import ConsultationModalForm from '~/components/DefaultLayout/ConsultationModalForm'

export default {
  data() {
    return {
      windowWidth: null,
      isActiveNavigationMenu: false,
      isModalShown: false,
    }
  },
  components: {
    NavigationMenu,
    ModalWindow,
    ConsultationModalForm,
  },
  computed: {
    activeMenuStatus: function () {
      return this.isActiveNavigationMenu
    },
  },
  methods: {
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
    window.addEventListener('resize', this.updateWindowWidth)
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
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
  display: flex;
  flex-direction: row;
  z-index: 1;
  .logo {
    margin-right: 40px;
    @include _400 {
      margin-right: 0.5em;
    }
    &__link {
      display: inline-block;
    }
    &__img {
      height: 41px;
      @include _400 {
        height: 30px;
      }
    }
  }
  .menu-init {
    display: flex;
    align-items: center;
    &__button {
      width: 30px;
      height: 24px;
      background: transparent;
      border: none;
      padding: 0;
      cursor: pointer;
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
      color: #fff;
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
      color: #fff;
      cursor: pointer;
      background-color: transparent;
      border: 1px solid #fff;

      line-height: 1.6em;

      font-size: 0.6em;
      transition: color 0.2s ease-out, background-color 0.2s ease-out,
        border 0.2s ease-out, opacity 0.2s ease-out;
      &:hover {
        background-color: #d81428;
        border-color: #d81428;
      }
    }
  }
}
</style>
