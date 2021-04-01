<template>
  <div class="desktop-menu-dropdown-container">
    <div class="desktop-menu-dropdown">
      <slot name="menu"></slot>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.desktop-menu-dropdown-container {
  position: absolute;
  display: none;
  top: 2.5em;
  padding-top:0.5em;
  .desktop-menu-dropdown {
    position: relative;
    display: block;
    background-color: #fff;
    color: #000;
    border-radius: 6px;
    padding: 1em;
    font-size: 0.8em;

    height: fit-content;
    line-height: 1.6em;
    box-shadow: #000;
    box-shadow: 0 0.25em 0.5em 0 rgb(0 0 0 / 25%);
    cursor: default;
  }
}
.dropdownShown {
  display: block;
}
</style>
