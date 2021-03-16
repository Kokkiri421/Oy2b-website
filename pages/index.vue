<template>
  <div class="container">
    <hero-block>
      <template v-slot:header>
        Комплексные услуги связи <br class="dn-600" />и IT сервисы
      </template>
      <template v-slot:description>
        <div class="description">
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
    <index-main-content> </index-main-content>
  </div>
</template>

<script>
import IndexHeroBlock from '~/components/Index/IndexHeroBlock'
import IndexMainContent from '~/components/Index/IndexMainContent'
import HeroBlock from '~/components/Common/HeroBlock'
export default {
  components: {
    IndexHeroBlock,
    IndexMainContent,
    HeroBlock,
  },
}
</script>

<style lang="scss" scoped>
.hero-block {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('~/static/images/backgrounds/index-bg.jpg');
  .description {
    margin-bottom: 2.5em;
  }
}
.container {
  display: flex;
  flex-direction: column;
}
</style>
