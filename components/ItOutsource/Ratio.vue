<template>
  <div class="ratio">
    <div class="price" @click="showModal">{{ price }}&nbsp;₽</div>
    <h4 class="header">{{ header }}</h4>
    <button v-if="!isContentShown" class="dialog-button" @click="showContent">
      Состав тарифа
    </button>
    <div v-if="isContentShown" @click="showContent">
      <slot name="content"></slot>
      <!--      <button class="dialog-button">Cкрыть</button>-->
    </div>

    <modal-window :show="isModalShown" @onClick="showModal"
      ><TicketModalForm @onClick="showModal"
    /></modal-window>
  </div>
</template>

<script>
import ModalWindow from '~/components/Common/ModalWindow'
import TicketModalForm from '~/components/Common/TicketModalForm'
export default {
  data() {
    return {
      isModalShown: false,
      isContentShown: false,
    }
  },
  components: {
    ModalWindow,
    TicketModalForm,
  },
  methods: {
    showModal() {
      this.isModalShown = !this.isModalShown
    },
    showContent() {
      this.isContentShown = !this.isContentShown
    },
  },
  props: {
    header: {
      type: String,
      required: true,
    },

    price: {
      type: Number || String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/colors';
.ratio {
  position: relative;
  padding: 1.6em 2em 1.6em;
  //border: 1px solid #eee;
  border-radius: 6px;
  text-align: center;
  height: fit-content;
  margin-top: 2em;
  color: #fff;
  background-color: $base-color1;
  min-width: 300px;
  max-width: 300px;
  &:nth-child(1) {
    margin-top: 0;
  }
  @include _900() {
    max-width: 100%;
    padding: 1em;
  }
  .header {
    margin: 0.5em 0;
  }
  .price {
    position: absolute;
    top: -1em;
    width: 60%;
    margin-bottom: -10px;
    padding: 0.5em 1em;
    left: 50%;
    font-size: 1.4em;
    font-weight: 700;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 6px;
    color: #2cbf52;
    border: 1px solid #eee;
    cursor: pointer;
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 20%);
  }
  .content {
    list-style: none;
    padding: 0;
    li {
      padding-bottom: 0.5em;
    }
    margin-bottom: 1em;
  }
  .dialog-button {
    width: 100%;
  }
}
</style>
