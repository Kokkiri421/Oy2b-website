<template>
  <section class="container">
    <div v-if="isMounted">
      <yandex-map
        :coords="coords"
        :controls="['zoomControl']"
        :scroll-zoom="false"
        :zoom="11"
        class="map"
        id="map"
        @map-was-initialized="mapHandler"
      >
        <ymap-marker
          v-for="(marker, i) in markers"
          :key="`marker-${i}`"
          :coords="marker.coords"
          :marker-id="`marker-${i}`"
          :hint-content="marker.title"
        />
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
    coords: [59.92783924822753, 30.36150418850785],
    markers: [
      { coords: [59.93943, 30.35384], title: 'Басков пер., 7' },
      { coords: [59.96883, 30.31802], title: 'Аптекарский пр., 2' },
      { coords: [59.86426, 30.30945], title: 'ул. Бассейная, 21' },
      { coords: [59.9433, 30.2965], title: 'Биржевая линия, 8' },
      { coords: [59.97542, 30.33845], title: 'Большой Сампсониевский пр., 62' },
      { coords: [59.91069, 30.33997], title: 'Боровая ул., 57' },
      { coords: [59.88271, 30.26869], title: 'ул. Возрождения, 4а' },
      { coords: [59.93077, 30.28489], title: 'Галерная ул., 73' },
      { coords: [59.92754, 30.32323], title: 'Гороховая ул., 47' },
      { coords: [59.96686, 30.38416], title: 'Кондратьевский пр., 21' },
      { coords: [59.98085, 30.38624], title: 'Кондратьевский пр., 3' },
      { coords: [59.94062, 30.32535], title: 'Конюшенная пл., 2' },
      { coords: [59.90843, 30.26238], title: 'Лифляндская ул., 1' },
      { coords: [59.94171, 30.35573], title: 'ул. Маяковского, 37' },
      {
        coords: [59.90909, 30.31553],
        title: 'набережная Обводного канала, 139',
      },
      { coords: [59.99134, 30.42813], title: 'Пискарёвский пр., 52' },
      { coords: [59.91572, 30.30459], title: 'Троицкий пр., 4' },
      { coords: [59.92704, 30.3333], title: 'набережная реки Фонтанки, 78' },
      { coords: [59.91049, 30.28715], title: 'ул. Циолковского, 11' },
      { coords: [59.97445, 30.31049], title: 'ул. Чапыгина, 8' },
      { coords: [59.93531, 30.27701], title: '13-я лин. В.О, 6' },
      { coords: [59.93488, 30.31608], title: 'Большая Морская ул., 18' },
      { coords: [59.90919, 30.34123], title: 'Боровая ул., 104' },
      { coords: [59.92954, 30.34974], title: 'Дмитровский пер., 13' },
      { coords: [59.92233, 30.34514], title: 'ул. Достоевского, 44а' },
      { coords: [59.93766, 30.33703], title: 'Инженерная ул., 6' },
      { coords: [59.98388, 30.33033], title: 'Кантемировская ул., 12' },
      { coords: [59.90253, 30.32424], title: 'Киевская ул., 5' },
      { coords: [59.91126, 30.35386], title: 'Курская ул., 28' },
      { coords: [59.91302, 30.34985], title: 'Лиговский пр., 150' },
      { coords: [59.89477, 30.32937], title: 'Лиговский пр., 289' },
      { coords: [59.92444, 30.36029], title: 'Лиговский пр., 56' },
      { coords: [59.96379, 30.28947], title: 'Лодейнопольская ул., 5' },
      { coords: [59.97692, 30.36433], title: 'Менделеевская ул., 9' },
      { coords: [59.91963, 30.31816], title: 'Московский пр-т., 22' },
      { coords: [59.89996, 30.31837], title: 'Московский пр-т., 79' },
      { coords: [59.94201, 30.34499], title: 'Моховая ул., 27' },
      { coords: [59.99426, 30.38873], title: 'пр. Непокорённых, 49' },
      { coords: [59.85012, 30.26837], title: 'б-р Новаторов, 11' },
      { coords: [59.81592, 30.29293], title: 'ул. Пилотов, 32' },
      { coords: [59.97, 30.41279], title: 'Пискарёвский пр., 25' },
      { coords: [59.95766, 30.32384], title: 'Малая Посадская ул., 16' },
      { coords: [59.80616, 30.32044], title: 'Пулковское ш., 37' },
      { coords: [59.95672, 30.30845], title: 'Саблинская ул., 14' },
      { coords: [59.87477, 30.32992], title: 'ул. Севастьянова, 9' },
      { coords: [59.77479, 30.12913], title: 'Социалистическая ул., 14' },
      { coords: [59.92029, 30.30924], title: 'набережная реки Фонтанки, 123' },
      { coords: [59.88798, 30.33034], title: 'Цветочная ул., 16' },
      { coords: [60.00555, 30.32789], title: 'пр-т. Энгельса, 27' },
      { coords: [59.91002, 30.31466], title: 'ул. Егорова, 28' },
      { coords: [59.95107, 30.29971], title: 'ул. Яблочкова, 12' },
      { coords: [59.9336, 30.42835], title: 'Заневский пр-т., 36' },
      { coords: [59.92665, 30.41761], title: 'Лицей № 533' },
      { coords: [59.92245, 30.41083], title: 'ул. Громова, 5' },
      { coords: [59.90292, 30.39856], title: 'Бизнес-центр «T4»' },
      { coords: [59.9029, 30.40206], title: 'ул. Бехтерева, 4' },
      { coords: [59.90544, 30.38315], title: 'ул. Седова, 11' },
      { coords: [59.88375, 30.36506], title: 'ул. Салова, 63' },
      { coords: [59.88496, 30.36831], title: 'ул. Салова, 61' },
      { coords: [59.85992, 30.36575], title: 'Белградская ул., 26, к2' },
      { coords: [59.84475, 30.32892], title: 'ул. Орджоникидзе, 22' },
    ],
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
  mounted() {
    loadYmap().then(() => (this.isMounted = true))
  },
  // async mounted() {
  //   this.isMounted = true
  //   await loadYmap()
  //
  //   ymaps.geoXml
  //     .load(
  //       // 'http://maps.yandex.ru/export/usermaps/HNQ5uTUgbjy6L0dW2uReUjSoXb1Ad7jw/'
  //       '~/static/map.kml'
  //     )
  //     .then((res) => {
  //       this.myMap.geoObjects.add(res.geoObjects)
  //     })
  // },
}
</script>

<style lang="scss" scoped>
@import 'assets/media_mixin';

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
