<template>
  <div ref="animatedElement" class="animated-element">
    <slot :isAnimated="animated"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animated: false,
    }
  },
  methods: {
    isToAnimate: function () {
      if (!this.animated && this.$refs.animatedElement) {
        if (
          window.scrollY + window.innerHeight >
            this.$refs.animatedElement.offsetTop &&
          this.$refs.animatedElement.offsetTop +
            this.$refs.animatedElement.offsetHeight >
            window.scrollY
        ) {
          this.animated = true
        }
      }
    },
  },
  mounted() {
    this.isToAnimate()
    window.addEventListener('scroll', this.isToAnimate)
  },
}
</script>

<style scoped></style>
