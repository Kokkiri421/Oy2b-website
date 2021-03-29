<template>
  <div class="ratio" >
    <div class="price" @click="showModal">{{ price }}&nbsp;₽</div>
    <h4 class="header">{{ header }}</h4>
    <slot name="content"></slot>
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
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.ratio {
  position: relative;
  padding: 1.6em 2em 3em;
  //border: 1px solid #eee;
  border-radius: 6px;
  text-align: center;
  height: fit-content;
  margin-top: 2em;
  color: #fff;
  @include _900() {
    padding: 1em;
  }

  .header {
    margin: 1em 0;
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
  }
}
</style>
