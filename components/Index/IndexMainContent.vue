<template>
  <div class="main-content">
    <div class="company-info page-content-block">
      <div class="company-info-text">
        <h1 class="company-info-text__header">Oyster Telecom</h1>
        <div class="company-info-text__container">
          <div class="company-info-text__p">
            <p class="article">
              Работаем только с юридическими лицами, что позволяет
              придерживаться высоких стандартов качества услуг и сервисов.
            </p>
            <p class="article dn-600">
              Занимаемся сервисами Wi-Fi и видеоаналитики, виртуализацией,
              аутсорсингом офисной техники и серверов.
            </p>
            <p class="article dn-600">
              Готовы разработать для вас индивидуальное решение , в соответствии
              с особенностями вашего бизнеса и теми задачами, что перед ним
              стоят.
            </p>
          </div>
          <div class="company-info-numbers">
            <div class="info-number">
              <div class="info-number__number">
                <animate-on-viewport>
                  <running-number
                    slot-scope="item"
                    :number="21"
                    :is-animated="item.isAnimated"
                    :is-integer="true"
                  />
                </animate-on-viewport>
              </div>
              <div class="info-number__category">год на рынке</div>
            </div>
            <div class="info-number">
              <div class="info-number__number">
                <animate-on-viewport>
                  <running-number
                    slot-scope="item"
                    :number="34"
                    :is-animated="item.isAnimated"
                    :is-integer="true"
                  />
                </animate-on-viewport>
              </div>
              <div class="info-number__category">IT специалиста</div>
            </div>
            <div class="info-number">
              <div class="info-number__number">
                <animate-on-viewport>
                  <running-number
                    slot-scope="item"
                    :number="99.8"
                    :is-animated="item.isAnimated"
                    :is-integer="false"
                  />
                </animate-on-viewport>
              </div>
              <div class="info-number__category">отказоустойчивость сети</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <index-service-list class="page-content-block"></index-service-list>
  </div>
</template>

<script>
import AnimateOnViewport from '~/components/Common/AnimateOnViewport'
import RunningNumber from '~/components/Common/RunningNumber'

import IndexServiceList from '~/components/Index/IndexServiceList'

export default {
  components: {
    AnimateOnViewport,
    RunningNumber,

    IndexServiceList,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';

.main-content {
  width: 100%;

  display: flex;
  flex-direction: column;
  @include _950() {
  }
  @include _600() {
    margin-top: -3em;
  }
}
.company-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @include _800() {
    flex-direction: column;
  }
  .company-info-text {
    flex-basis: 100%;
    &__container {
      display: flex;
      flex-direction: row;
      @include _800() {
        margin-right: 0;
        flex-direction: column;
      }
    }
    &__header {
      margin: 0 0 0.5em;
    }
    &__p {
      max-width: 50em;
      margin-right: 3em;
      height: fit-content;
    }
  }
  .company-info-numbers {
    float: right;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-self: baseline;

    .info-number {
      &:nth-child(1) {
        min-width: 4em;
      }
      &:nth-child(2) {
        min-width: 10em;
      }
      &:nth-child(3) {
        min-width: 12em;
      }
      &__number {
        margin-bottom: 0.5em;
      }
      margin: 0 2em 2em 0;
      &:nth-last-child(-n + 1) {
        margin-right: 0;
        margin-bottom: 0;
      }
      @include _800() {
        margin: 2em 2em 0 0;
      }
    }
  }
}

.service-button-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
  .service-button {
    width: fit-content;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 0 1em 1em 0;
    cursor: pointer;
    box-shadow: 0 0.25em 0.5em 0 rgb(0 0 0 / 10%);
    transition: box-shadow 0.3s ease-out, background-color 0.3s ease-out,
      border 0.3s ease-out, color 0.3s ease-out;
    &:hover {
      color: #fff;
      border-color: rgba(216, 20, 40, 0.33);
      background-color: #d81428;
      box-shadow: 0 0.5em 1em 0.5em rgb(216 20 40 / 30%);
      .service-button__icon {
        fill: #fff;
      }
    }
    @include _765() {
      margin: 0 0.5em 0.5em 0;
    }
    &__link {
      display: inline-flex;
      align-items: center;
      padding: 1em 1.4em;
      letter-spacing: -1px;
      font-size: 1.25em;
      font-weight: 500;
    }
    &__icon {
      width: 1.45em;
      height: 1.45em;
      margin-right: 0.5em;
      fill: #ccc;
      transition: fill 0.6s ease-out;
      @include _765() {
        display: none;
      }
    }
  }
}
</style>
