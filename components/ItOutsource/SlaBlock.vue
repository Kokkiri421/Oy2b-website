<template>
  <div class="sla-block">
    <div class="sla-block__item">
      <h4 class="header">99,9% SLA</h4>
      <p class="content">Высокая доступность и финансовая ответственность</p>
    </div>
    <div class="sla-block__item">
      <h4 class="header">Нужные услуги</h4>
      <p class="content">
        Никаких лишних услуг, только то что необходимо для решения задач
      </p>
    </div>
    <div class="sla-block__item">
      <h4 class="header">До 2 часов</h4>
      <p class="content">
        Решение самой серьёзной проблемы, если у заявки соответствующая
        категория
      </p>
    </div>
    <div class="sla-block__item">
      <h4 class="header">Срочность</h4>
      <p class="content">
        Начнём работать сразу после обращения в случае чрезвычайной ситуации
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlaBlock',
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/colors';
.sla-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &__item {
    border-radius: 6px;
    padding: 2em 1em;
    margin-right: 2em;
    &:nth-child(even) {
      background-color: $form-bg-color;
    }
    &:nth-child(odd) {
      background-color: $light-blue-color;
    }
    &:nth-last-child(-n + 1) {
      margin-right: 0;
    }
  }
}
</style>
