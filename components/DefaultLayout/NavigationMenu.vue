<template>
  <div class="wrapper">
    <div class="container" :class="{ active: isActive }" >
      <nav class="navigation-menu">
        <div class="navigation-menu__item main-menu">
          <ul class="navigation-menu__list">
            <li class="list-item" @click="onClick">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/internet"
                >Интернет до&nbsp;10&nbsp;Гбит/с</NuxtLink
              >
            </li>
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
                to="/service/telefoniya"
                >Телефония</NuxtLink
              >
            </li>
            <li class="list-item" @click="onClick">
              <NuxtLink class="nuxtlink" to="/service/service-it-out">
                <icon
                  :icon-name="'flame-icon'"
                  class="icon icon-left"
                  :view-box="'0 0 611.999 611.999'"
                >
                  <flame-icon /> </icon
                ><span class="underline-animated-link">IT Аутсорсинг</span>
                <icon
                  :icon-name="'flame-icon'"
                  class="icon icon-right"
                  :view-box="'0 0 611.999 611.999'"
                >
                  <flame-icon />
                </icon>
              </NuxtLink>
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
                to="/service/videonablyudenie"
                >Видеонаблюдение</NuxtLink
              >
            </li>
            <li class="list-item" @click="onClick">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/oblachnye-resheniya"
                >Облачные решения</NuxtLink
              >
            </li>
            <li class="list-item" @click="onClick">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/dop-uslugi"
                >Операторам</NuxtLink
              >
            </li>
            <li class="list-item" @click="onClick">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/ip-adresa"
                >IP Адреса</NuxtLink
              >
            </li>
            <li class="list-item" @click="onClick">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/kompleksnye-resheniya"
                >Отрасли</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="navigation-menu__line"></div>
        <div class="navigation-menu__item bottom-menu">
          <ul class="navigation-menu__list">
            <li class="list-item" @click="onClick">
              <NuxtLink class="underline-animated-link nuxtlink" to="/company">
                О компании
              </NuxtLink>
            </li>
            <li class="list-item" @click="onClick">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/vacancies"
              >
                Вакансии
              </NuxtLink>
            </li>
            <li class="list-item" @click="onClick">
              <NuxtLink class="underline-animated-link nuxtlink" to="/contacts">
                Контакты
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <div class="navigation-menu__item social">
          <div class="social-network instagram">
            <a
              class="social-network__link"
              href="https://www.instagram.com/oysterb2b/"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
          <div class="social-network vk">
            <a
              class="social-network__link"
              href="https://vk.com/oystertelecom"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import Icon from '~/components/Icons/Icon'
import FlameIcon from '~/components/Icons/FlameIcon'

export default {
  components: {
    Icon,
    FlameIcon,
  },
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
      let path = event.path || (event.composedPath && event.composedPath())
      let clickArray = path.filter(
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
  computed: {
    
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/scrollbar_mixin';

.container {
  box-shadow: #000;
  box-shadow: 0 0.25em 0.5em 0 rgb(0 0 0 / 25%);
  position: fixed;
  top: -200%;
  transition: top 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  background-color: #fff;
  margin-left: -5em;
  //width: calc(max-content + 10em);
  border-radius: 0 0 6px 6px;

  @include _1300 {
    margin-left: -50px;
    border-radius: 0 0 6px 0;
  }
  @include _650 {
    margin-left: -10px;
    width: 100vw;
    height: 100vh;
    border-radius: 0 0 6px 0;
  }
}
.navigation-menu {
  //@include scrollbars(10px, transparent, transparent);
  margin-top: 96px;
  padding: 2.25em 5em;
  max-height: calc(100vh - 6em - 96px);
  overflow-y: auto;
  
  @include _1300 {
    padding: 2.25em 50px;
  }
  @include _650 {
    //width: 100%;
    margin-top: 64px;
    padding: 1.25em 20px;
    max-height: calc(100vh - 6em );
    margin-left: -10px;
   
  }
  @include scrollbars(10px, rgb(0, 0, 0, 0), transparent);

  &:hover {
    @include scrollbars(10px, rgb(0, 0, 0, 0.25), transparent);
  }
  &__item {
    &:nth-child(1) {
      border-bottom: 1px solid #d81428;
      margin-top: 0 !important;
    }
    &:nth-child(n) {
      margin: 1.5em 0;
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
      color: #000;
      list-style-type: none;
      margin-bottom: 0.9em;
      .nuxtlink {
        &:hover {
          .icon {
            fill: #ff9d00;
          }
        }
        .icon {
          height: 0.75em;
          width: 1em;
          fill: #d81428;
          transition: fill 0.3s ease-out;
          @include _900() {
            display: none;
          }
        }
        .icon-left {
          margin-left: -1.25em;
          margin-right: 0.25em;

          @include _900() {
            display: none;
          }
        }
        .icon-right {
          display: none;
          @include _900() {
            display: inline-block;
          }
        }
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
        fill: #000;
        img {
          vertical-align: middle;
        }
      }
    }
    .instagram {
      margin-right: 0.3em;
      mask: url('~/static/images/instagram.svg') no-repeat center;
      background-color: #000;
    }
    .vk {
      mask: url('~/static/images/vk.svg') no-repeat center;
      background-color: #000;
    }
  }
}
.main-menu {
  font-weight: 700;
}

.active {
  top: 0;
}
.underline-animated-link {
  transition: color 0.2s ease-out;
  cursor: pointer;
  color: #000;
  &:hover {
    color: #d81428;
  }
  &:before {
    background: #d81428;
  }
  &:after {
    background: #d81428;
  }
}
</style>
