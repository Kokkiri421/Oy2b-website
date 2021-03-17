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
  </div>
</template>

<script>
import HeroBlock from '~/components/Common/HeroBlock'
export default {
  components: {
    HeroBlock,
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
</style>
