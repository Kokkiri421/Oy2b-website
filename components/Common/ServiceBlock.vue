<template>
  <div class="content-block-wrapper">
    <div
      class="content-block"
      :style=" (type === 'block') ? {cursor: 'default'} : {cursor: 'pointer'}"
      @click="showModal"
    >
      <div class="content-block__header">
        <h4 class="header-content">
          <span :class="{ order: type === 'order', link: type === 'link' }"
            ><slot name="header"> </slot
          ></span>
        </h4>
      </div>
      <div class="content-block__button" :class="{ block: type === 'block' }">
        <button class="dialog-button">Заказать</button>
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
    <modal-window v-if="type !== 'block'" :show="isModalShown" @onClick="showModal"
      ><ConsultationModalForm @onClick="showModal" :id="'1'"
    /></modal-window>
  </div>
</template>

<script>
import ModalWindow from '~/components/Common/ModalWindow'
import ConsultationModalForm from '~/components/DefaultLayout/ConsultationModalForm'
export default {
  data() {
    return {
      isShown: false,
      isModalShown: false,
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
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/colors';
$font-color: #fff;
.content-block-wrapper {
  display: block;
  -webkit-column-break-inside: avoid;
  break-inside: avoid;
  page-break-inside: avoid;
  column-fill: balance;
  padding-bottom: 1em;
}
.content-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  color: $font-color;
  border-radius: 6px;
  padding: 1.25em 2.25em 1.75em;
  background-color: $base-color1;
  line-height: 1.5em;
  font-size: 0.95em;

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
        border-bottom: 1px dashed $font-color;
      }
      .link {
        border-bottom: 1px solid $font-color;
      }
    }
    .content-block__button {
      opacity: 1;
    }
  }
}
.block {
  display: none;
  cursor: default;
}
.expanded {
  max-height: fit-content;
}
</style>
