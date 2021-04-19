<template>
  <div>
    <h4>
      Решаем самые сложные и&nbsp;нестандартные задачи,
      которые&nbsp;у&nbsp;вас&nbsp;возникают.
    </h4>
    <div class="specialits-content">
      <div class="specialits-content__header">
        <h4 class="thin-header">Наши специалисты<br />уже более 20 лет:</h4>
        <span class="green-marks">> > > > > > > > > > > ></span>
      </div>
      <div class="specialits-content__item">
        <h4 class="thin-header">создают</h4>
        <span class="specialits-content__text">
          корпоративные решения, которые<br />обеспечивают проектам развитие,
          функциональность и&nbsp;производительность
        </span>
      </div>
      <div class="specialits-content__item">
        <h4 class="thin-header">реализовывают</h4>
        <span class="specialits-content__text">
          удобную и надёжную инфраструктуру любой сложности
          с&nbsp;круглосуточной поддержкой
        </span>
      </div>
      <div class="specialits-content__item">
        <h4 class="thin-header">обеспечивают</h4>
        <span class="specialits-content__text">
          непрерывность предоставляемых услуг и&nbsp;сервисов
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpecialitsContent',
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
