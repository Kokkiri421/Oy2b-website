<template>
  <div class="container">
    <hero-block>
      <template v-slot:header> Wi-Fi для бизнеса </template>
      <template v-slot:description>
        <div class="description">
          <p class="article">
            За 20 лет мы научились решать задачи любого масштаба — от
            подключения одной автономной точки до разворачивания бесшовной Wi-Fi
            зоны на несколько гектаров.
          </p>
          <p class="article">
            Успешно реализуем проекты благодаря всемирно признанному
            оборудованию:
          </p>
          <p class="article">Ruckus, Ubiquiti Network и Mikrotik.</p>
          <p class="article">
            Учитываем все пожелания клиента и реализуем цель так, что Вам не
            придется переплачивать. Обеспечиваем простое управление. Гарантируем
            скорость и надёжность.
          </p>
        </div>
      </template>
      <template v-slot:form-prefix>
        Проверьте возможность подключения:
      </template>
    </hero-block>
    <div class="wrapper">
      <div class="test">
        <service-block />
        <service-block />
        <service-block />
      </div>
    </div>
  </div>
</template>

<script>
import IndexHeroBlock from '~/components/Index/IndexHeroBlock'
import IndexMainContent from '~/components/Index/IndexMainContent'
import HeroBlock from '~/components/Common/HeroBlock'
import ServiceBlock from '~/components/Common/ServiceBlock'
export default {
  components: {
    IndexHeroBlock,
    IndexMainContent,
    HeroBlock,
    ServiceBlock,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.hero-block {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('~/static/images/backgrounds/wi-fi-bg.jpg');
  .description {
    margin-bottom: 1em;
  }
}
.container {
  display: flex;
  flex-direction: column;
}
.test {
  display: block;
  column-count: 2;
  @include _950() {
    column-count: 1;
  }
}
</style>
