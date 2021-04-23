<template>
  <!--  -->
  <label class="pretty-input">
    <input
      :type="type"
      class="form-input"
      :class="{ 'form-input__error': error && !isCustomized }"
      ref="pretty-input"
      :name="name"
      maxlength="32"
      v-mask="name === 'phone' ? '+7(###)###-##-##' : ''"
      @focus="
        () => {
          isFocused = true
          isCustomized = true
        }
      "
      @blur="
        (e) => {
          isFocused = false
        }
      "
      :value="value"
      @input="input($event)"
    />
    <span
      class="form-input__placeholder"
      :class="{
        customized: (value || isFocused) && !isQuestion && !file,
        file: file,
      }"
      >{{ file || placeholder }}</span
    >
  </label>
</template>

<script>
export default {
  data() {
    return {
      isCustomized: false,
      isFocused: false,
    }
  },

  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      required: true,
    },
    isQuestion: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: null,
    },
    file: {
      type: String,
      default: null,
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    checkCustomized(e) {
      if (e.target.value) {
        this.isCustomized = true
      } else {
        this.isCustomized = false
      }
    },
    input(e) {
      this.$emit('onInput', e)
      this.checkCustomized(e)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/colors';
.pretty-input {
  position: relative;
  display: inline-block;
  .form-input {
    appearance: none;
    padding: 0.8em 1em;
    border: 1px solid #fff;
    border-radius: 4px;
    width: 100%;
    line-height: 1.6em;
    min-height: 3.2em;
    box-sizing: border-box;
    resize: none;
    font: 400 1em/1.1em Montserrat, sans-serif;
    &:focus {
    }
    &__error {
      outline: $red-color1 auto 1px;
    }
    &__placeholder {
      position: absolute;
      line-height: 1.6em;
      left: 1em;
      top: 0;
      max-width: 100%;
      color: #999;
      font-size: 1em;
      padding: 0 0.3em;
      transform: scale(1) translateY(0.8em);
      transition: transform 0.2s ease-out;
      transform-origin: 0 0;
      pointer-events: none;
      border-radius: 4px;
      white-space: nowrap;
    }
  }
}
.customized {
  transform: scale(0.8) translateY(-0.8em) !important;
  color: #d81428 !important;
  background-color: #fff;
}
.file {
  color: $text-color !important;
}
input[type='file'] {
  opacity: 0;
}
</style>
