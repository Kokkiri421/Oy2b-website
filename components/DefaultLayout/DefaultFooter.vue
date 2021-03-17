<template>
  <div class="wrapper footer">
    <div class="footer-top footer-item">
      <div class="logo">
        <a href="/"> <img src="~/static/images/red_logo.svg" /></a>
      </div>
      <div class="menu smallfont-400">
        <ul class="menu__list">
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
    </div>
    <div class="footer-bottom footer-item smallfont-400">
      <div class="copy">© 2021 Oyster Telecom</div>
      <div class="social">
        <div class="social-network instagram">
          <a class="social-network__link"
            ><img src="~/static/images/instagram.svg"
          /></a>
        </div>
        <div class="social-network vk">
          <a class="social-network__link"
            ><img src="~/static/images/vk.svg"
          /></a>
        </div>
      </div>
      <div class="contacts">
        <a class="underline-animated-link">Контакты</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultFooter',
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';

.footer-item {
  padding: 2em 0;
  @include _1366 {
    padding: 1em 0;
  }
}
.footer-top {
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  flex-direction: row;
  @include _600() {
    flex-wrap: wrap;
  }
  .logo {
    width: fit-content;
    padding-right: 2em;
  }
  .menu {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: center;
      line-height: 40px;
      @include _600() {
        justify-content: flex-start;
        line-height: 1.25em;
        margin-top: 1em;
      }
      padding: 0;
      margin: 0;

      .list-item {
        list-style-type: none;
        margin: 0 0 0 1.2em;
        @include _1366() {
          margin: 0 0 0 1.95em;
        }
        @include _600() {
          margin: 0 4.5% 0.5em 0;
        }
      }
    }
  }
}
.footer-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap-reverse;
  .copy {
    flex-basis: calc(100% / 3);
    @include _600 {
      flex-basis: auto;
    }
    color: #999;
  }
  .social {
    display: flex;
    flex-direction: row;
    flex-basis: calc(100% / 3);
    justify-content: center;
    @include _600 {
      flex-basis: auto;
      justify-content: flex-end;
    }

    .social-network {
      width: fit-content;
      height: fit-content;
      border-radius: 50%;
      &__link {
        display: inline-block;
        vertical-align: middle;
        width: 36px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        @include _400 {
          width: 30px;
          height: 30px;
          line-height: 30px;
        }
        img {
          vertical-align: middle;
        }
      }
    }
    .instagram {
      background: radial-gradient(
        circle at 30% 107%,
        #fdf497 0,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #285aeb 90%
      );
    }
    .vk {
      margin-left: 0.5em;
      background: #4c6c91;
    }
  }
  .contacts {
    flex-basis: calc(100% / 3);
    display: flex;
    justify-content: flex-end;
    @include _600 {
      flex-basis: 100%;
      justify-content: flex-start;
      margin: 1em 0 0.5em 0;
    }
  }
}
.underline-animated-link {
  transition: color 0.2s ease-out;
  cursor: pointer;

  &:hover {
    color: #d81428;
  }
  &:before {
    background: #d81428;
  }
  &:after {
    background: #d81428;
  }
}

.smallfont-400 {
  @include _400() {
    font-size: 0.8em;
  }
}
</style>
