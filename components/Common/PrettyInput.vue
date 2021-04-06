<template>
  <label class="pretty-input">
    <input
      :type="type"
      class="form-input"
      :name="name"
      maxlength="18"
      @focus="isCustomized = true"
      @blur="checkCustomized"
    />
    <span
      class="form-input__placeholder"
      :class="{ customized: isCustomized && !isQuestion }"
      >{{ placeholder }}</span
    >
  </label>
</template>

<script>
export default {
  data() {
    return {
      isCustomized: false,
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
  },
  methods: {
    checkCustomized(e) {
      if (!e.target.value) {
        this.isCustomized = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.pretty-input {
  position: relative;
  display: inline-block;
  .form-input {
    appearance: none;
    padding: 0.8em 1em;
    border: 1px solid #fff;
    border-radius: 4px;
    min-width: 100%;
    line-height: 1.6em;
    min-height: 3.2em;
    box-sizing: border-box;
    resize: none;
    font: 400 1em/1.1em Montserrat, sans-serif;
    &__placeholder {
      position: absolute;
      line-height: 1.6em;
      left: 1em;
      top: 0;
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
input[type="file"] { 
  opacity: 0;

}
</style>
