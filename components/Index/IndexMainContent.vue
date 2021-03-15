<template>
  <div class="wrapper">
    <div class="main-content">
      <div class="company-info">
        <div class="company-info-text">
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
        <div class="company-info-numbers">
          <div class="info-number">
            <animate-on-viewport>
              <running-number
                slot-scope="item"
                :number="21"
                :is-animated="item.isAnimated"
                :is-integer="true"
              />
            </animate-on-viewport>
          </div>
          <div class="info-number">
            <animate-on-viewport>
              <running-number
                slot-scope="item"
                :number="1400"
                :is-animated="item.isAnimated"
                :is-integer="true"
              />
            </animate-on-viewport>
          </div>
          <div class="info-number">
            <animate-on-viewport>
              <running-number
                slot-scope="item"
                :number="99.8"
                :is-animated="item.isAnimated"
                :is-integer="false"
              />
            </animate-on-viewport>
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

<style scoped></style>
