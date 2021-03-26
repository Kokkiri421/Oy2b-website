<template>
  <div
    id="myModal"
    class="modal"
    :class="{ show: show }"
    @mousedown="clickAnywhere"
  >
    <div class="modal-content-wrapper">
      <div class="modal-content">
        <slot></slot>
      </div>
      <div class="modal-close" @click="$emit('onClick')"></div>
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.3s ease-out, visibility 0.3s ease-out;
  .modal-content-wrapper {
    position: relative;
    margin: auto auto;
    overflow: hidden;
    padding: 50px;
  }
  .modal-content {
    background-color: #fefefe;
    margin: auto auto;
    overflow: hidden;
    width: fit-content;
  }
  .modal-close {
    cursor: pointer;
    position: absolute;
    width: 50px;
    height: 30px;
    top: 50px;
    right: 0;
    &:hover {
      &:before {
        background-color: #d81428;
        transform: rotate(135deg);
      }
      &:after {
        background-color: #d81428;
        transform: rotate(45deg);
      }
    }
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      right: 15%;
      width: 70%;
      height: 1px;
      background-color: #ddd;
      transform: rotate(45deg);
      transform-origin: 50% 50%;
      transition: transform 0.3s ease-out, background-color 0.3s ease-out;
    }
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      right: 15%;
      width: 70%;
      height: 1px;
      background-color: #ddd;
      transform: rotate(-45deg);
      transform-origin: 50% 50%;
      transition: transform 0.3s ease-out, background-color 0.3s ease-out;
    }
  }
}
.show {
  visibility: visible;
  opacity: 1;
}
</style>
