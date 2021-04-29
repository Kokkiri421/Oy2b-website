<template>
  <section class="ymap-contact-container" v-if="isMounted">
    <yandex-map
      :zoom="13"
      :coords="coords"
      :controls="['zoomControl']"
      :scroll-zoom="false"
      class="map"
      id="contact-map"
      @map-was-initialized="mapHandler"
    >
    </yandex-map>
  </section>
</template>

<script>
import { yandexMap, ymapMarker, loadYmap } from 'vue-yandex-maps'

export default {
  data() {
    return {
      coords: [59.927450223522, 30.323202505559],

      isMounted: false,
    }
  },
  methods: {
    mapHandler: function (e) {
      this.myMap = e
      var myPlacemark = new ymaps.Placemark(
        [59.927352, 30.322805],
        { hintContent: 'ул. Гороховая 47' },
        {
          preset: 'islands#redDotIcon',
        }
      )
      this.myMap.geoObjects.add(myPlacemark)
      //this.myMap.addOverlay()
    },
  },
  components: { yandexMap, ymapMarker },
  mounted() {
    loadYmap({ apiKey: '9f84fb3b-4b31-4a89-91f0-df9753794a0f' }).then(() => {
      this.isMounted = true
    })
  },
}
</script>

<style lang="scss">
@import 'assets/media_mixin';
.ymap-contact-container {
  height: inherit;
  width: 100%;
}
.small-text {
  margin: 0;
  padding: 0;
  font-size: 0.9em;
  line-height: 1.5em;
}
#contact-map {
  height: 100%;
  //   @include _1000() {
  //     height: 500px;
  //   }
  //   @include _700() {
  //     height: 400px;
  //   }
}
[class*='ymaps-2'][class*='-ground-pane'] {
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
  /* Firefox 3.5+ */
  -webkit-filter: grayscale(100%);
  /* Chrome 19+ & Safari 6+ */
  filter: grayscale(100%);
}
</style>
