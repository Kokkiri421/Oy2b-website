<template>
  <div class="call-us-block">
    <h4>Позвоните нам или&nbsp;оставьте заявку на&nbsp;сайте:</h4>
    <p class="article">
      Обсудим все детали вашего проекта, зададим важные вопросы, дадим свои
      рекомендации. В случае необходимости быстро подпишем&nbsp;NDA (соглашение
      о&nbsp;неразглашении конфиденциальной информации). При&nbsp;необходимости
      проведем бесплатное техническое обследование и&nbsp;предложим несколько
      вариантов решения бизнес-задачи.
    </p>
  </div>
</template>

<script>
export default {
  name: 'CallUsBlock',
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/colors';
.call-us-block {
  position: relative;
  background-color: #81dacb;
  padding: 1em 4em 1em 0;
  border-radius: 6px;
  &:before {
    content: '';
    position: absolute;
    height: 100%;
    background-color: #81dacb;
    width: 30%;
    top: 0;
    z-index: -1;
    left: -20%;
  }
  .article {
    font-size: 1.2em;
  }
}
</style>
