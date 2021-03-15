<template>
  <div class="wrapper">
    <div class="main-content">
      <div class="company-info">
        <div class="company-info-text">
          <div class="company-info-text__container">
            <h1 class="company-info-text__header">Oyster Telecom</h1>
            <div class="company-info-text__p">
              <p class="info-article">
                Oyster Telecom — компания ИТ решений для бизнеса, основанных на
                услугах связи. Мы работаем только с юридическими лицами, что
                позволяет придерживаться высоких стандартов качества услуг и
                сервисов.
              </p>
              <p class="info-article dh-600">
                В дополнение к основным услугам связи мы занимаемся сервисами
                Wi-Fi и видеоаналитики, виртуализацией, аутсорсингом офисной
                техники и серверов.
              </p>
              <p class="info-article dh-600">
                Мы готовы разработать для вас индивидуальное решение , в
                соответствии с особенностями вашего бизнеса и теми задачами, что
                перед ним стоят.
              </p>
            </div>
          </div>
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
</template>

<script>
import AnimateOnViewport from '~/components/Common/AnimateOnViewport'
import RunningNumber from '~/components/Common/RunningNumber'
export default {
  name: 'IndexCardBlock',
  components: {
    AnimateOnViewport,
    RunningNumber,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.main-content {
  width: 100%;
  padding: 6em 0 4em;
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
      max-width: 800px;
      margin-right: 3em;
      @include _800() {
        margin-right: 0;
      }
    }
    &__header {
      margin: 0 0 0.5em;
    }
    &__p {
      color: #999;
      @include _700() {
        font-size: 0.9em;
      }
      .info-article {
        margin-bottom: 1em;
      }
      .info-article:nth-last-child(-n + 1) {
        margin-bottom: 0;
      }
    }
  }
  .company-info-numbers {
    float: right;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-self: baseline;
    margin-top: 3em;
    @include _800() {
      margin-top: 2em;
    }
    .info-number {
      margin: 0 2em 2em 0;
    }
  }
}
</style>
