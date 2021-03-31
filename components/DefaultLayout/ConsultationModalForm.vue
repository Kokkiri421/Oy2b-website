<template>
  <div class="modal-form">
    <h4>Получить консультацию</h4>
    <pretty-input
      :name="'name'"
      :placeholder="'Ваше Имя'"
      class="modal-form__item"
    ></pretty-input>
    <pretty-input
      :name="'phone'"
      :placeholder="'Телефон'"
      class="modal-form__item"
    ></pretty-input>
    <div class="radio-buttons">
      <div class="modal-form__radio">
        <input id="ip" name="radio" type="radio" checked />
        <label for="ip" class="radio-label">ИП</label>
      </div>
      <div class="modal-form__radio">
        <input id="ul" name="radio" type="radio" />
        <label for="ul" class="radio-label">Юр.лицо</label>
      </div>
    </div>
    <button class="dialog-button modal-form__button">
      Получить консультацию
    </button>
    <div class="modal-form__privacy">
      Нажимая кнопку «Получить консультацию», я&nbsp;даю своё согласие
      «Oyster&nbsp;Telecom» на&nbsp;обработку моих
      <NuxtLink class="link" to="/privacy/" @click.native="$emit('onClick')"
        >персональных данных</NuxtLink
      >.
    </div>
  </div>
</template>

<script>
import PrettyInput from '~/components/Common/PrettyInput'
export default {
  components: {
    PrettyInput,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.modal-form {
  padding: 2em;
  max-width: 650px;

  &__item {
    border: 1px solid #dfdfdf;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 1em;
  }
  $color1: #fff;
  $color2: #d81428;
  &__radio {
    position: relative;
    margin: 0.5rem;
    input[type='radio'] {
      position: absolute;
      opacity: 0;
      + .radio-label {
        margin-right: 2em;
        &:before {
          content: '';
          position: absolute;
          left: -2em;
          width: 20px;
          height: 20px;
          border-radius: 100%;
          border: 1px solid #dfdfdf;
          transition: border-color 0.2s ease-out;
          z-index: 1;
        }
        &::after {
          content: '';
          position: absolute;
          left: -1.7em;
          top: 5px;
          width: 12px;
          height: 12px;
          border-radius: 100%;
          
          transition: border-color 0.2s ease-out;
          z-index: 1;

        }
      }
      &:checked {
        + .radio-label {
          &:before {
            //background-color: $color2;
            border-radius: 100%;
            //box-shadow: inset 0 0 0 6px $color1;
          }
          &:after {
            background-color: $color2;
          }
        }
      }
      &:focus {
        + .radio-label {
          &:before {
            outline: none;
            border-color: $color2;
          }
        }
      }
      &:disabled {
        + .radio-label {
          &:before {
            box-shadow: inset 0 0 0 4px $color1;
            border-color: darken($color1, 25%);
            background: darken($color1, 25%);
          }
        }
      }
      + .radio-label {
        &:empty {
          &:before {
            margin-right: 0;
          }
        }
      }
    }
  }
  &__button {
    width: 100%;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
  &__privacy {
    font-size: 0.8em;
    line-height: 1.4em;
    color: #000;
    .link {
      color: #000;
    }
  }
  .radio-buttons {
    display: flex;
    flex-direction: row;
    padding-left: 1.5em;
  }
}
</style>
