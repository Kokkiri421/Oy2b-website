<template>
  <div class="company-services">
    <h4>Услуги связи и ИТ сервисы в Санкт‑Петербурге</h4>
    <div class="service-buttons">
      <ul class="service-button-list">
        <animate-on-viewport>
          <li
            class="service-button"
            slot-scope="item"
            :is-animated="item.isAnimated"
            :class="{ animated: item.isAnimated }"
          >
            <NuxtLink
              class="service-button__link nuxtlink"
              to="/service/internet"
              >Интернет до 10Гбит/с</NuxtLink
            >
          </li>
        </animate-on-viewport>
        <animate-on-viewport>
          <li
            class="service-button"
            slot-scope="item"
            :is-animated="item.isAnimated"
            :class="{ animated: item.isAnimated }"
          >
            <NuxtLink class="service-button__link nuxtlink" to="/service/wi-fi">
              Wi-Fi для бизнеса
            </NuxtLink>
          </li>
        </animate-on-viewport>
        <animate-on-viewport>
          <li
            class="service-button"
            slot-scope="item"
            :is-animated="item.isAnimated"
            :class="{ animated: item.isAnimated }"
          >
            <NuxtLink
              class="service-button__link nuxtlink"
              to="/service/telefoniya"
              >Телефония</NuxtLink
            >
          </li>
        </animate-on-viewport>
        <animate-on-viewport>
          <li
            class="service-button"
            slot-scope="item"
            :is-animated="item.isAnimated"
            :class="{ animated: item.isAnimated }"
          >
            <NuxtLink
              class="service-button__link nuxtlink"
              to="/service/service-it-out"
            >
              <icon
                :icon-name="'flame-icon'"
                class="service-button__icon"
                :view-box="'0 0 611.999 611.999'"
              >
                <flame-icon />
              </icon>

              IT аутсорсинг
            </NuxtLink>
          </li>
        </animate-on-viewport>
        <animate-on-viewport>
          <li
            class="service-button"
            slot-scope="item"
            :is-animated="item.isAnimated"
            :class="{ animated: item.isAnimated }"
          >
            <NuxtLink
              class="service-button__link nuxtlink"
              to="/service/dop-uslugi"
              >Операторам</NuxtLink
            >
          </li>
        </animate-on-viewport>
        <animate-on-viewport>
          <li
            class="service-button"
            slot-scope="item"
            :is-animated="item.isAnimated"
            :class="{ animated: item.isAnimated }"
          >
            <NuxtLink
              class="service-button__link nuxtlink"
              to="/service/udalennyy-ofis"
              >Виртуальные сервисы</NuxtLink
            >
          </li>
        </animate-on-viewport>
        <animate-on-viewport>
          <li
            class="service-button"
            slot-scope="item"
            :is-animated="item.isAnimated"
            :class="{ animated: item.isAnimated }"
          >
            <NuxtLink
              class="service-button__link nuxtlink"
              to="/service/videonablyudenie"
              >Видеонаблюдение</NuxtLink
            >
          </li>
        </animate-on-viewport>
        <animate-on-viewport>
          <li
            class="service-button"
            slot-scope="item"
            :is-animated="item.isAnimated"
            :class="{ animated: item.isAnimated }"
          >
            <NuxtLink
              class="service-button__link nuxtlink"
              to="/service/ip-adresa"
              >IP Адреса</NuxtLink
            >
          </li>
        </animate-on-viewport>
        <!--        <animate-on-viewport>-->
        <!--          <li-->
        <!--            class="service-button"-->
        <!--            slot-scope="item"-->
        <!--            :is-animated="item.isAnimated"-->
        <!--            :class="{ animated: item.isAnimated }"-->
        <!--          >-->
        <!--            <NuxtLink-->
        <!--              class="service-button__link nuxtlink"-->
        <!--              to="/service/oblachnye-resheniya"-->
        <!--              >Облачные решения</NuxtLink-->
        <!--            >-->
        <!--          </li>-->
        <!--        </animate-on-viewport>-->
        <animate-on-viewport>
          <li
            class="service-button"
            slot-scope="item"
            :is-animated="item.isAnimated"
            :class="{ animated: item.isAnimated }"
          >
            <NuxtLink
              class="service-button__link nuxtlink"
              to="/service/kompleksnye-resheniya/reshenie-dlya-horeca"
            >
              HoReCa</NuxtLink
            >
          </li>
        </animate-on-viewport>
        <animate-on-viewport>
          <li
            class="service-button"
            slot-scope="item"
            :is-animated="item.isAnimated"
            :class="{ animated: item.isAnimated }"
          >
            <NuxtLink
              class="service-button__link nuxtlink"
              to="/service/kompleksnye-resheniya/reshenie-dlya-magazinov-i-tochek-prodazh"
              >Ритейл</NuxtLink
            >
          </li>
        </animate-on-viewport>
        <animate-on-viewport>
          <li
            class="service-button"
            slot-scope="item"
            :is-animated="item.isAnimated"
            :class="{ animated: item.isAnimated }"
          >
            <NuxtLink
              class="service-button__link nuxtlink"
              to="/service/kompleksnye-resheniya/resheniya-dlya-sfery-turizma"
              >Туризм</NuxtLink
            >
          </li>
        </animate-on-viewport>
      </ul>
    </div>
  </div>
