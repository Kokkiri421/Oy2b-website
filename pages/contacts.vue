<template>
  <div class="wrapper">
    <div class="contacts-page">
      <div class="page-content">
        <div class="contacts-page__content">
          <h1>Контакты</h1>
          <h4>
            Санкт-Петербург<br />
            Гороховая ул. 47
          </h4>
          <div class="page-content-block contacts-list">
            <div class="contact">
              <p class="contact__name">Отдел корпоративных продаж</p>
              <a href="tel:+78126002030" class="contact__number"
                >+7(812)600-2030</a
              >
              <a
                class="contact__email underline-animated-link"
                href="mailto:sale@oy2b.ru"
                >sale@oy2b.ru</a
              >
            </div>
            <div class="contact">
              <p class="contact__name">Общие вопросы</p>
              <a href="tel:+78126010666" class="contact__number"
                >+7(812)601-0666</a
              >
              <a
                class="contact__email underline-animated-link"
                href="mailto:info@oy2b.ru"
                >info@oy2b.ru</a
              >
            </div>
            <div class="contact">
              <p class="contact__name">Круглосуточная тех. поддержка</p>
              <a href="tel:+78126010610" class="contact__number"
                >+7(812)601-0610</a
              >
              <a
                class="contact__email underline-animated-link"
                href="mailto:support@oy2b.ru"
                >support@oy2b.ru</a
              >
            </div>
            <div class="contact">
              <p class="contact__name">Отдел обслуживания</p>
              <a href="tel:+78126010707" class="contact__number"
                >+7(812)601-0707</a
              >
              <a
                class="contact__email underline-animated-link"
                href="mailto:sale@oy2b.ru"
                >sale@oy2b.ru</a
              >
            </div>
            <div class="contact">
              <p class="contact__name">Отдел по работе с операторами связи</p>
              <a href="tel:+78126010709" class="contact__number"
                >+7(812)601-0709</a
              >
              <a
                class="contact__email underline-animated-link"
                href="mailto:oper@oy2b.ru"
                >oper@oy2b.ru</a
              >
            </div>
          </div>
        </div>
        <contact-yandex-map class="contacts-page-map"/>
      </div>
    </div>
  </div>
</template>

<script>
import ContactYandexMap from '~/components/Contacts/ContactYandexMap'

export default {
  layout: 'documentLayout',
  components: {
    ContactYandexMap,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
header {
  background: rgba(0, 0, 0, 0.8) !important;
}
.contacts-page {
  padding: 8em 0;
  @include _600() {
    padding: 4em 0 1em;
  }

  
  .contacts-list {
    max-width: 600px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    @include _600() {
      flex-direction: column;
    }
    .contact {
      flex-basis: 50%;
      margin-bottom: 2em;
      &__name {
        color: #999999;
        margin-bottom: 0.5em;
      }
      &__number {
        width: fit-content;
        display: block;
        text-decoration: none;
        color: #000;
        font-weight: 700;
        font-size: 1.15em;
        margin-bottom: 0.5em;
      }
      &__email {
        color: #d81428;
        text-decoration: none;
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
    }
  }
}
.contacts-page-map {
  flex-grow: 1;
  width: 700px;
  border-radius: 6px;
  @include _1300() {
    width: 400px;
  }
  @include _900() {
    display: none;
  }
}
.page-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
