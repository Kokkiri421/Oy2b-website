<template>
  <div class="form-input-field">
    <input type="text" class="form-input" :name="name" />
    <label :for="name">Placeholder</label>
  </div>
</template>

<script>
export default {
  name: 'FormField',
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.form-input-field {
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 1em;
}
label,
input {
  transition: all 0.2s;
  touch-action: manipulation;
}
</style>
