<template>
  <div class="footer">
    <div class="wrapper">
      <div class="footer-top footer-item">
        <div class="logo">
          <NuxtLink class="logo__link" :to="'/'">
            <div
              class="logo__img"
              src="~/static/images/header-logo.svg"
              alt="OysterTelecom"
              @click="onLogoClick"
            />
          </NuxtLink>
        </div>
        <div class="menu smallfont-400">
          <ul class="menu__list">
            <li class="list-item">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/internet"
                ><span>Интернет до 10Гбит/с</span></NuxtLink
              >
            </li>
            <li class="list-item">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/wi-fi"
              >
                <span>Wi-Fi для бизнеса</span>
              </NuxtLink>
            </li>
            <li class="list-item">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/telefoniya"
                ><span>Телефония</span></NuxtLink
              >
            </li>
            <li class="list-item">
              <NuxtLink class="nuxtlink" to="/service/service-it-out">
                <icon
                  :icon-name="'flame-icon'"
                  class="icon"
                  :view-box="'0 0 611.999 611.999'"
                >
                  <flame-icon />
                </icon>
                <span class="underline-animated-link"
                  ><span>IT аутсорсинг</span></span
                >
              </NuxtLink>
            </li>
            <li class="list-item">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/udalennyy-ofis"
                ><span>Виртуальные сервисы</span></NuxtLink
              >
            </li>
            <li class="list-item">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/videonablyudenie"
                ><span>Видеонаблюдение</span></NuxtLink
              >
            </li>
            <li class="list-item">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/oblachnye-resheniya"
                ><span>Облачные решения</span></NuxtLink
              >
            </li>

            <li class="list-item">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/dop-uslugi"
                ><span>Операторам</span></NuxtLink
              >
            </li>
            <li class="list-item">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/ip-adresa"
                ><span>IP Адреса</span></NuxtLink
              >
            </li>
            <li class="list-item">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/kompleksnye-resheniya"
                ><span>Отрасли</span></NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom footer-item smallfont-400">
        <div class="copy">© 2000-2021 Oyster Telecom</div>
        <div class="social">
          <div class="social-network instagram">
            <a
              class="social-network__link"
              href="https://www.instagram.com/oysterb2b/"
              target="_blank"
              rel="noopener noreferrer"
              ><img src="~/static/images/instagram.svg"
            /></a>
          </div>
          <div class="social-network vk">
            <a
              class="social-network__link"
              href="https://vk.com/oystertelecom"
              target="_blank"
              rel="noopener noreferrer"
              ><img src="~/static/images/vk.svg"
            /></a>
          </div>
        </div>
        <div class="contacts">
          <NuxtLink class="underline-animated-link nuxtlink" to="/contacts">
            <span>Контакты</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '~/components/Icons/Icon'
import FlameIcon from '~/components/Icons/FlameIcon'
export default {
  name: 'DefaultFooter',
  components: {
    Icon,
    FlameIcon,
  },
  methods: {
    onLogoClick: function () {
      if (this.$route.path === '/') {
        window.scrollTo({
          top: 0,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/colors';

.footer {
  position: relative;
}
.footer-item {
  padding: 2em 0;
  @include _1366 {
    padding: 1em 0;
  }
}
.footer-top {
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  flex-direction: row;
  @include _600() {
    flex-wrap: wrap;
  }
  .logo {
    width: fit-content;
    padding-right: 2em;
    &__link {
      display: inline-block;
    }
    &__img {
      mask: url('~/static/images/header-logo.svg') no-repeat center;
      background-color: $red-color1;
      transition: background-color 0.2s ease-out;
      //margin-top:  -0.5em;
      height: 41px;
      width: 104px;
      @include _400 {
        height: 30px;
        width: 76px;
      }
    }
  }
  .menu {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: center;
      line-height: 40px;

      padding: 0;
      margin: 0.5em 0 0;
      @include _600() {
        justify-content: flex-start;
        line-height: 2em;
        margin-top: 1em;
      }
      .list-item {
        list-style-type: none;
        margin: 0 0 0 1.2em;
        @include _1366() {
          margin: 0 0 0 1.95em;
        }
        @include _600() {
          margin: 0 4.5% 0 0;
        }
        &:hover {
          .icon {
            fill: #ff9d00;
          }
        }
        .icon {
          width: 1em;
          height: 1em;
          fill: $red-color1;
          transition: fill 0.3s ease-out;
        }
      }
    }
  }
}
.footer-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap-reverse;
  .copy {
    flex-basis: calc(100% / 3);
    @include _600 {
      flex-basis: auto;
    }
    color: #999;
  }
  .social {
    display: flex;
    flex-direction: row;
    flex-basis: calc(100% / 3);
    justify-content: center;
    @include _600 {
      flex-basis: auto;
      justify-content: flex-end;
    }

    .social-network {
      width: fit-content;
      height: fit-content;
      border-radius: 50%;
      &__link {
        display: inline-block;
        vertical-align: middle;
        width: 36px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        @include _400 {
          width: 30px;
          height: 30px;
          line-height: 30px;
        }
        img {
          vertical-align: middle;
          width: 18px;
        }
      }
    }
    .instagram {
      background: radial-gradient(
        circle at 30% 107%,
        #fdf497 0,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #285aeb 90%
      );
      a {
        img {
          height: 18px;
        }
      }
    }
    .vk {
      margin-left: 0.5em;
      background: #4c6c91;
      a {
        img {
          height: 12px;
        }
      }
    }
  }
  .contacts {
    flex-basis: calc(100% / 3);
    display: flex;
    justify-content: flex-end;
    @include _600 {
      flex-basis: 100%;
      justify-content: flex-start;
      margin: 1em 0 0.5em 0;
    }
  }
}
.underline-animated-link {
  transition: color 0.2s ease-out;
  cursor: pointer;
  color: #000;
  &:hover {
    color: #d81428;
  }
  span {
    &:before {
      background: #d81428;
    }
    &:after {
      background: #d81428;
    }
  }
}

.smallfont-400 {
  @include _400() {
    font-size: 0.8em;
  }
}
</style>
