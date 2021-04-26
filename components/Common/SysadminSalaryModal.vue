<template>
  <div class="sysadmin-salary">
    <ul class="content" v-if="sysadminCount === 1">
      <li><h4>Один сисадмин</h4></li>
      <li>Средняя ЗП — 55тыс на руки</li>
      <li>НДФЛ(13%) — 8 220</li>
      <li>Отчисления:</li>
      <li>Пенсионные(22%) — 13 910</li>
      <li>Медицинские(5,1%) — 3225</li>
      <li>Социальные(2,9%) — 1834</li>
      <li>Отчисления ФСС(0,2%) — 127</li>
      <li><h4 class="minus">Минусы:</h4></li>
      <li>Отпуска 2 раза в год(4недели)</li>
      <li>Возможные больничные</li>
      <li>Необходимость контроля сотрудника</li>
      <li>Компетенция одного человека</li>
    </ul>
    <ul class="content" v-if="sysadminCount === 2">
      <li><h4>Два сисадмина</h4></li>
      <li>Средняя ЗП — 40тыс на руки</li>
      <li>НДФЛ(13%) — 5 980</li>
      <li>Отчисления:</li>
      <li>Пенсионные(22%) — 10 120</li>
      <li>Медицинские(5,1%) — 2 346</li>
      <li>Социальные(2,9%) — 1 334</li>
      <li>Отчисления ФСС(0,2%) — 92</li>
      <li><h4 class="minus">Минусы:</h4></li>
      <li>Отпуска 2 раза в год(4недели)</li>
      <li>Возможные больничные</li>
      <li>Необходимость контроля сотрудника</li>
      <li>Компетенция одного человека</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {},
  props: {
    sysadminCount: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/colors';
.sysadmin-salary {
  padding: 1em;
  max-width: 650px;
  .content {
    list-style: none;
    padding: 0;

    li {
      //padding-bottom: 0.5em;
      margin-bottom: 0.5em;
    }
    h4 {
      margin: 0;
    }
    margin-bottom: 1em;
  }
  .minus {
    color: $red-color1;
    margin-top: 1em;
  }
}
</style>
