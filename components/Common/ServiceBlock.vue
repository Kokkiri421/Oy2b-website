<template>
  <div
    class="content-block"
    @click="test"
    :style="{ backgroundColor: backgroundColor }"
  >
    <div class="content-block__header">
      <h4 class="header-content">
        <slot name="header"> </slot>
      </h4>
    </div>
    <button class="content-block__button dialog-button">Заказать</button>
    <div class="content-block__description" :class="{ expanded: isShown }">
      <slot name="description"></slot>
    </div>
    <div class="content-block__show-more" v-on:click.stop="isShown = !isShown">
      {{ isShown ? 'Скрыть' : 'Читать полностью' }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShown: false,
    }
  },
  props: {
    backgroundColor: {
      type: String,
      required: true,
    },
  },
  methods: {
    test() {
      alert(1234)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.content-block {
  break-inside: avoid-column;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #fff;
  border-radius: 6px;
  padding: 1.25em 2.25em;
  margin-bottom: 1em;
  line-height: 1.5em;
  font-size: 0.95em;
  @include _480() {
    padding: 1em 1.25em;
  }

  &__header {
    display: flex;
    align-items: center;
    padding-top: 1px;
    border-bottom: 1px solid transparent;
    .header-content {
      margin: 0;
    }
  }
  &__button {
    opacity: 0;
    @include _700() {
      font-size: 0.9em;
    }
    @include _480() {
      opacity: 1;
      order: 1;
      width: 100%;
      margin-top: 2em;
    }
  }
  &__description {
    margin-top: 0.75em;
    flex-basis: 100%;
    @include _480() {
      max-height: 100px;
      overflow: hidden;
    }
  }
  &__show-more {
    display: none;
    font-size: 0.8em;
    margin-top: 1em;
    line-height: 1em;
    border-bottom: 1px dotted;
    @include _480() {
      display: block;
    }
  }

  &:hover {
    cursor: pointer;
    .content-block__header {
      border-bottom: 1px dashed #fff;
    }
    .content-block__button {
      opacity: 1;
    }
  }
}
.expanded {
  max-height: fit-content;
}
</style>
