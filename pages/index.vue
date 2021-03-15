<template>
  <div class="container">
    <index-hero-block> </index-hero-block>
    <index-main-content> </index-main-content>
  </div>
</template>

<script>
import IndexHeroBlock from '~/components/Index/IndexHeroBlock'
import IndexMainContent from '~/components/Index/IndexMainContent'
export default {
  components: {
    IndexHeroBlock,
    IndexMainContent,
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}
.test {
  color: red;
}
</style>
