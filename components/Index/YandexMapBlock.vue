<template>
  <section class="container">
    <div v-if="isMounted">
      <yandex-map
        :coords="[53.794890089843705, 56.469845522802]"
        :controls="['zoomControl']"
        :scroll-zoom="false"
        :zoom="11"
        class="map"
        id="map"
        @map-was-initialized="mapHandler"
      >
      </yandex-map>
    </div>
  </section>
</template>

<script>
//yandex maps
import { yandexMap, ymapMarker, loadYmap } from 'vue-yandex-maps'
export default {
  data: () => ({
    isMounted: false,
    myMap: null,
  }),
  components: {
    yandexMap,
    ymapMarker,
  },
  methods: {
    mapHandler: function (e) {
      this.myMap = e
    },
  },
  async mounted() {
    this.isMounted = true
    await loadYmap()

    ymaps.geoXml
      .load(
        //'http://maps.yandex.ru/export/usermaps/HNQ5uTUgbjy6L0dW2uReUjSoXb1Ad7jw/'
        '~/static/map.kml'
      )
      .then((res) => {
        this.myMap.geoObjects.add(res.geoObjects)
      })
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.ymap-container {
  height: 700px;
  @include _1000() {
    height: 500px;
  }
  @include _700() {
    height: 400px;
  }
}
</style>
