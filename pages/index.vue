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
        <specialits-content class="page-content-block" />
        <call-us-block class="page-content-block" />
        <analysis-form class="page-content-block" />
        <h4 class="yandex-map-header" @click="changeExpandMap">
          Зона присутствия сетей связи «Oyster Telecom»
          <icon
            :icon-name="'expand-icon'"
            class="expand-icon"
            :class="{ rotate: expandMap }"
            :view-box="'0 0 24 24'"
          >
            <menu-arrow-icon />
          </icon>
        </h4>
        <div ref="maptop" />
      </div>

      <yandex-map-block
        v-if="isMapShown && expandMap"
        class="yandex-map"
      ></yandex-map-block>

      <div ref="mapbottom" class="wrapper">
        <!--        <order-block />-->
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
import SpecialitsContent from '~/components/Index/SpecialitsContent'
import CallUsBlock from '~/components/Index/CallUsBlock'
import Icon from '~/components/Icons/Icon'
import MenuArrowIcon from '~/components/Icons/MenuArrowIcon'
import AnalysisForm from '~/components/Index/AnalysisForm'

export default {
  data() {
    return {
      isMapShown: false,
      windowWidth: false,
      expandMap: false,
    }
  },

  components: {
    IndexMainContent,
    HeroBlock,
    OrderBlock,
    QuestionBlock,
    YandexMapBlock,
    AnimateOnViewport,
    SpecialitsContent,
    CallUsBlock,
    Icon,
    MenuArrowIcon,
    AnalysisForm,
  },

  methods: {
    changeExpandMap() {
      this.expandMap = !this.expandMap
    },
    showMap: function () {
      if (
        this.$refs.maptop.offsetTop <= window.scrollY + window.innerHeight &&
        !this.isMapShown
      ) {
        this.isMapShown = true
      }
    },
    updateSize() {
      if (window.innerWidth > 900) {
        this.windowWidth = true
      }
    },
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
  //background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  //  url('~/static/images/backgrounds/index-bg.jpg');
}
.order-block {
  flex-grow: 1;
}
.container {
  display: flex;
  flex-direction: column;
}
.yandex-map-header {
  cursor: pointer;
  .expand-icon {
    margin-left: 0.25em;
    margin-bottom: 0.1em;
    height: 25px;
    width: 25px;

    transition: transform 0.3s;
    vertical-align: middle;
    fill: none;
    stroke: #444;
    stroke-width: 3px;
    stroke-linejoin: round;
    stroke-linecap: round;
  }

  .rotate {
    transform: rotate(180deg);
  }
}
</style>
