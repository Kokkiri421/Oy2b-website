<template>
  <div class="ratio" :style="{ background: backgroundColor }">
    <div class="price">{{ price }}&nbsp;₽</div>
    <h4 class="header">{{ header }}</h4>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      required: true,
    },
    backgroundColor: {
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
  border: 1px solid #eee;
  border-radius: 6px;
  text-align: center;
  height: fit-content;
  margin-top: 2em;
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
