<template>
  <div class="wrapper footer">
    <div class="footer-top footer-item">top</div>
    <div class="footer-bottom footer-item">
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
      <div class="contacts"><a>Контакты</a></div>
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
}
.footer-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap-reverse;
  .copy {
    flex-grow: 1;
    color: #999;
  }
  .social {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: center;
    @include _600 {
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
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    @include _600 {
      flex-basis: 100%;
      justify-content: flex-start;
      margin: 1em 0 0.5em 0;
    }
  }
}
</style>
