<template>
  <div
    class="content-block"
    @click="scrollDown"
    :style="{ backgroundColor: backgroundColor }"
  >
    <div class="content-block__header">
      <h4 class="header-content">
        <span><slot name="header"> </slot></span>
      </h4>
    </div>
    <div class="content-block__button"><slot name="button"></slot></div>

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
    scrollDown() {
      this.$emit('onClick')
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
  padding: 1.25em 2.25em 1.75em;
  margin-bottom: 1em;
  line-height: 1.5em;
  font-size: 0.95em;
  column-fill: balance;
  @include _480() {
    padding: 1em 1.25em 1.5em;
  }

  &__header {
    display: flex;
    align-items: center;
    width: fit-content;
    max-width: calc(100% - 150px);
    padding-top: 1px;

    .header-content {
      margin: 0;
      span {
        border-bottom: 1px dashed transparent;
        transition: 0.2s border-bottom ease-out;
      }
    }
    @include _480() {
      max-width: 100%;
    }
  }
  &__button {
    opacity: 0;
    height: fit-content;
    transition: 0.2s opacity ease-out;
    @include _700() {
      font-size: 0.9em;
    }
    @include _480() {
      opacity: 1;
      order: 1;
      width: 100%;
      margin-top: 2em;
    }
    button {
      width: 100%;
    }
  }
  &__description {
    align-self: flex-end;
    margin-top: 0.75em;
    width: 100%;
    max-height: fit-content;
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
    .header-content {
      span {
        border-bottom: 1px dashed #fff;
      }
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
