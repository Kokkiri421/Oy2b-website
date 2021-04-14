<template>
  <div class="ratio-form wrapper">
    <h5 class="header">Выберите удобный тариф:</h5>
    <div class="ratios">
      <div class="ratios__types" ref="ratio-types">
        <ratio
          class="ratio"
          :price="basicPrice"
          :header="'Стартовый'"
          id="slide-1"
        >
          <template v-slot:content>
            <ul class="content">
              <li>SLA (Service Level Agreement)</li>
              <li>Система учета заявок</li>
              <li>Поддержка ПО</li>
              <li>Подменная техника</li>
              <li>Удаленная поддержка инфраструктуры</li>
              <li>Обслуживание ПК</li>
              <li>Обслуживание сетевого оборудования</li>
              <li>Настройка оргтехники</li>
              <li>Поддержка базового ПО</li>
              <li>Антивирусная защита</li>
              <li>
                Организация и управление удаленным доступом к рабочей сети
              </li>
              <li v-if="isServer">Обслуживание серверов</li>
              <li v-if="isServer">Поддержка дополнительного ПО</li>
              <li v-if="isServer">
                Резервное копирование и восстановление данных
              </li>
              <li v-if="isServer">Мониторинг ИТ-инфраструктуры (24/7)</li>
              <li v-if="isServer">Управление средой виртуализации</li>
              <li>Аудит ИТ-Инфраструктуры 1 раз в год</li>
              <li>Уровень сервиса — базовый</li>
              <li>Прием заявок — 24/7</li>
              <li>Время обслуживания - C 9:00 до 19:00 Пн-Пт</li>
            </ul>
          </template>
        </ratio>
        <ratio
          class="ratio"
          :price="standardPrice"
          :header="'Cтандартный'"
          id="slide-2"
        >
          <template v-slot:content>
            <ul class="content">
              <li>SLA (Service Level Agreement)</li>
              <li>Система учета заявок</li>
              <li>Поддержка ПО</li>
              <li>Подменная техника</li>
              <li>Удаленная поддержка инфраструктуры</li>
              <li>Обслуживание ПК</li>
              <li>Обслуживание сетевого оборудования</li>
              <li>Настройка оргтехники</li>
              <li>Поддержка базового ПО</li>
              <li>Антивирусная защита</li>
              <li>
                Организация и управление удаленным доступом к рабочей сети
              </li>
              <li v-if="isServer">Обслуживание серверов</li>
              <li v-if="isServer">Поддержка дополнительного ПО</li>
              <li v-if="isServer">
                Резервное копирование и восстановление данных
              </li>
              <li v-if="isServer">Мониторинг ИТ-инфраструктуры (24/7)</li>
              <li v-if="isServer">Управление средой виртуализации</li>
              <li>Обслуживание 1С</li>
              <li>Сопровождение приобретения и модернизации ИТ-оборудования</li>
              <li>Сопровождение сторонних поставщиков услуг</li>
              <li>Учет лицензий ПО</li>
              <li>Ответственный технический специалист</li>
              <li>Объединение офисов в единую рабочую сеть</li>
              <li>Изменение ИТ-инфраструктуры</li>
              <li>Аудит ИТ-Инфраструктуры 2 раза в год</li>
              <li>Плановые выезды 1раз в месяц</li>
              <li>Срочные выезды({{ isServer ? 8 : 4 }}шт)</li>
              <li>
                Отчет о состоянии ИТ-Инфраструктуры (по запросу) 3 раза в год
              </li>
              <li>Уровень сервиса — расширенный</li>
              <li>Прием заявок — 24/7</li>
              <li>Время обслуживания - C 9:00 до 19:00 Пн-Пт</li>
            </ul>
          </template>
        </ratio>
        <ratio
          class="ratio"
          :price="expertPrice"
          :header="'Экспертный'"
          id="slide-3"
        >
          <template v-slot:content>
            <ul class="content">
              <li>Удаленная поддержка</li>
              <li>Обслуживание ПК и серверов</li>
              <li>Поддержка и учет лицензий ПО</li>
              <li>Управление каталогами</li>
              <li>Обслуживание почты и 1С</li>
              <li>Антивирусная защита</li>
              <li>Сопровождение поставщиков</li>
              <li>Чистка техники 1 раз в год</li>
            </ul>
          </template>
        </ratio>
      </div>
      <div class="ratios__carousel-dots">
        <a
          class="carousel-dot"
          :class="{ active: currentRatio === 1 }"
          @click="scrollCarousel(1)"
        ></a>
        <a
          class="carousel-dot"
          :class="{ active: currentRatio === 2 }"
          @click="scrollCarousel(2)"
        ></a>
        <a
          class="carousel-dot"
          :class="{ active: currentRatio === 3 }"
          @click="scrollCarousel(3)"
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import Ratio from '~/components/ItOutsource/Ratio'

export default {
  data() {
    return {
      currentRatio: 2,
    }
  },
  props: {
    basicPrice: {
      type: Number,
      required: true,
    },
    standardPrice: {
      type: Number,
      required: true,
    },
    expertPrice: {
      type: Number,
      required: true,
    },
    isServer: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    Ratio,
  },
  methods: {
    scrollCarousel: function (ratio) {
      this.$refs['ratio-types'].scroll({
        top: 0,
        left: (this.$refs['ratio-types'].scrollWidth / 3) * (ratio - 1),
        behavior: 'smooth',
      })
    },
    checkScroll: function () {
      if (this.$refs['ratio-types'].scrollLeft) {
        this.currentRatio =
          Math.round(
            this.$refs['ratio-types'].scrollLeft /
              (this.$refs['ratio-types'].offsetWidth / 2)
          ) + 1
      }
    },
  },
  computed: {},
  mounted() {
    this.$refs['ratio-types'].scroll({
      top: 0,
      left: this.$refs['ratio-types'].scrollWidth / 3,
      behavior: 'instant',
    })
    this.$refs['ratio-types'].addEventListener('scroll', this.checkScroll)
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/colors';
.wrapper {
  @include _600() {
    padding: 0;
  }
}
.ratio-form {
  .header {
    text-align: center;
  }
  .ratios {
    &__types {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      @include _600 {
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
          display: none;
        }
      }
      .ratio {
        flex-grow: 1;
        &:nth-child(n + 1) {
          margin-right: 2em;
          @include _900() {
            margin-right: 1em;
          }
        }
        &:nth-child(1) {
          background-color: $base-color3;
        }
        &:nth-child(2) {
          background-color: $base-color2;
        }
        &:nth-child(3) {
          background-color: $base-color1;
        }
        &:nth-last-child(-n + 1) {
          margin-right: 0;
        }
        @include _600() {
          flex-grow: 0;
          scroll-snap-align: center;
          min-width: 55vw;
        }
      }
    }
    &__carousel-dots {
      display: none;
      @include _600() {
        display: flex;
        justify-content: center;
      }
      .carousel-dot {
        width: 10px;
        height: 10px;
        border-radius: 20px;
        background: $base-color3;
        margin-top: 1em;
        &:nth-child(n + 1) {
          margin-right: 0.5em;
        }
        &:nth-last-child(-n + 1) {
          margin-right: 0;
        }
      }
      .active {
        background: $base-color1;
      }
    }
  }
}
</style>
