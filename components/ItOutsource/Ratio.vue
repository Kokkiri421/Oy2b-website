<template>
  <div class="ratio" :class="{ popular: isPopular }">
    <div v-if="isPopular" class="popular-mark">
      <span>ПОПУЛЯРНЫЙ</span>
    </div>
    <div class="main-info">
      <h4
        class="header"
        :class="{ employee: ratioType === 'employee1' }"
        @click="showContent"
      >
        <span>{{ header }}</span>
        <icon
          v-if="true"
          :icon-name="'expand-icon'"
          class="expand-icon"
          :class="{ rotate: isContentShown }"
          :view-box="'0 0 24 24'"
        >
          <menu-arrow-icon />
        </icon>
      </h4>
      <div class="info">
        <div class="price">
          <p v-if="ratioType === 'ratio' && price > 0" class="normal-price">
            {{ Math.floor(price * 1.1) }}&nbsp;₽
          </p>
          <p class="discount-price">{{ price }}&nbsp;₽</p>
        </div>
        <button class="dialog-button" @click="onClickButton(false)">
          {{ buttonText }}
        </button>
      </div>
    </div>
    <transition name="slide-fade">
      <div v-if="isContentShown" @click="showContent" class="list">
        <slot name="content"></slot>
        <!--      <button class="dialog-button">Cкрыть</button>-->
        <div class="info">
          <div class="price">
            <p class="discount-price">{{ price }}&nbsp;₽</p>
          </div>
          <button class="dialog-button" @click="onClickButton(true)">
            {{ buttonText }}
          </button>
        </div>
      </div>
    </transition>
    <modal-window :show="isModalShown" @onClick="showModal">
      <TicketModalForm
        @onClick="showModal"
        v-if="ratioType === 'ratio'"
        :price="price"
        :tarif="true"
        :calculator-info="calculatorInfo"
      />
      <sysadmin-salary-modal v-else :sysadmin-count="sysadminCount" />
    </modal-window>
  </div>
</template>

<script>
import ModalWindow from '~/components/Common/ModalWindow'
import TicketModalForm from '~/components/Common/TicketModalForm'
import Icon from '~/components/Icons/Icon'
import ExpandTableIcon from '~/components/Icons/ExpandTableIcon'
import MenuArrowIcon from '~/components/Icons/MenuArrowIcon'
import SysadminSalaryModal from '~/components/Common/SysadminSalaryModal'

export default {
  data() {
    return {
      isModalShown: false,
      isContentShown: false,
      scrollYcoord: 0,
    }
  },
  components: {
    ModalWindow,
    TicketModalForm,
    Icon,
    MenuArrowIcon,
    SysadminSalaryModal,
  },
  methods: {
    onClickButton(i) {
      if (i) return
      if (this.ratioType === 'employee' ) {
        this.showContent()
      } else {
        this.showModal()
      }
    },
    showModal() {
      this.isModalShown = !this.isModalShown
    },
    showContent() {
      // if (this.ratioType !== 'ratio') return
      if (!this.isContentShown) {
        this.isContentShown = true
        this.scrollYcoord = window.scrollY
      } else {
        if (this.scrollYcoord < window.scrollY) {
          window.scrollTo({
            top: this.scrollYcoord,
            behavior: 'smooth',
          })
        }
        this.isContentShown = false
      }
    },
  },
  props: {
    header: {
      type: String,
      required: true,
    },
    discount: {
      type: Number || String,
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
    isPopular: {
      type: Boolean,
      default: false,
    },
    buttonText: {
      type: String,
      default: 'Выбрать',
    },
    ratioType: {
      type: String,
      default: 'ratio',
    },
    sysadminCount: {
      type: Number,
      required: false,
    },
    calculatorInfo: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/colors';

.ratio {
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  padding: 1em;
  //border: 1px solid #eee;
  border-radius: 6px;
  //text-align: center;
  //height: fit-content;
  margin-top: 1em;
  background-color: #fff;
  //box-shadow: 0 0 20px 0 rgb(0 0 0 / 20%);
  width: 350px;

  &:nth-child(1) {
    margin-top: 0;
  }

  @include _1300() {
    width: 100%;
  }

  .popular-mark {
    position: absolute;
    padding: 0.5em 4em;
    top: 2.35em;
    right: -4em;
    transform: rotate(45deg);
    background-color: #2cbf52;
    color: #fff;
    font-size: 0.6em;
    font-weight: 700;
  }

  .main-info {
    height: calc(140px - 2em);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .header {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 2px dashed #444;
      width: fit-content;

      .expand-icon {
        margin-left: 0.25em;
        height: 25px;
        width: 25px;

        transition: transform 0.3s;
        vertical-align: middle;
        fill: none;
        stroke: #444;
        stroke-width: 3px;
        stroke-linejoin: round;
        stroke-linecap: round;
      }

      .rotate {
        transform: rotate(180deg);
      }
    }
  }

  .list {
    margin-top: 2em;
  }

  .dialog-button {
    //width: 100%;
  }
}

.info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;

  .price {
    text-align: left;
    min-width: 103px;
    width: 103px;

    .normal-price {
      position: relative;
      //font-size: 1.2em;
      font-weight: 400;
      //color: #4c4646;

      &:after {
        content: '';
        display: block;
        width: 70%;
        height: 50%;
        position: absolute;
        top: -1px;
        left: -5%;
        border-bottom: 1px solid $text-color;
      }
    }

    .discount-price {
      font-size: 1.4em;
      font-weight: 700;
      color: #2cbf52;
    }

    margin-right: 1em;
  }
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}

.popular {
  box-shadow: 0 0 20px 0 rgba(44, 191, 82, 0.5);
}

.sysadmin-ratio {
  .header {
    font-size: 1.6em;
    @include _1300() {
      font-size: 1.5em;
    }
    @include _700() {
      font-size: 1.2em;
    }
  }

  background: #ddd;

  .dialog-button {
    background-color: #999;
    padding: 0.96em 1.8em;
    font-size: 0.9em;

    &:hover {
      background-color: #aaa;
    }
  }

  .discount-price {
    color: #50a265 !important;
  }
}
.employee {
  border-bottom: none !important;
  cursor: default;
}
</style>