</template>

<script>
import Icon from '~/components/Icons/Icon'
import WifiIcon from '~/components/Icons/WiFiIcon'
import InternetIcon from '~/components/Icons/InternetIcon'
import VirtualServiceIcon from '~/components/Icons/VirtualServiceIcon'
import TelephonyIcon from '~/components/Icons/TelephonyIcon'
import OutsourceIcon from '~/components/Icons/OutsourceIcon'
import CloudServiceIcon from '~/components/Icons/CloudServiceIcon'
import VideoIcon from '~/components/Icons/VideoIcon'
import ComplexSolutionIcon from '~/components/Icons/ComplexSolutionIcon'
import AdditionalServiceIcon from '~/components/Icons/AdditionalServiceIcon'
import AnimateOnViewport from '~/components/Common/AnimateOnViewport'
import FlameIcon from '~/components/Icons/FlameIcon'

export default {
  data() {
    return {}
  },
  components: {
    Icon,
    WifiIcon,
    InternetIcon,
    VirtualServiceIcon,
    TelephonyIcon,
    OutsourceIcon,
    CloudServiceIcon,
    VideoIcon,
    ComplexSolutionIcon,
    AdditionalServiceIcon,
    AnimateOnViewport,
    FlameIcon,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/colors';
.company-services {
  h4 {
    margin: 0;
  }
  counter-reset: service;
  @include _800() {
    order: -1;
  }
}

.service-button-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  //justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
  @include _765() {
    margin: 0 -1em 0 0;
  }
  .service-button {
    background-color: #fff;
    opacity: 0;
    width: fit-content;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin: 1em 1em 0 0;
    cursor: pointer;
    //box-shadow: 0 0.25em 0.5em 0 rgb(0 0 0 / 10%);
    transition: box-shadow 0.3s ease-out, background-color 0.3s ease-out,
      border 0.3s ease-out, color 0.3s ease-out;

    &:hover {
      color: #fff;
      border-color: rgba(216, 20, 40, 0.33);
      background-color: $red-color1;
      //box-shadow: 0 0.5em 1em 0.5em rgb(216 20 40 / 30%);
      .service-button__icon {
        fill: #ff9d00;
      }
    }
    @include _765() {
      margin: 0.5em 0.5em 0 0;
    }
    &__link {
      display: inline-flex;
      align-items: center;
      padding: 1em;
      color: $text-color;
      font-weight: 500;
      transition: color 0.2s ease-out;
      &:hover {
        color: #fff;
      }
    }
    &__icon {
      width: 1em;
      height: 1em;
      margin-right: 0.5em;
      fill: $red-color1;
      transition: fill 0.6s ease-out;
      @include _765() {
        margin-right: 0.25em;
      }
    }
  }
}
.animated {
  animation-name: animateIn;
  animation-delay: inherit;
  animation-duration: 1000ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
}
$n: 11;

@for $i from 1 through $n {
  .animated-element:nth-child(#{$i}) {
    animation-delay: 100ms + ($i - 1) * 50ms;
  }
}

@keyframes animateIn {
  0% {
    opacity: 0;
    transform: translateX(-1em);
  }

  100% {
    opacity: 1;
  }
}
</style>
