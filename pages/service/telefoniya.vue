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
    <div class="page-content">
      <div class="wrapper">
        <h4 class="service-list-header">
          4 причины выбрать телефонию от Oyster Telecom
        </h4>
        <service-list class="page-content-block" ref="next-page">
          <service-block :background-color="'#ff7a00'" :type="'block'">
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
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block :background-color="'#ff7a00'" :type="'block'">
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
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block :background-color="'#ff7a00'" :type="'block'">
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
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block :background-color="'#ff7a00'" :type="'block'">
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
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
        </service-list>
        <div class="optimal-solution page-content-block">
          <h4>Выберите оптимальное решение для вашего бизнеса</h4>
          <p class="article">
            Не нужно докупать дополнительные модули, дорогие аппаратные
            расширения и разбираться в запутанном лицензировании. Три понятных
            набора функций– одна мощная система бизнес-телефонии.
          </p>
        </div>

        <telephony-table class="page-content-block"></telephony-table>
        <p class="service-message page-content-block">
          <icon :icon-name="'rouble-icon'" class="icon">
            <rouble-icon />
          </icon>
          <span
            >- стоимость услуги не входит в стоимость тарифа и рассчитывается
            отдельно. Свяжитесь с менеджером, чтобы узнать подробности</span
          >
        </p>
        <div class="special-price page-content-block">
          <h5>Как сэкономить?</h5>
          <div class="banner">
            <div class="text">
              <span
                >При подключении 10 линий вы получаете
                <strong>25 Мбит/с интернета совершенно бесплатно</strong></span
              >
            </div>
            <div class="image">
              <div class="image-overlap">
                <img src="~static/images/banner-image.png" />
              </div>
            </div>
          </div>
        </div>
        <question-block
          ref="question"
          :question="'Например:\nКак настроить переадресацию на мобильные для удаленных сотрудников?'"
        >
          <template v-slot:top-text>
            <h4 class="header">Задайте любой вопрос о Телефонии бесплатно</h4>
            <p class="article">
              Мы бесплатно ответим на любые вопросы из области Телефонии для
              бизнеса, Виртуальных АТС, Коллтрекинга, интеграциями с популярными
              и самописными CRM/ERP системами и др. . <br />
              Поможем разобраться и оптимизировать расходы на услуги связи.
            </p>
            <h5 class="header">Наши эксперты</h5>
            <p class="article">
              В Oyster Telecom работают технические специалисты
              с&nbsp;релевантным опытом из&nbsp;различных технических сфер услуг
              для&nbsp;бизнеса.
            </p>
          </template>
          <template v-slot:bottom-text>
            <h6>
              Мы создаем лучшее решение для качественной связи компании с
              клиентами и эффективного взаимодействия между сотрудниками.
            </h6>
            <p class="article">
              Специалисты Oyster Telecom знают, как необходима в офисе
              налаженная и функциональная телефонная связь, а также знают, как
              ее установить! Мы создадим для вас бизнес-инструмент для
              оптимизации, статистики и аналитики. Влезем в код, изменим
              конфигурацию, интегрируем с вашими CRM и ERP, даже если они
              самописные. Подхватим вас на любом этапе модернизации: заменим
              старые АТС на виртуальные, поможем подключить к мини-АТС платы
              SIP-телефонии, подключим по SIPtrunk вашу новую облачную АТС.
            </p>
          </template>
          <template v-slot:button
            ><button class="dialog-button">Заказать</button>
          </template>
        </question-block>
      </div>
    </div>
  </div>
</template>

<script>
import HeroBlock from '~/components/Common/HeroBlock'
import ServiceBlock from '~/components/Common/ServiceBlock'
import ServiceList from '~/components/Common/ServiceList'
import QuestionBlock from '~/components/Common/QuestionBlock'
import TelephonyTable from '~/components/Telephony/TelephonyTable'
import RoubleIcon from '~/components/Icons/RoubleIcon'
import Icon from '~/components/Icons/Icon'
export default {
  components: {
    HeroBlock,
    ServiceBlock,
    ServiceList,
    QuestionBlock,
    TelephonyTable,
    RoubleIcon,
    Icon,
  },
  methods: {
    scrollToServices: function () {
      window.scrollTo({
        top:
          this.$refs['next-page'].$el.getBoundingClientRect().top +
          window.pageYOffset -
          100,
        behavior: 'smooth',
      })
    },
    scrollToOrder: function () {
      window.scrollTo({
        top:
          this.$refs['question'].$refs['order'].getBoundingClientRect().top +
          window.pageYOffset -
          100,
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
.icon {
  width: 1.25em;
  height: 1.25em;
  vertical-align: middle;
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
.optimal-solution {
  p {
    color: #999;
  }
}
.banner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #009ee3;
  color: #fff;
  padding: 1.5em 1.5em 0;
  font-size: 1.5em;
  line-height: 150%;
  border-radius: 4px;
  @include _900() {
    flex-direction: column;
    padding: 1em 1em 0;
    font-size: 1.25em;
    line-height: 125%;
  }
  .text {
    max-width: calc(100% - 175px - 5em);
    padding-bottom: 1.5em;
    @include _900() {
      max-width: 100%;
    }
  }
  .image {
    align-self: flex-end;
    display: flex;
    line-height: 0;
    position: relative;
    .image-overlap {
      display: block;
      position: absolute;
      right: 0;
      bottom: 0;
      text-align: right;
      @include _900() {
        position: relative;
      }
      img {
        @include _600() {
          width: calc(100% - 2em);
        }
      }
    }
  }
}
</style>
