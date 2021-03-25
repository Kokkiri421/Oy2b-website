<template>
  <div class="wrapper">
    <div class="vacancies">
      <div class="page-content">
        <h1>Вакансии</h1>
        <div class="page-content-block vacancies-info">
          <div class="vacancies-info__text">
            <p class="article">
              Мы команда единомышленников, братство молодых и активных людей,
              добивающихся поставленных целей и предлагающих своим клиентам
              первоклассный современный сервис.
            </p>
            <p class="article">
              Работа в Oyster Telecom - это не только возможность стать
              специалистом в сфере телекоммуникаций, но и реальный шанс
              осуществить амбициозные и авангардные IT проекты.
            </p>
            <p class="article">
              Сделай правильный выбор - стань частью Oyster Telecom!
            </p>
            <div class="vacancy">
              <h5 class="header" @click="changeExpanded(0)">
                Ведущий инженер отдела подключений
              </h5>
              <div
                class="vacancy__info page-content-block"
                :class="{ show: expanded[0] }"
              >
                <h5 class="header">Обязанности:</h5>
                <ul class="article">
                  <li>
                    Обработка внутренних заявок по реализации схем подключений
                    типовых услуг связи и проектных задач;
                  </li>
                  <li>
                    Выполнение работ по подключению услуг связи: интернет,
                    телефония, WiFi, видеонаблюдение;
                  </li>
                  <li>Обнаружение и устранение неполадок в линейной части;</li>
                  <li>Проведение работ по сервисным заявкам</li>
                </ul>
                <h5 class="header">Требования:</h5>
                <ul class="article">
                  <li>
                    Ответственность, коммуникабельность, пунктуальность,
                    обучаемость;
                  </li>
                  <li>Понимание технологий связи;</li>
                  <li>Понимание процесса подключения услуги связи;</li>
                  <li>Готовность к разъездной работе</li>
                </ul>
                <h5 class="header">Будут вашими преимуществами</h5>
                <ul class="article">
                  <li>Опыт работы в сферах ИТ и телекоммуникаций;</li>
                  <li>Опыт настройки сетевого оборудования</li>
                </ul>
                <h5 class="header">Условия:</h5>
                <ul class="article">
                  <li>Оформление по ТК РФ;</li>
                  <li>Режим работы: ПН-ПТ с 10:00 до 19:00;</li>
                  <li>Социальный пакет;</li>
                  <li>Обучение, тренинги.</li>
                  <li>
                    Премирование по качественным показателям и за участие в
                    проектах
                  </li>
                </ul>
                <h5 class="header">Преимущества работы в нашей компании:</h5>
                <ul class="article">
                  <li>
                    Работа в молодом, активном, профессиональном коллективе;
                  </li>
                  <li>Возможности карьерного и профессионального развития;</li>
                  <li>
                    Интересные проекты, возможность работать с новыми продуктами
                    и технологиями в сфере телекоммуникаций;
                  </li>
                  <li>
                    Компания обладает техническими возможностями выполнять
                    большие объемы работ и реализовывать коммерческие проекты
                    высокой сложности (высокий профессионализм инженерного
                    состава, собственная волоконно-оптическая сеть с мощной
                    разветвленной структурой, широкая линейка продуктов,
                    практика вывода на рынок инновационных продуктов и решений).
                  </li>
                </ul>
                <button class="dialog-button vacancy__apply">
                  Откликнуться на резюме
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expanded: Array(6).fill(false),
    }
  },
  methods: {
    changeExpanded: function (index) {
      console.log(this.expanded)
      this.$set(this.expanded, index, !this.expanded[index])
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/media_mixin';
header {
  background: rgba(0, 0, 0, 0.8) !important;
}
.vacancies {
  padding: 10em 0;
  @include _600() {
    padding: 4em 0 1em;
  }
  .vacancies-info {
    &__text {
      max-width: 800px;
      @include _950() {
        max-width: none;
      }
      .article {
        line-height: 1.62em;
        color: #999;
        @include _700() {
          font-size: 0.9em;
        }
      }
      .header {
        margin-bottom: 1em;
      }
    }
    .vacancy {
      &__info {
        max-height: 0;
        height: 0;
        overflow: hidden;
        opacity: 0;
        transition: height 0.3s ease-out, opacity 0.3s ease-out;
        li {
          &::marker {
            font-size: 0.8em;
          }
        }
      }
      .show {
        max-height: fit-content;
        height: fit-content;
        opacity: 1;
        transition: height 0.3s ease-out, opacity 0.3s ease-out;
      }
      &__apply {
        margin-top: 1em;
      }
    }
  }
}
</style>
