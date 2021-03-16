<template>
  <div class="wrapper">
    <div class="main-content">
      <div class="company-info">
        <div class="company-info-text">
          <div class="company-info-text__container">
            <h1 class="company-info-text__header">Oyster Telecom</h1>
            <div class="company-info-text__p">
              <p class="article">
                Oyster Telecom — компания ИТ решений для бизнеса, основанных на
                услугах связи. Мы работаем только с юридическими лицами, что
                позволяет придерживаться высоких стандартов качества услуг и
                сервисов.
              </p>
              <p class="article dn-600">
                В дополнение к основным услугам связи мы занимаемся сервисами
                Wi-Fi и видеоаналитики, виртуализацией, аутсорсингом офисной
                техники и серверов.
              </p>
              <p class="article dn-600">
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
      <div class="company-services">
        <h4>Услуги связи и ИТ сервисы в Санкт‑Петербурге</h4>
        <div class="service-buttons">
          <ul class="service-button-list">
            <li class="service-button">
              <a class="service-button__link">
                <icon :icon-name="'wifi-icon'" class="service-button__icon">
                  <wifi-icon />
                </icon>
                Wi-Fi для бизнеса
              </a>
            </li>
            <li class="service-button">
              <a class="service-button__link">
                <icon :icon-name="'internet-icon'" class="service-button__icon">
                  <internet-icon />
                </icon>
                Интернет до 10Гбит/с
              </a>
            </li>
            <li class="service-button">
              <a class="service-button__link">
                <icon
                  :icon-name="'virtual-service-icon'"
                  class="service-button__icon"
                >
                  <virtual-service-icon />
                </icon>
                Виртуальные сервисы
              </a>
            </li>
            <li class="service-button">
              <a class="service-button__link">
                <icon
                  :icon-name="'telephony-icon'"
                  class="service-button__icon"
                >
                  <telephony-icon />
                </icon>
                Телефония
              </a>
            </li>
            <li class="service-button">
              <a class="service-button__link">
                <icon
                  :icon-name="'outsource-icon'"
                  :view-box="'0 0 128 128'"
                  class="service-button__icon"
                >
                  <outsource-icon />
                </icon>
                IT Аутсорсинг
              </a>
            </li>
            <li class="service-button">
              <a class="service-button__link">
                <icon
                  :icon-name="'cloud-service-icon'"
                  class="service-button__icon"
                >
                  <cloud-service-icon />
                </icon>
                Облачные решения
              </a>
            </li>
            <li class="service-button">
              <a class="service-button__link">
                <icon :icon-name="'video-icon'" class="service-button__icon">
                  <video-icon />
                </icon>
                Видеонаблюдение
              </a>
            </li>
            <li class="service-button">
              <a class="service-button__link">
                <icon
                  :icon-name="'complex-solution-icon'"
                  class="service-button__icon"
                >
                  <complex-solution-icon />
                </icon>
                Комплексные решения
              </a>
            </li>
            <li class="service-button">
              <a class="service-button__link">
                <icon
                  :icon-name="'additional-service-icon'"
                  class="service-button__icon"
                >
                  <additional-service-icon />
                </icon>
                Операторам
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimateOnViewport from '~/components/Common/AnimateOnViewport'
import RunningNumber from '~/components/Common/RunningNumber'
import Icon from '~/components/Icons/Icon'
import WifiIcon from '~/components/Icons/WiFiIcon'
import InternetIcon from '~/components/Icons/InternetIcon'
import VirtualServiceIcon from '~/components/Icons/VirtualServiceIcon'
import TelephonyIcon from '~/components/Icons/TelephonyIcon'
import OutsourceIcon from '~/components/Icons/OutsourceIcon'
import CloudServiceIcon from '~/components/Icons/CloudServiceIcon'
import VideoIcon from '~/components/Icons/VideoIcon'
import ComplexSolutionIcon from '~/components/Icons/ComplexSolutionIcon'
import AdditionalServiceIcon from '~/components/Icons/AdditionalServiceIcon'

export default {
  name: 'IndexCardBlock',
  components: {
    AnimateOnViewport,
    RunningNumber,
    Icon,
    WifiIcon,
    InternetIcon,
    VirtualServiceIcon,
    TelephonyIcon,
    OutsourceIcon,
    CloudServiceIcon,
    VideoIcon,
    ComplexSolutionIcon,
    AdditionalServiceIcon,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.main-content {
  width: 100%;
  padding: 6em 0 4em;
  display: flex;
  flex-direction: column;
  @include _950() {
    padding: 5em 0 0;
  }
  @include _640() {
    padding: 2em 0 0;
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
      max-width: 800px;
      margin-right: 3em;
      height: fit-content;
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
    @include _600() {
      margin-top: 1em;
    }
    .info-number {
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
