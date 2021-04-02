<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="512"
    :height="512"
    :viewBox="viewBox"
    :aria-labelledby="iconName"
    :stroke-width="stokeWidth"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g>
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box',
    },
    viewBox: {
      type: String,
      default: '0 0 512 512',
    },
    stokeWidth: {
      type: Number,
      default: 1,
    },
  },
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
}
</style>
