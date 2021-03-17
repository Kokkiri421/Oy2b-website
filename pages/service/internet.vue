<template>
  <div class="container">
    <hero-block>
      <template v-slot:header>Интернет до&nbsp;10Гбит/с для бизнеса</template>
      <template v-slot:description>
        <div class="description">
          <p class="article">
            Подключение за 3 дня по оптоволокну от 5 Мбит/с до 10 Гбит/с.
          </p>
          <p class="article">Статистические и динамические IP-адреса.</p>
          <p class="article">Широкий выбор дополнительных услуг и сервисов.</p>
          <p class="article">
            Наши преимущества: гибкие тарифы, высокая надежность, техподдержка
            24/7
          </p>
          <p class="article">
            Конкретное решение зависит от ваших потребностей.
          </p>
        </div>
      </template>
      <template v-slot:form-prefix>
        Проверьте возможность подключения сервисов и услуг:
      </template>
    </hero-block>
    <div class="wrapper">
      <service-list ref="next-page">
        <service-block :background-color="'#ea172c'">
          <template v-slot:header> Доступ в интернет </template>
          <template v-slot:description>
            <p class="article">
              Каждый бизнес уникален. У всех свои цели и преимущества. Но для их
              достижения нужны инструменты и ресурсы. <br />
              Каналы связи уровня B2B - это надежный партнер вашего бизнеса.<br />
              Скорость подключения, качество сервиса, резервирование и саппорт у
              нас на высоте.
            </p>
          </template>
        </service-block>
        <service-block :background-color="'#ea172c'">
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
            </p>
          </template>
        </service-block>
        <service-block :background-color="'#ea172c'">
          <template v-slot:header> Wi-Fi в офис </template>
          <template v-slot:description>
            <p class="article">
              Представьте себе офис без центрального отопления. Нирадиаторов,
              ниобогревателей, асотрудники сидят в тулупах и греют ладони
              дыханием. Смешно? Думаете такого небывает? Атеперь представьте
              офис без wi-fi Хор
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
        <service-block :background-color="'#ea172c'">
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
      <question-block></question-block>
    </div>
  </div>
</template>

<script>
import HeroBlock from '~/components/Common/HeroBlock'
import ServiceBlock from '~/components/Common/ServiceBlock'
import ServiceList from '~/components/Common/ServiceList'
import QuestionBlock from '~/components/Common/QuestionBlock'
export default {
  components: {
    HeroBlock,
    ServiceBlock,
    ServiceList,
    QuestionBlock,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.hero-block {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('~/static/images/backgrounds/internet-bg.jpg');
  .description {
    margin-bottom: 2.5em;
  }
}
.container {
  display: flex;
  flex-direction: column;
}
.inverted-dialog-buttons {
  background-color: #fff;
  color: #ea172c;
}
</style>
