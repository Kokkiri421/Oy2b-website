<template>
  <div class="container">
    <hero-block :is-anchor="true" :user-form="true" @onClick="scrollToServices">
      <template v-slot:header> Профессиональный IT&nbsp;Аутсорсинг </template>
      <template v-slot:description>
        <div class="description">
          <p class="article">
            Быстрое и эффективное решение задач, связанных с техническим
            обеспечением работы вашего бизнеса.
          </p>
          <p class="article">
            Оперативное создание и настройка удаленных рабочих мест и
            переадресация корпоративных звонков на сотовые и домашние номера.
          </p>
          <p class="article">
            Полное или частичное делегирование работ по обслуживанию
            компьютерной техники, сетей и программного обеспечения.
          </p>
          <p class="article">
            Используйте новейшие технологии и сервисы, без дополнительных
            финансовых вложений — развивайтесь вместе с Oyster Telecom!
          </p>
        </div>
      </template>
      <template v-slot:user-form>
        <div class="hero-block__user-form">
          <button class="dialog-button">Оставить заявку</button>
          <button class="dialog-button blue-dialog-button">Калькулятор</button>
        </div>
      </template>
    </hero-block>
    <div class="wrapper">
      <div class="page-content">
        <service-list ref="next-page">
          <service-block :background-color="'#08b4ff'" @onClick="scrollToOrder">
            <template v-slot:header> Обслуживание компьютеров </template>
            <template v-slot:description>
              <p class="article">
                В&nbsp;рамках обслуживания осуществляется устранение любых
                неисправностей компьютерной техники, а&nbsp;также выполнение
                регулярных профилактических работ.
              </p>
              <ul class="article">
                <li>Диагностика и&nbsp;устранение неисправностей</li>
                <li>Установка и&nbsp;настройка ПО</li>
                <li>Создание новых рабочих мест</li>
                <li>Модернизация и&nbsp;замена оборудования</li>
              </ul>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block :background-color="'#08b4ff'" @onClick="scrollToOrder">
            <template v-slot:header>Обслуживание серверов </template>
            <template v-slot:description>
              <p class="article">
                Качественное обслуживание серверов&nbsp;— это отсутствие
                финансовых потерь, связанных с&nbsp;неполадками в&nbsp;работе
                вашей информационной системы.
              </p>
              <ul class="article">
                <li>Обслуживание аппаратной части серверов</li>
                <li>Настройка программной части и&nbsp;мониторинг</li>
                <li>Актуализация ПО</li>
                <li>Модернизация и&nbsp;замена оборудования</li>
              </ul>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block :background-color="'#08b4ff'" @onClick="scrollToOrder">
            <template v-slot:header>Обслуживание оргтехники </template>
            <template v-slot:description>
              <p class="article">
                Оргтехника должна просто работать и&nbsp;не&nbsp;«делать нервы».
              </p>
              <ul class="article">
                <li>Диагностируем и&nbsp;устраняем неисправности</li>
                <li>Выполняем профилактическое обслуживание</li>
                <li>Вводим в&nbsp;эксплуатацию новое оборудование</li>
                <li>Сопровождаем в&nbsp;сервис-центрах</li>
                <li>Поставляем расходные материалы</li>
              </ul>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block :background-color="'#08b4ff'" @onClick="scrollToOrder">
            <template v-slot:header>Удаленное рабочее место </template>
            <template v-slot:description>
              <p class="article">
                Организация и настройка доступа к рабочему месту и телефону
                ваших сотрудников из любой точки мира.
              </p>
              <ul class="article">
                <li>Оперативная настройка новых рабочих мест</li>
                <li>Переадресация на сотовые и домашние телефонные номера</li>
                <li>Техническая поддержка 24/7</li>
              </ul>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
        </service-list>
        <calculator></calculator>
      </div>
      <question-block
        ref="question"
        :question="'Например:\nКак подключить POS терминалы c помощью разделения Wi-Fi на 2 SSID?'"
      >
        <template v-slot:top-text>
          <h4 class="header">
            Задайте любой вопрос о подключении услуг связи бесплатно
          </h4>
          <p class="article">
            Мы&nbsp;бесплатно ответим на&nbsp;любые вопросы из&nbsp;области
            корпоративных телекоммуникационных услуг.<br />
            Поможем разобраться и&nbsp;оптимизировать расходы на&nbsp;услуги
            связи.
          </p>
          <h5 class="header">Наши эксперты</h5>
          <p class="article">
            В Oyster Telecom работают технические специалисты с&nbsp;релевантным
            опытом из&nbsp;различных технических сфер услуг для&nbsp;бизнеса.
          </p>
        </template>
        <template v-slot:bottom-text>
          <p class="article">
            Наши специалисты разработают для вас индивидуальный тарифный план,
            в&nbsp;соответствии с &nbsp;особенностями вашего бизнеса,
            количеством и&nbsp;оснащенностью рабочих мест, степенью нагрузки
            на&nbsp;интернет канал.
          </p>
          <p class="article">
            <br />Конкретное решение зависит от ваших потребностей
          </p>
          <h5 class="header">
            При оплате услуг связи за&nbsp;6&nbsp;месяцев
            -&nbsp;до&nbsp;половины скорости в&nbsp;подарок!
          </h5>
        </template>
      </question-block>
    </div>
  </div>
</template>

<script>
import HeroBlock from '~/components/Common/HeroBlock'
import ServiceBlock from '~/components/Common/ServiceBlock'
import ServiceList from '~/components/Common/ServiceList'
import QuestionBlock from '~/components/Common/QuestionBlock'
import Calculator from '~/components/ItOutsource/Calculator'
export default {
  components: {
    HeroBlock,
    ServiceBlock,
    ServiceList,
    QuestionBlock,
    Calculator,
  },
  methods: {
    scrollToServices: function () {
      this.$refs['next-page'].$el.scrollIntoView({ behavior: 'smooth' })
    },
    scrollToOrder: function () {
      this.$refs['question'].$refs['order'].scrollIntoView({
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.hero-block {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('~/static/images/backgrounds/service-it-out-bg.jpg');
  .description {
    margin-bottom: 1em;
  }
  &__user-form {
    margin-top: 2em;

    .blue-dialog-button {
      background-color: #009ee3;
      &:hover {
        background-color: #17b8ff;
      }
    }
    .dialog-button:nth-child(1) {
      margin-right: 1em;
    }
  }
}
.container {
  display: flex;
  flex-direction: column;
}
</style>
