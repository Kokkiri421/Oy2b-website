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
      <index-main-content class="page-content-block"/>

      <h4>Зона присутствия сетей связи «Oyster Telecom»</h4>
    </div>
    <yandex-map-block></yandex-map-block>
    <div class="wrapper">
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
export default {
  data() {
    return {}
  },
  components: {
    IndexMainContent,
    HeroBlock,
    OrderBlock,
    QuestionBlock,
    YandexMapBlock,
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
