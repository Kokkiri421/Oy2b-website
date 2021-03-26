<template>
  <div class="running-number">
    {{ outputNumber }}

    {{ checkAnimated }}
  </div>
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
    outputNumber: function () {
      let output = ''
      if (this.isInteger) {
        output = this.currentNumber
      } else {
        if (this.currentNumber < 10.0) {
          output += '0'
        }
        output += String(this.currentNumber.toFixed(1))
        output += '%'
      }
      return output
    },
    checkAnimated: function () {
      if (this.isAnimated) {
        this.runNumber()
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
        }
      }, 50)
    },
  },
}
</script>

<style scoped>
.running-number {
  display: flex;
  font-size: 4em;
  line-height: 0.75em;
  align-items: baseline;
  font-weight: 500;
  color: #d81428;
}
</style>
