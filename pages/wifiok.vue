<template>
  <div class="wrapper">
    <div class="wi-fi-message">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 50 50"
        xml:space="preserve"
        width="100"
        height="100"
      >
        <circle style="fill: #25ae88" cx="25" cy="25" r="25"></circle>
        <polyline points="38,15 22,33 12,25 "></polyline>
      </svg>
      <h4>Вы успешно авторизованы в сети Oyster&nbsp;Telecom</h4>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'wifiLayout',
}
</script>

<style scoped lang="scss">
.wrapper {
  height: 100%;
  flex-grow: 1;
  display: flex;
}
.wi-fi-message {
  svg {
    polyline {
      fill: #25ae88;
      stroke: #ffffff;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-miterlimit: 10;
    }
    margin-bottom: 1em;
  }

  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
