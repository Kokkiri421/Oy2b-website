<template>
  <div class="photo-block">
    <div class="photo-block__img">
      <img src="~/static/portraits/index.png" class="img"/>
    </div>
    <div class="photo-block__description">
      
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
@import '~/assets/media_mixin';
.photo-block {
  width: 500px;
  height: 600px;
  &__img {
    .img {
      width: 100%;
      height: 100%;
    }
    width: 500px;
    height: 500px;
  }
}
</style>