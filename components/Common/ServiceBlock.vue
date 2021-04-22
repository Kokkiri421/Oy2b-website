<template>
  <div class="content-block-wrapper">
    <div
      class="content-block"
      ref="contentBlock"
      :style="{
        cursor: type === 'block' ? 'default' : 'pointer',
      }"
      :class="this.isLeftAlign ? 'left' : 'right'"
    >
      <div class="content-block__header">
        <h4 class="header-content">
          <span :class="{ order: type === 'order', link: type === 'link' }"
            ><slot name="header"> </slot
          ></span>
        </h4>
      </div>
      <div class="content-block__button" :class="{ block: type === 'block' }">
        <button @click="showModal" class="dialog-button">Заказать</button>
      </div>

      <div class="content-block__description" :class="{ expanded: isShown }">
        <slot name="description"></slot>
      </div>
      <div
        class="content-block__show-more"
        v-on:click.stop="isShown = !isShown"
      >
        {{ isShown ? 'Скрыть' : 'Читать полностью' }}
      </div>
    </div>
    <modal-window
      v-if="type !== 'block' && isModalShown"
      :show="isModalShown"
      @onClick="showModal"
      ><ConsultationModalForm @onClick="showModal"
    /></modal-window>
  </div>
</template>

<script>
import ModalWindow from '~/components/Common/ModalWindow'
import ConsultationModalForm from '~/components/Common/ConsultationModalForm'
export default {
  data() {
    return {
      isShown: false,
      isModalShown: false,
      isLeftAlign: false,
    }
  },
  components: {
    ModalWindow,
    ConsultationModalForm,
  },
  props: {
    backgroundColor: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'order',
    },
  },
  methods: {
    // scrollDown() {
    //   this.$emit('onClick')
    // },
    showModal() {
      if (this.type === 'block') return
      this.isModalShown = !this.isModalShown
    },
    setAlign() {
      this.isLeftAlign =
        this.$el.offsetLeft + this.$el.offsetWidth / 2 < window.innerWidth / 2
    },
  },
  mounted() {
    this.setAlign()
    window.addEventListener('resize', this.setAlign)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setAlign)
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/colors';

.content-block-wrapper {
  display: block;
  -webkit-column-break-inside: avoid;
  break-inside: avoid;
  page-break-inside: avoid;
  column-fill: balance;
  padding-bottom: 1em;
  .content-block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    color: $text-color;
    background-color: $light-blue-color;
    border-radius: 6px;
    padding: 1em;
    box-sizing: border-box;

    @include _480() {
      padding: 1em 1.25em 1.5em;
    }

    &__header {
      display: flex;
      align-items: center;

      max-width: calc(100% - 150px);
      padding-top: 1px;

      .header-content {
        margin: 0;
        width: inherit;
        span {
        }
        .order {
          border-bottom: 1px dashed transparent;
          transition: 0.2s border-bottom ease-out;
        }
        .link {
          border-bottom: 1px solid transparent;
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

      @include _950() {
        opacity: 1;
      }
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
        .order {
          border-bottom: 1px dashed $header-color;
        }
        .link {
          border-bottom: 1px solid $header-color;
        }
      }
      .content-block__button {
        opacity: 1;
      }
    }
  }
}
.dialog-button {
  @include _950() {
    background-color: transparent;
    color: $text-color;
    border: 1px solid $text-color;
    transition: color 0.2s ease-out, background-color 0.2s ease-out,
      border 0.2s ease-out, opacity 0.2s ease-out;

    &:hover {
      background-color: #ec3346;
      border-color: #ec3346;
      color: #fff;
    }
  }
}
.block {
  display: none;
  cursor: default;
}
.expanded {
  max-height: fit-content !important;
}
.left {
  position: relative;
  &:before {
    content: '';
    position: absolute;
    height: 100%;
    background-color: $light-blue-color;
    width: 1000%;
    top: 0;
    z-index: -1;
    left: -925%;
    @include _950() {
      left: -525%;
    }
  }
}
.right {
  position: relative;
  &:before {
    content: '';
    position: absolute;
    height: 100%;
    background-color: $light-blue-color;
    width: 1000%;
    top: 0;
    z-index: -1;
    right: -925%;
    @include _950() {
      right: -525%;
    }
  }
}
</style>
