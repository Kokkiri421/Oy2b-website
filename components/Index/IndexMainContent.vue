<template>
  <div class="main-content">
    <div class="company-info">
      <div class="company-info-text">
        <h1 class="company-info-text__header">Oyster Telecom</h1>
        <div class="company-info-text__container">
          <div class="company-info-text__p page-content-block">
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
                    :number="1400"
                    :is-animated="item.isAnimated"
                    :is-integer="true"
                  />
                </animate-on-viewport>
              </div>
              <div class="info-number__category">км. оптоволокна</div>
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
    <index-service-list></index-service-list>
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
  @include _640() {
    
  }
}
.company-info {
  line-height: 1.62em;
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
      max-width: 800px;
      margin-right: 3em;
      height: fit-content;
      color: #999;
      @include _700() {
        font-size: 0.9em;
      }
    }
  }
  .company-info-numbers {
    float: right;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-self: baseline;

    .info-number {
      &__number {
        margin-bottom: 0.5em;
      }
      margin: 0 2em 2em 0;
    }
  }
}
.company-services {
  margin-top: 4em;
  @include _800() {
    margin: 0 0 3em;
    order: -1;
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
