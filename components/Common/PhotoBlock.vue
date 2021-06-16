<template>
  <div class="photo-block">
    <div class="photo-block__img">
      <img src="~/static/portraits/roman.png" class="img img__1" />
      <img src="~/static/portraits/roman.png" class="img img__2" />
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
  width: 500px;
  height: 600px;
  &__img {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    .img {
      width: 400px;
      height: 500px;
      flex-basis: 400px;
    }

    width: 500px;
    height: 500px;
  }
}
</style>