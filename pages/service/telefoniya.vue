<template>
  <div class="container">
    <hero-block :is-anchor="true" @onClick="scrollToServices">
      <template v-slot:header> Телефония </template>
      <template v-slot:description>
        <div class="description">
          <p class="article fw800">
            Виртуальная телефония от Oyster Telecom это:
          </p>
          <p class="article fw400">
            - современный инструмент для ведения бизнеса;<br /><br />
            - оптимальные цены на междугородние и международные звонки;<br /><br />
            - гибкая АТС, которую легко и просто обслуживать;<br /><br />
            - более 65 базовых функций, позволяющих настроить телефонию именно
            под свои потребности.
          </p>
          <p class="article fw800">
            Не думайте об обслуживании Телефонии — занимайтесь бизнесом!
          </p>
        </div>
      </template>
      <template v-slot:form-prefix>
        Проверьте возможность подключения сервисов и услуг:
      </template>
    </hero-block>
    <div class="wrapper">
      <div class="page-content">
        <h4 class="service-list-header">
          4 причины выбрать телефонию от Oyster Telecom
        </h4>
        <service-list ref="next-page">
          <service-block :background-color="'#ff7a00'">
            <template v-slot:header> Сокращение затрат </template>
            <template v-slot:description>
              <p class="article">
                Телефония от Oyster Telecom создана специально для сокращения
                затрат бизнеса.
              </p>
              <ul class="article">
                <li class="article">
                  Минимальная стоимость приобретения по сравнению с аналогичными
                  решениями
                </li>

                <li class="article">Бесплатные звонки между сотрудниками</li>
                <li class="article">Бесплатные межофисные коммуникации</li>
                <li class="article">
                  Оптимизация работы за счет интеграции телефонии в CRM
                </li>
                <li class="article">
                  Повышение эффективности за счет вебклиента и приложений на iOS
                  и Android
                </li>
                <li class="article">Сокращение расходов на связь до 70%</li>
              </ul>
            </template>
          </service-block>
          <service-block :background-color="'#ff7a00'">
            <template v-slot:header> Мобильность </template>
            <template v-slot:description>
              <ul class="article">
                <li class="article">
                  Современные мобильные приложения на IOS и Android
                </li>

                <li class="article">Унифицированный клиент для браузера</li>
                <li class="article">
                  Одновременный вызов в приложение и телефон
                </li>
                <li class="article">
                  Бесплатные интегрированные видеоконференции
                </li>
                <li class="article">Корпоративный чат</li>
                <li class="article">
                  Интеграция чата с клиентом на сайт и Facebook
                </li>
                <li class="article">Удаленная настройка через QR-код</li>
                <li class="article">Полностью защищенная голосовая связь</li>
              </ul>
            </template>
          </service-block>
          <service-block :background-color="'#ff7a00'">
            <template v-slot:header> Простая установка и управление </template>
            <template v-slot:description>
              <ul>
                <li class="article">
                  Установка как в облаке так и на локальном сервере, тонких
                  клиентах, Raspberry Pi
                </li>
                <li class="article">
                  Автоматические подключение и настройка телефонов и VoIP шлюзов
                </li>
                <li class="article">Совместимость с большинством аппаратов</li>
                <li class="article">
                  Возможности удаленной настройки и перезагрузки
                </li>
                <li class="article">Нативный интерфейс управления АТС</li>
                <li class="article">
                  Автоматическая установка обновлений. Легкая масштабируемость
                </li>
                <li class="article">Приложение на IOS и Android</li>
              </ul>
            </template>
          </service-block>
          <service-block :background-color="'#ff7a00'">
            <template v-slot:header> Интеграция с CRM </template>
            <template v-slot:description>
              <p class="article">
                Интеграция в вашу систему CRM поможет менеджеру узнать, кто ему
                звонит, еще до того, как он ответит. Мы без проблем интегрируем
                виртуальную телефонию в вашу CRM. Карточка клиента автоматически
                откроется при входящем вызове - вы увидите, когда он звонил в
                последний раз и с каким сотрудником разговаривал. Вы обслужите
                больше обращений, закроете больше сделок и получите лояльных
                клиентов!
              </p>
              <ul class="article">
                <li class="article">Звоните прямо из CRM</li>
                <li class="article">
                  Входящие звонки с новых номеров автоматически создают новые
                  карточки клиентов
                </li>
                <li class="article">
                  Автоматическое ведение истории вызовов без ручного ввода
                </li>
                <li class="article">
                  Автоматически запрашивайте номер клиента при обращении
                </li>
                <li class="article">
                  Маршрутизируйте обращения на основе номера или запроса
                </li>
                <li class="article">Формируйте и совершайте обзвон клиентов</li>
                <li class="article">
                  Прослушивайте звонки сотрудников для оценки эффективности
                </li>
              </ul>
            </template>
          </service-block>
        </service-list>
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
export default {
  components: {
    HeroBlock,
    ServiceBlock,
    ServiceList,
    QuestionBlock,
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
    url('~/static/images/backgrounds/telefoniya-bg.jpg');
  .description {
    margin-bottom: 1em;
  }
}
.service-list-header {
  margin-bottom: 2em;
  @include _1300() {
    margin-bottom: 1em;
  }
}
.container {
  display: flex;
  flex-direction: column;
}
.fw800 {
  font-weight: 800;
}

.fw400 {
  font-weight: 400;
}
</style>
