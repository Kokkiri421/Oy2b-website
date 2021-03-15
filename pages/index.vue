<template>
  <div class="container">
    <index-hero-block> </index-hero-block>
  </div>
</template>

<script>
import IndexHeroBlock from '~/components/Index/IndexHeroBlock'
export default {
  components: {
    IndexHeroBlock,
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
.test {
  color: red;
}
</style>
