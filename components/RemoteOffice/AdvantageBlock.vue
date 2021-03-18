<template>
  <div class="advantage-list">
    <div class="advantage">
      <div class="advantage__header">Удобство</div>
      <div class="advantage__text">
        Быстрое подключение к привычным системам и программам.<br />
        Корпоративная телефония не выходя из дома.
      </div>
    </div>
    <div class="advantage">
      <div class="advantage__header">Надежность</div>
      <div class="advantage__text">
        Доступ к локальной сети компании получают только ваши сотрудники.<br />
        Все каналы защищены от взлома и повреждений.
      </div>
    </div>
    <div class="advantage">
      <div class="advantage__header">Сервис</div>
      <div class="advantage__text">
        Дистанционное обслуживание всей ИТ инфраструктуры.<br />
        Личный менеджер и техническая поддержка 24/7..
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvantageBlock',
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.advantage-list {
  display: flex;
  flex-direction: row;
  margin-top: 6em;
  margin-bottom: -2em;
  @include _900() {
    flex-direction: column;
  }
  @include _650() {
    margin-top: 2em;
  }
}
.advantage {
  padding-top: 1em;
  border-top: 1px solid #ff7d05;
  margin-right: 3%;
  margin-bottom: 2em;
  &__header {
    font-weight: 700;
    font-size: 2em;
    line-height: normal;
    margin-bottom: 0.3em;
    color: #ff7d05;
  }
  &__text {
    font-size: 0.9em;
    line-height: 1.4em;
  }
  &:nth-last-child(-n + 1) {
    margin-right: 0;
    @include _900() {
      margin-bottom: 0;
    }
  }
  @include _900() {
    border-top: none;
  }
}
</style>
