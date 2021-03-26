<template>
  <div class="ratio-form wrapper">
    <h4 class="header">Выберите удобный тариф:</h4>
    <div class="ratios">
      <div class="ratios__types" ref="ratio-types">
        <ratio
          class="ratio"
          :price="basicPrice"
          :header="'Стартовый'"
          :background-color="'#97e7fc'"
          id="slide-1"
        >
          <template v-slot:content>
            <ul class="content">
              <li>Удаленная поддержка</li>
              <li>Обслуживание ПК и серверов</li>
              <li>Поддержка ПО</li>
              <li>Управление каталогами</li>
            </ul>
          </template>
        </ratio>
        <ratio
          class="ratio"
          :price="standardPrice"
          :header="'Cтандартный'"
          :background-color="'#4ae1ff'"
          id="slide-2"
        >
          <template v-slot:content>
            <ul class="content">
              <li>Удаленная поддержка</li>
              <li>Обслуживание ПК и серверов</li>
              <li>Поддержка ПО</li>
              <li>Управление каталогами</li>
              <li>Обслуживание почты</li>
              <li>Антивирусная защита</li>
            </ul>
          </template>
        </ratio>
        <ratio
          class="ratio"
          :price="expertPrice"
          :header="'Экспертный'"
          :background-color="'#00bee3'"
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
        background: #97e7fc;
        margin-top: 1em;
        &:nth-child(n + 1) {
          margin-right: 0.5em;
        }
        &:nth-last-child(-n + 1) {
          margin-right: 0;
        }
      }
      .active {
        background: #00bee3;
      }
    }
  }
}
</style>
