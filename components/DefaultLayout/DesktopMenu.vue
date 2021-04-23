<template>
  <div class="desktop-menu">
    <div class="menu-item" @mouseover="hoverItem(1)" @mouseleave="mouseLeave">
      <span
        >Услуги
        <icon
          :icon-name="'expand-icon'"
          class="expand-icon"
          :class="{ rotate: hoveredItem === 1 }"
          :view-box="'0 0 24 24'"
        >
          <menu-arrow-icon /> </icon
      ></span>

      <desktop-menu-dropdown
        @mouseover="hoverItem(1)"
        @mouseleave="mouseLeave"
        :class="{ dropdownShown: hoveredItem === 1 }"
      >
        <template v-slot:menu
          ><ul class="desktop-menu__list" @click="onClick">
            <li class="list-item">
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
                <span class="underline-animated-link">IT аутсорсинг</span>
                <icon
                  :icon-name="'flame-icon'"
                  class="icon"
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
                to="/service/ip-adresa"
                >IP Адреса</NuxtLink
              >
            </li>
          </ul></template
        >
      </desktop-menu-dropdown>
    </div>
    <div
      class="menu-item"
      @mouseover="hoverItem(2)"
      @mouseleave="() => (hoveredItem = 0)"
    >
      <span
        >Отрасли
        <icon
          :icon-name="'expand-icon'"
          class="expand-icon"
          :class="{ rotate: hoveredItem === 2 }"
          :view-box="'0 0 24 24'"
        >
          <menu-arrow-icon /> </icon
      ></span>

      <desktop-menu-dropdown
        @mouseover="hoverItem(2)"
        @mouseleave="mouseLeave"
        :class="{ dropdownShown: hoveredItem === 2 }"
      >
        <template v-slot:menu
          ><ul class="desktop-menu__list">
            <li class="list-item" @click="onClick">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/kompleksnye-resheniya/reshenie-dlya-horeca"
              >
                HoReCa</NuxtLink
              >
            </li>
            <li class="list-item" @click="onClick">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/kompleksnye-resheniya/reshenie-dlya-magazinov-i-tochek-prodazh"
                >Ритейл</NuxtLink
              >
            </li>
            <li class="list-item" @click="onClick">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/kompleksnye-resheniya/resheniya-dlya-sfery-turizma"
                >Туризм</NuxtLink
              >
            </li>
            <li class="list-item" @click="onClick">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/service/dop-uslugi"
                >Операторы связи</NuxtLink
              >
            </li>
          </ul></template
        ></desktop-menu-dropdown
      >
    </div>
    <div class="menu-item" @mouseover="hoverItem(3)" @mouseleave="mouseLeave">
      <span
        >Компания
        <icon
          :icon-name="'expand-icon'"
          class="expand-icon"
          :class="{ rotate: hoveredItem === 3 }"
          :view-box="'0 0 24 24'"
        >
          <menu-arrow-icon /> </icon
      ></span>
      <desktop-menu-dropdown
        @mouseover="() => (hoveredItem = 3)"
        @mouseleave="mouseLeave"
        :class="{ dropdownShown: hoveredItem === 3 }"
      >
        <template v-slot:menu
          ><ul class="desktop-menu__list">
            <li class="list-item" @click="onClick">
              <NuxtLink class="underline-animated-link nuxtlink" to="/company">
                О компании
              </NuxtLink>
            </li>
            <li class="list-item" @click="onClick">
              <NuxtLink
                class="underline-animated-link nuxtlink"
                to="/sotrudniki"
              >
                Сотрудники
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
          </ul></template
        ></desktop-menu-dropdown
      >
    </div>
  </div>
</template>

<script>
import DesktopMenuDropdown from '~/components/DefaultLayout/DesktopMenuDropdown'
import Icon from '~/components/Icons/Icon'
import FlameIcon from '~/components/Icons/FlameIcon'
import ExpandTableIcon from '~/components/Icons/ExpandTableIcon'
import MenuArrowIcon from '~/components/Icons/MenuArrowIcon'

export default {
  data() {
    return {
      hoveredItem: 0,
      itemSelected: false,
    }
  },
  components: {
    DesktopMenuDropdown,
    Icon,
    FlameIcon,
    ExpandTableIcon,
    MenuArrowIcon,
  },
  methods: {
    hoverItem: function (i) {
      this.hoveredItem = i
      this.itemSelected = true
    },
    mouseLeave: function () {
      if (this.itemSelected) {
        this.hoveredItem = 0
      }
    },
    onClick: function () {
      this.hoveredItem = 0
      this.itemSelected = false
    },
  },
  watch: {},
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/colors';
.desktop-menu {
  display: flex;
  flex-direction: row;
  .menu-item {
    //color: #fff;
    margin-right: 1em;
    font-size: 0.9em;
    font-weight: 500;
    cursor: pointer;
    height: 100%;
    .expand-icon {
      //margin-left: 0.35em;
      //margin-bottom: 0.2em;
      height: 20px;
      width: 20px;

      transition: transform 0.3s;
      vertical-align: middle;
      fill: none;
      //stroke: #fff;
      stroke-width: 2px;
      stroke-linejoin: round;
      stroke-linecap: round;
    }
    .rotate {
      transform: rotate(180deg);
    }
  }
  &__list {
    font-weight: 500;

    color: #000;
    list-style-type: none;
    padding: 0;
    .list-item {
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
