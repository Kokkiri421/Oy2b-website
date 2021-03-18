<template>
  <div class="wrapper">
    <div class="container" :class="{ active: isActive }">
      <nav class="navigation-menu">
        <div class="navigation-menu__item main-menu">
          <ul class="navigation-menu__list">
            <li class="list-item" @click="onClick">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/wi-fi"
              >
                Wi-Fi для бизнеса
              </NuxtLink>
            </li>
            <li class="list-item" @click="onClick">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/internet"
                >Интернет до 10Гбит/с</NuxtLink
              >
            </li>
            <li class="list-item" @click="onClick">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/udalennyy-ofis"
                >Виртуальные сервисы</NuxtLink
              >
            </li>
            <li class="list-item" @click="onClick">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/telefoniya"
                >Телефония</NuxtLink
              >
            </li>
            <li class="list-item">
              <a class="underline-animated-link">IT Аутсорсинг</a>
            </li>
            <li class="list-item">
              <a class="underline-animated-link">Облачные решения</a>
            </li>
            <li class="list-item">
              <a class="underline-animated-link">Видеонаблюдение</a>
            </li>
            <li class="list-item">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/kompleksnye-resheniya"
                >Комплексные решения</NuxtLink
              >
            </li>
            <li class="list-item">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/dop-uslugi"
                >Операторам</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="navigation-menu__item bottom-menu">
          <ul class="navigation-menu__list">
            <li class="list-item">
              <a class="underline-animated-link">О компании</a>
            </li>
            <li class="list-item">
              <a class="underline-animated-link">Вакансии</a>
            </li>
            <li class="list-item">
              <a class="underline-animated-link">Контакты</a>
            </li>
          </ul>
        </div>
        <div class="navigation-menu__item social">
          <div class="social-network instagram">
            <a class="social-network__link"
              ><img src="~/static/images/instagram.svg"
            /></a>
          </div>
          <div class="social-network vk">
            <a class="social-network__link"
              ><img src="~/static/images/vk.svg"
            /></a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
  methods: {
    hideMenuOnClick: function (event) {
      let clickArray = event.path.filter(
        (item) =>
          item.id === 'navigation-menu' || item.id === 'navigation-menu-button'
      )
      if (this.isActive && !!!clickArray.length) {
        this.onClick()
      }
    },
  },
  mounted() {
    window.addEventListener('click', this.hideMenuOnClick)
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';

.container {
  position: fixed;
  top: -200%;
  transition: top 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  background-color: #d81428;
  margin-left: -5em;
  width: 440px;

  @include _1300 {
    margin-left: -50px;
  }
  @include _650 {
    margin-left: -20px;
    width: 320px;
  }
}
.navigation-menu {
  margin-top: 96px;
  padding: 2.25em 5em;
  max-height: calc(100vh - 6em - 96px);
  overflow-y: auto;
  @include _1300 {
    padding: 2.25em 50px;
  }
  @include _650 {
    margin-top: 64px;
    padding: 1.25em 20px;
    max-height: calc(100vh - 4em - 64px);
  }

  &__item {
    &:nth-child(n) {
      margin-bottom: 3em;
    }
    &:nth-last-child(-n + 1) {
      margin-bottom: 0;
    }
  }
  &__list {
    padding: 0;
    margin: 0;

    .list-item {
      font-size: 1.5em;
      line-height: normal;
      color: #fff;
      list-style-type: none;
      margin-bottom: 0.9em;
      .nuxtlink {
        color: #fff;
      }
    }
  }

  .social {
    display: flex;
    flex-direction: row;
    .social-network {
      &__link {
        display: inline-block;
        vertical-align: middle;
        width: 34px;
        height: 34px;
        line-height: 34px;

        img {
          vertical-align: middle;
        }
      }
    }
    .instagram {
      margin-right: 0.3em;
    }
  }
}
.main-menu {
  font-weight: 700;
}

.active {
  top: 0;
}
</style>
