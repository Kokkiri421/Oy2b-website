<template>
  <span class="running-number"
    >{{ isInteger ? currentNumber : currentNumber.toFixed(1) }}
    {{ checkAnimated }}</span
  >
</template>

<script>
export default {
  data() {
    return {
      currentNumber: 0,
    }
  },
  props: {
    number: { type: Number, required: true },
    isAnimated: { type: Boolean, required: true },
    isInteger: { type: Boolean, required: true },
  },
  computed: {
    checkAnimated: function () {
      if (this.isAnimated) {
        this.runNumber()
        console.log('running number')
      }
    },
  },
  methods: {
    runNumber: function () {
      window.setInterval(() => {
        if (this.currentNumber === this.number) {
          return
        }
        if (this.isInteger) {
          this.currentNumber += Math.min(
            this.number - this.currentNumber,
            Math.floor(this.number / 18)
          )
        } else {
          this.currentNumber += Math.min(
            this.number - this.currentNumber,
            this.number / 18
          )
          console.log(this.currentNumber.toFixed(1))
        }
      }, 50)
    },
  },
}
</script>

<style scoped></style>
