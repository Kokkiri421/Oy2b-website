<template>
  <div>
    <div class="call-us-block">
      <div class="call-us-block__content">
        <h4>Позвоните нам или&nbsp;оставьте заявку на&nbsp;сайте:</h4>
        <button class="dialog-button" @click="showModal">
          Оставить заявку
        </button>
        <p class="article">
          Обсудим все детали вашего проекта, зададим важные вопросы, дадим
          свои&nbsp;рекомендации.<br />
          В случае необходимости быстро подпишем&nbsp;NDA (соглашение
          о&nbsp;неразглашении конфиденциальной&nbsp;информации).<br />
          При&nbsp;необходимости проведем бесплатное техническое обследование
          и&nbsp;предложим несколько вариантов решения бизнес-задачи.
        </p>
      </div>
    </div>
    <modal-window :show="isModalShown" @onClick="showModal"
      ><TicketModalForm @onClick="showModal"
    /></modal-window>
  </div>
</template>

<script>
import ModalWindow from '~/components/Common/ModalWindow'
import TicketModalForm from '~/components/Common/TicketModalForm.vue'
import Icon from '~/components/Icons/Icon'
import CheckIcon from '~/components/Icons/CheckIcon'
import RoubleIcon from '~/components/Icons/RoubleIcon'
import ExpandTableIcon from '~/components/Icons/ExpandTableIcon'
export default {
  data() {
    return {
      isModalShown: false,
    }
  },

  methods: {
    showModal() {
      this.isModalShown = !this.isModalShown
    },
  },

  components: {
    ModalWindow,
    TicketModalForm,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/colors';
.call-us-block {
  position: relative;
  background-color: $light-blue-color;
  padding: 1em 1.5em;
  border-radius: 6px;
  &:before {
    content: '';
    position: absolute;
    height: 100%;
    background-color: $light-blue-color;
    width: 1000%;
    top: 0;
    z-index: -1;
    left: -925%;
  }
  &__content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    h4 {
      margin-bottom: 0;
      max-width: calc(100% - 220px);
      @include _650() {
        max-width: 100%;
      }
    }
    .dialog-button {
      @include _650() {
        order: 3;
        width: 100%;
      }
    }
    .article {
      margin: 1em 0 0;
      flex-basis: 100%;
      font-size: 1.2em;
      @include _900() {
        font-size: 1em;
        margin: 1em 0 1em;
      }
    }
  }
}
</style>
