<template>
  <div>
    <h4>
      Решаем самые сложные и&nbsp;нестандартные задачи,
      которые&nbsp;у&nbsp;вас&nbsp;возникают.
    </h4>
    <advantage-list class="page-content-block">
      <template v-slot:advantage-list>
        <advantage-block>
          <template v-slot:header>Cоздают</template>
          <template v-slot:description
            >Корпоративные решения, которые<br />обеспечивают проектам развитие,
            функциональность и&nbsp;производительность</template
          >
        </advantage-block>
        <advantage-block>
          <template v-slot:header>Реализовывают</template>
          <template v-slot:description
            >Удобную и надёжную инфраструктуру любой сложности
            с&nbsp;круглосуточной поддержкой.</template
          >
        </advantage-block>
        <advantage-block>
          <template v-slot:header>Обеспечивают</template>
          <template v-slot:description
            >непрерывность предоставляемых услуг и&nbsp;сервисов</template
          >
        </advantage-block>
      </template>
    </advantage-list>
  </div>
</template>

<script>
import AdvantageList from '~/components/Common/AdvantageList'
import AdvantageBlock from '~/components/Common/AdvantageBlock'

export default {
  name: 'SpecialitsContent',
  components: { AdvantageList, AdvantageBlock },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/colors';
.specialits-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .thin-header {
    font-weight: 500;
    width: fit-content;
    line-height: 1em;
    margin-bottom: 0.25em;
  }
  &__header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-basis: 27%;
    margin-right: 2em;
    height: 168px;
    @include _1250() {
      flex-basis: calc(50% - 1em);
    }
    @include _765() {
      flex-basis: 100%;
      margin-right: 0;
      margin-bottom: 1em;
      height: calc(200px - 6em);
    }
    .green-marks {
      font-size: 2em;
      color: #2cbf52;
      margin-bottom: 0.5em;
      font-weight: 700;
    }
  }
  &__text {
    font-size: 1.2em;
    @include _765() {
      font-size: 1em;
    }
  }
  &__item {
    flex-basis: 30%;
    border-radius: 6px;
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 20%);
    margin-right: 2em;
    height: calc(200px - 4em);
    padding: 1em 1em;
    margin-bottom: 2em;
    @include _1250() {
      flex-basis: calc(50% - 3em);
    }
    @include _765() {
      flex-basis: 100%;
      margin-right: 0;
      margin-bottom: 1em;
      height: calc(200px - 6em);
    }
    &:nth-child(even) {
      @include _1250() {
        margin-right: 0;
      }
    }
    &:nth-last-child(-n + 1) {
      margin-right: 0;
    }
  }
}
</style>
