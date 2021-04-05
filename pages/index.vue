<template>
  <div class="container">
    <hero-block :is-anchor="false">
      <template v-slot:header>
        Комплексные услуги связи и&nbsp;IT&nbsp;сервисы
      </template>
      <template v-slot:description>
        <div class="description dn-600">
          Телекоммуникационные услуги и сервисы для компаний с высоким трафиком,
          включая доступ в интернет, прокладку и обслуживание оптоволоконной
          инфраструктуры, организацию корпоративных wi-fi пространств,
          телефонию, IP видеонаблюдение и нейросетевую аналитику, виртуализацию
          и перенос бизнеса в облако.
        </div>
      </template>
      <template v-slot:form-prefix>
        Проверьте возможность подключения:
      </template>
    </hero-block>

    <div class="page-content">
      <div class="wrapper">
        <index-main-content class="page-content-block" />

        <h4 v-if="isMapShown" class="yandex-map">
          Зона присутствия сетей связи «Oyster Telecom»
        </h4>
        <div ref="maptop"/>
      </div>
      <yandex-map-block v-if="isMapShown" class="yandex-map"></yandex-map-block>

      <div ref="mapbottom" class="wrapper">
        <order-block />
      </div>
    </div>
  </div>
</template>

<script>
import IndexMainContent from '~/components/Index/IndexMainContent'
import HeroBlock from '~/components/Common/HeroBlock'
import OrderBlock from '~/components/DefaultLayout/OrderBlock'
import QuestionBlock from '~/components/Common/QuestionBlock'
import YandexMapBlock from '~/components/Index/YandexMapBlock'
import AnimateOnViewport from '~/components/Common/AnimateOnViewport'

export default {
  data() {
    return {
      isMapShown: false,
      windowWidth: false,
    }
  },
  methods: {
    showInMap: function () {
      if (
        (this.$refs.maptop.offsetTop <= window.scrollY + window.innerHeight) &&
        !this.isMapShown
      ) {
        this.isMapShown = true
      }

      // if (!this.isMapShown && this.$refs.map) {
      //   if (
      //     window.scrollY + window.innerHeight >
      //       this.$refs.map.offsetTop &&
      //     this.$refs.map.offsetTop +
      //       this.$refs.map.offsetHeight >
      //       window.scrollY
      //   ) {

      //     this.isMapShown = true
      //   }
      // }
    },
    updateSize() {
      if (window.innerWidth > 900) {
        this.windowWidth = true
      }
    },
  },
  components: {
    IndexMainContent,
    HeroBlock,
    OrderBlock,
    QuestionBlock,
    YandexMapBlock,
    AnimateOnViewport,
  },
  mounted() {
    this.windowWidth = window.innerWidth > 900
    window.addEventListener('resize', this.updateSize)
    window.addEventListener('scroll', this.showMap)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateSize)
    window.removeEventListener('scroll', this.showMap)
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.hero-block {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('~/static/images/backgrounds/index-bg.jpg');
}
.order-block {
  flex-grow: 1;
}
.container {
  display: flex;
  flex-direction: column;
}

</style>
