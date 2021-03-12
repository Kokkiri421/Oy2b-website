<template>
  <div class="wrapper">
    <transition name="slide">
      <div class="container">
        <nav class="navigation-menu">
          <div class="navigation-menu__item main-menu">
            <ul class="navigation-menu__list">
              <li class="list-item">
                <a class="underline-animated-link">Wi-Fi для бизнеса</a>
              </li>
              <li class="list-item">
                <a class="underline-animated-link">Интернет до 10Гбит/с</a>
              </li>
              <li class="list-item">
                <a class="underline-animated-link">Виртуальные сервисы</a>
              </li>
              <li class="list-item">
                <a class="underline-animated-link">Телефония</a>
              </li>
              <li class="list-item">
                <a class="underline-animated-link">IT Аутсорсинг</a>
              </li>
              <li class="list-item">
                <a class="underline-animated-link">Облачные решения</a>
              </li>
              <li class="list-item">
                <a class="underline-animated-link">Видеонаблюдение</a>
              </li>
              <li class="list-item">
                <a class="underline-animated-link">Комплексные решения</a>
              </li>
              <li class="list-item">
                <a class="underline-animated-link">Операторам</a>
              </li>
            </ul>
          </div>
          <div class="navigation-menu__item bottom-menu">
            <ul class="navigation-menu__list">
              <li class="list-item">
                <a class="underline-animated-link">О компании</a>
              </li>
              <li class="list-item">
                <a class="underline-animated-link">Вакансии</a>
              </li>
              <li class="list-item">
                <a class="underline-animated-link">Контакты</a>
              </li>
            </ul>
          </div>
          <div class="navigation-menu__item social">
            <div>123456</div>
            <div>123456</div>
          </div>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';

.container {
  position: fixed;
  top: 0%;
  background-color: #d81428;
  margin-left: -5em;
  width: 440px;
  @include _650 {
    margin-left: -20px;
    width: 320px;
    max-height: calc(100% - 4em);
  }
}
.navigation-menu {
  display: flex;
  flex-direction: column;
  margin-top: 96px;
  padding: 2.25em 5em;
  @include _650 {
    margin-top: 64px;
    padding: 1.25em 20px;
  }

  &__item {
    &:nth-child(n) {
      margin-bottom: 2em;
    }
    &:nth-last-child(-n + 1) {
      margin-bottom: 0;
    }
  }
  &__list {
    padding: 0;
    margin: 0;

    .list-item {
      font-size: 1.5em;
      line-height: normal;
      color: #fff;
      list-style-type: none;
      margin-bottom: 0.9em;
    }
  }
}
.main-menu {
  font-weight: 700;
}

.slide-enter-active {
  transition-duration: 0.3s;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: max-content;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
