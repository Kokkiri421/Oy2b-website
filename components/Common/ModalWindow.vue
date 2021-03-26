<template>
  <div
    id="myModal"
    class="modal"
    :class="{ show: show }"
    @click="clickAnywhere"
  >
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalWindow',
  methods: {
    clickAnywhere: function (e) {
      if (e.target.className === 'modal show') {
        this.$emit('onClick')
      }
    },
  },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.modal {
  visibility: hidden;
  position: fixed;
  display: flex;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.3s ease-out, visibility 0.3s ease-out;
  .modal-content {
    background-color: #fefefe;
    margin: auto auto;
    overflow: hidden;
    border: 1px solid #888;
    width: fit-content;
  }
}
.show {
  visibility: visible;
  opacity: 1;
}
</style>
