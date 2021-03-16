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
      <service-list>
        <service-block>
          <template v-slot:header> Wi-Fi в офис </template>
          <template v-slot:description>
            <p class="article">
              Представьте себе офис без центрального отопления. Нирадиаторов,
              ниобогревателей, асотрудники сидят в тулупах и греют ладони
              дыханием. Смешно? Думаете такого небывает? Атеперь представьте
              офис без wi-fi Хороший офисный wi-fi не только удобный ипривычный
              атрибут нашего сосмартфонами симбиоза, ноиэффективный
              бизнес-инструмент Сеть должна много уметь ибыть легкоуправляемой.
              Мынаэтом «собаку съели».
            </p>
            <p class="article">
              Приедем, разработаем проект, всё проложим инастроим. Сделаем зону
              wi-fi раздельной для клиентов исотрудников сразграничением доступа
              ификсированной скоростью, независящей отзагруженности. Дадим
              реальные IP- адреса поколичеству сотрудников. Брендируем страницу
              авторизации для гостей. Акэтому иличный кабинет, вкотором высами
              все настроите.
            </p>
          </template>
        </service-block>
      </service-list>
    </div>
  </div>
</template>

<script>
import IndexHeroBlock from '~/components/Index/IndexHeroBlock'
import IndexMainContent from '~/components/Index/IndexMainContent'
import HeroBlock from '~/components/Common/HeroBlock'
import ServiceBlock from '~/components/Common/ServiceBlock'
import ServiceList from '~/components/Common/ServiceList'
export default {
  components: {
    IndexHeroBlock,
    IndexMainContent,
    HeroBlock,
    ServiceBlock,
    ServiceList,
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
</style>
