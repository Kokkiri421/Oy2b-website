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
      setTimeout(() => {
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
      }, 100)
    },
  },
  mounted() {
    this.isToAnimate()
    window.addEventListener('scroll', this.isToAnimate)
    window.addEventListener('resize', this.isToAnimate)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.isToAnimate)
    window.removeEventListener('resize', this.isToAnimate)
  },
}
</script>

<style scoped>
.animated-element {
  display: inline-block;
  vertical-align: top;
}
</style>
