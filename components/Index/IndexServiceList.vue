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
              to="/service/oblachnye-resheniya"
              >Облачные решения</NuxtLink
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
              to="/service/kompleksnye-resheniya"
              >Отрасли</NuxtLink
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
              to="/service/dop-uslugi"
              >Операторам</NuxtLink
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
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.company-services {
  margin-top: 4em;
  counter-reset: service;
  @include _800() {
    margin: 0 0 3em;
    order: -1;
  }
}

.service-button-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
  .service-button {
    opacity: 0;
    width: fit-content;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 0 1em 1em 0;
    cursor: pointer;
    box-shadow: 0 0.25em 0.5em 0 rgb(0 0 0 / 10%);
    transition: box-shadow 0.3s ease-out, background-color 0.3s ease-out,
      border 0.3s ease-out, color 0.3s ease-out;
    &:hover {
      color: #fff;
      border-color: rgba(216, 20, 40, 0.33);
      background-color: #d81428;
      box-shadow: 0 0.5em 1em 0.5em rgb(216 20 40 / 30%);
      .service-button__icon {
        fill: #fff;
      }
    }
    @include _765() {
      margin: 0 0.5em 0.5em 0;
    }
    &__link {
      display: inline-flex;
      align-items: center;
      padding: 1em 1.4em;
      letter-spacing: -1px;
      font-size: 1.25em;
      font-weight: 500;
      color: #000000;
      transition: color 0.2s ease-out;
      &:hover {
        color: #fff;
      }
      @include _400() {
        font-size: 0.95em;
        padding: 0.66em 0.7em;
      }
    }
    &__icon {
      width: 1.45em;
      height: 1.45em;
      margin-right: 0.5em;
      fill: #ccc;
      transition: fill 0.6s ease-out;
      @include _765() {
        display: none;
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
$n: 9;

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
