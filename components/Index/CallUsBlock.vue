<template>
  <div>
    <div class="call-us-block">
      <div class="call-us-block__content">
        <h4>Позвоните нам на номер +7(812)&nbsp;600&#8209;20&#8209;30</h4>
        <div class="image-container">
          <img class="image" src="~/static/images/block-images/call-us.png" />
        </div>
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
  background-color: $form-bg-color;
  padding: 1em;
  border-radius: 6px;
  //&:before {
  //  content: '';
  //  position: absolute;
  //  height: 100%;
  //  background-color: $form-bg-color;
  //  width: 1000%;
  //  top: 0;
  //  z-index: -1;
  //  left: -925%;
  //}
  &__content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;

    h4 {
      margin-bottom: 0;
      max-width: calc(100% - 11em);
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
      @include _900() {
        margin: 1em 0 1em;
      }
    }
  }
  .image-container {
    height: 100%;
    width: 10em;
    position: relative;
    .image {
      position: absolute;
      width: 10em;
      height: 6.5em;
      bottom: -1.25em;
    }
    @include _650() {
      display: none;
    }
  }
}
</style>
