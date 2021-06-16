<template>
  <div class="photo-block">
    <div class="photo-block__img">
      <img src="~/static/portraits/roman.png" class="img1"/>
    </div>
    <div class="photo-block__description">
      <img src="~/static/portraits/roman.png" />
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
@import '~/assets/media_mixin';
.photo-block {
  width: 600px;
  height: 600px;
  &__img {
    .img1 {
      width: 300px;
      height: 500px;
    }
    width: 600px;
    height: 500px;
  }
}
</style>