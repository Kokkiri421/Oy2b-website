<template>
  <div class="container">
    <hero-block :is-anchor="true" :user-form="true" @onClick="scrollToServices">
      <template v-slot:header> Профессиональный IT&nbsp;Аутсорсинг</template>
      <template v-slot:description>
        <div class="description">
          <p class="article">
            Эффективное решение задач по обеспечению работы вашего бизнеса.
            <br />
            Гарантия качества обслуживания и юридической ответственности по
            SLA.<br />
            Создание и настройка рабочих мест, офисной и удаленной
            инфраструктуры.<br />
            <span class="dn-600">
              Делегирование работ по обслуживанию компьютеров, сетей и
              программного обеспечения.<br />
              Вся стоимость на оказываемые услуги конечна и не требует
              дополнительных вложений.<br />
              Новейшие технологии и сервисы, без дополнительных затрат - это
              Oyster&nbsp;Telecom.
            </span>
          </p>
        </div>
      </template>
      <template v-slot:user-form>
        <div class="hero-block__user-form">
          <button class="dialog-button" @click="scrollToOrder">
            <div class="shining-button"></div>
            Оставить заявку
          </button>
          <button
            class="dialog-button dialog-button-base"
            @click="scrollToCalculator"
          >
            Калькулятор
          </button>
        </div>
      </template>
    </hero-block>
    <div class="page-content">
      <div class="wrapper">
        <service-list class="page-content-block" ref="next-page">
          <service-block
            class="service-block"
            :background-color="'#e5edec'"
            @onClick="scrollToOrder"
          >
            <template v-slot:header> Обслуживание рабочих мест</template>
            <template v-slot:description>
              <p class="article">
                В&nbsp;рамках обслуживания осуществляется устранение любых
                неисправностей компьютерной техники, а&nbsp;также выполнение
                регулярных профилактических работ.
              </p>
              <ul class="article">
                <li>Диагностика и&nbsp;устранение неисправностей ПК</li>
                <li>Установка и&nbsp;настройка ПО</li>
                <li>Создание новых рабочих мест</li>
                <li>Модернизация оборудования</li>
              </ul>
            </template>
            <template v-slot:button>
              <button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block
            class="service-block"
            :background-color="'#f2f2f2'"
            @onClick="scrollToOrder"
            :is-grey="true"
          >
            <template v-slot:header>Обслуживание серверов</template>
            <template v-slot:description>
              <p class="article">
                Качественное обслуживание серверов&nbsp;— это отсутствие
                финансовых потерь, связанных с&nbsp;неполадками в&nbsp;работе
                вашей информационной системы.
              </p>
              <ul class="article">
                <li>Настройка и Обслуживание Windows & Unix серверов</li>
                <li>Восстановление работоспособности</li>
                <li>Поддержка облачных решений</li>
                <li>Управление средами виртуализации</li>
                <li>Резервное копирование и восстановление данных</li>
              </ul>
            </template>
            <template v-slot:button>
              <button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block
            class="service-block"
            :background-color="'#f2f2f2'"
            @onClick="scrollToOrder"
            :is-grey="true"
          >
            <template v-slot:header>Обслуживание Сетей</template>
            <template v-slot:description>
              <ul class="article">
                <li>Диагностика неполадок в работе сети</li>
                <li>Поддержание сетевой безопасности</li>
                <li>Настройка и обновление оборудования</li>
                <li>Проектирование сетей</li>
                <li>Организация связи между отдельными подразделениями</li>
              </ul>
              <p class="article">
                Доверяя комплексное обслуживание корпоративных сетей техническим
                специалистам Oyster Telecom с совокупным релевантным опытом в
                телекоммуникациях более 21 года, вы можете быть уверены в
                качественном непрерывном сервисе B2B уровня.
              </p>
            </template>
            <template v-slot:button>
              <button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block
            class="service-block"
            :background-color="'#e5edec'"
            @onClick="scrollToOrder"
          >
            <template v-slot:header
              >Мониторинг ИТ&#8209;Инфраструктуры</template
            >
            <template v-slot:description>
              <p class="article">
                Организация и настройка доступа к рабочему месту и телефону
                ваших сотрудников из любой точки мира.
              </p>
              <ul class="article">
                <li>Подключение к единой системе мониторинга Исполнителя</li>
                <li>Мониторинг Инфраструктуры Заказчика</li>
                <li>Уведомление об инцидентах</li>
              </ul>
            </template>
            <template v-slot:button>
              <button class="dialog-button">Заказать</button>
            </template>
          </service-block>
        </service-list>
        <analysis-form class="page-content-block" ref="audit"></analysis-form>
        <div class="sla page-content-block">
          <sla-block class="page-content-block" />
        </div>
        <calculator
          class="page-content-block"
          ref="calculator"
          :computerCount="Number(computerCount)"
          :serverCount="Number(serverCount)"
          :virtualServerCount="Number(virtualServerCount)"
          :netCount="Number(netCount)"
          :phone-count="Number(phoneCount)"
          :cctv="cctv"
          :access-points="accessPoints"
          :officeEquipmentCount="Number(officeEquipmentCount)"
          :changeComputerCount="changeComputerCount"
          :changeServerCount="changeServerCount"
          :changeVirtualServerCount="changeVirtualServerCount"
          :changeNetCount="changeNetCount"
          :changeOfficeEquipmentCount="changeOfficeEquipmentCount"
          :change-phone-count="changePhoneCount"
          :changeCCTV="changeCCTV"
          :changeAccessPoints="changeAccessPoints"
          :basicPrice="Number(basicPrice)"
          :standardPrice="Number(standardPrice)"
          :sysadminPrice="Number(sysadminPrice)"
          :discount="discount"
          :sysadminCount="sysadminCount"
        ></calculator>
      </div>

      <div class="wrapper">
        <!--        <ratio-table class="page-content-block"></ratio-table>-->
        <!--        <p class="service-message page-content-block">-->
        <!--          <icon :icon-name="'rouble-icon'" class="icon">-->
        <!--            <rouble-icon />-->
        <!--          </icon>-->
        <!--          <span>-->
        <!--            - стоимость услуги не входит в стоимость тарифа и рассчитывается-->
        <!--            отдельно. Свяжитесь с менеджером, чтобы узнать подробности-->
        <!--          </span>-->
        <!--        </p>-->
        <div class="advantages page-content-block">
          <h4>Как сэкономить:</h4>
          <advantage-list>
            <template v-slot:advantage-list>
              <advantage-block :style="{ '--color': '#009ee3' }">
                <template v-slot:header>До 15%</template>
                <template v-slot:description>
                  <p class="article"><strong>за доверие</strong></p>
                  <p class="article grey-text">
                    При оплате работ за 6 или 12 месяцев мы предоставим вам
                    скидку 10 или 15 % соответственно
                  </p>
                </template>
              </advantage-block>
              <advantage-block :style="{ '--color': '#009ee3' }">
                <template v-slot:header>До 50%</template>
                <template v-slot:description>
                  <p class="article"><strong>за решительность</strong></p>
                  <p class="article grey-text">
                    Решиться на замену обслуживающей компании непросто, поэтому
                    готовы предоставить скидку на первый месяц при переходе к
                    нам от другой фирмы
                  </p>
                </template>
              </advantage-block>
              <advantage-block :style="{ '--color': '#009ee3' }">
                <template v-slot:header>20 %</template>
                <template v-slot:description>
                  <p class="article"><strong>за самостоятельность</strong></p>
                  <p class="article grey-text">
                    Если у вас в штате есть технически подкованный специалист,
                    который готов помогать нам работать удаленно, то мы убираем
                    из договора бесплатные выезды, а абонплату снизим на 20%
                  </p>
                </template>
              </advantage-block>
            </template>
          </advantage-list>
        </div>
        <div class="page-content-block">
          <h4 class="bottom-info__left-block">
            Вы получаете все в&nbsp;одном месте от&nbsp;постановки бизнес задачи
            до&nbsp;бесперебойной работы всего вашего ИТ&nbsp;оборудования
          </h4>
        </div>

        <price-form class="page-content-block"></price-form>
        <div class="bottom-info page-content-block">
          <call-us-block />
        </div>
        <p class="article solution-message">
          Сегодняшний рынок характеризуется высоким уровнем конкуренции, и успех
          компании полностью зависит от способности предложить уникальные
          продукты. В этой гонке выигрывают компании, которые вкладывают в свою
          основную деятельность максимум ресурсов.
        </p>
        <p class="article solution-message">
          Аутсорсинг ИТ дает вашему бизнесу возможность получить доступ к
          высококвалифицированным кадрам в сфере информационных технологий без
          серьезных затрат. Если перечисленные выше преимущества для вас звучат
          достаточно убедительно – возможно, именно сотрудничество с Oyster
          Telecom приведет вашу компанию к повышению прибыльности.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import HeroBlock from '~/components/Common/HeroBlock'
import ServiceBlock from '~/components/Common/ServiceBlock'
import ServiceList from '~/components/Common/ServiceList'
import QuestionBlock from '~/components/Common/QuestionBlock'
import Calculator from '~/components/ItOutsource/Calculator'
import RatioForm from '~/components/ItOutsource/RatioForm'
import AuditForm from '~/components/ItOutsource/AuditForm'
import RatioTable from '~/components/ItOutsource/RatioTable'
import PriceForm from '~/components/ItOutsource/PriceForm'
import Icon from '~/components/Icons/Icon'
import RoubleIcon from '~/components/Icons/RoubleIcon'
import AdvantageBlock from '~/components/Common/AdvantageBlock'
import AdvantageList from '~/components/Common/AdvantageList'
import AnalysisForm from '~/components/Common/AnalysisForm'
import SlaBlock from '~/components/ItOutsource/SlaBlock'
import CallUsBlock from '~/components/Index/CallUsBlock'

export default {
  head() {
    return {
      title: 'IT Аутсорсинг',
    }
  },
  data() {
    return {
      computerCount: 10,
      serverCount: 1,
      virtualServerCount: 2,
      netCount: 1,
      officeEquipmentCount: 5,
      phoneCount: 10,
      discount: 0,
      sysadminCount: 0,
      cctv: false,
      accessPoints: false,
    }
  },
  components: {
    SlaBlock,
    HeroBlock,
    ServiceBlock,
    ServiceList,
    QuestionBlock,
    Calculator,
    RatioForm,
    AuditForm,
    RatioTable,
    Icon,
    RoubleIcon,
    AdvantageBlock,
    AdvantageList,
    PriceForm,
    AnalysisForm,
    CallUsBlock,
  },
  methods: {
    changeCount(e, max) {
      e.target.value = e.target.value.replace(/[^0-9]/g, '')
      if (e.target.value > max) {
        e.target.value = max
      } else if (e.target.value < 0) {
        e.target.value = 0
      }
      return e.target.value
    },
    changeComputerCount: function (e, max) {
      this.computerCount = this.changeCount(e, max)
    },
    changeServerCount: function (e, max) {
      this.serverCount = this.changeCount(e, max)
    },
    changeVirtualServerCount: function (e, max) {
      this.virtualServerCount = this.changeCount(e, max)
    },
    changeNetCount: function (e, max) {
      this.netCount = this.changeCount(e, max)
    },
    changeOfficeEquipmentCount: function (e, max) {
      this.officeEquipmentCount = this.changeCount(e, max)
    },
    changePhoneCount: function (e, max) {
      this.phoneCount = this.changeCount(e, max)
    },
    changeCCTV: function (e) {
      this.cctv = !this.cctv
    },
    changeAccessPoints: function (e) {
      this.accessPoints = !this.accessPoints
    },
    scrollToServices: function () {
      window.scrollTo({
        top:
          this.$refs['next-page'].$el.getBoundingClientRect().top +
          window.pageYOffset -
          100,
        behavior: 'smooth',
      })
    },
    scrollToCalculator: function () {
      window.scrollTo({
        top:
          this.$refs['calculator'].$el.getBoundingClientRect().top +
          window.pageYOffset -
          100,
        behavior: 'smooth',
      })
    },
    scrollToOrder: function () {
      window.scrollTo({
        top:
          this.$refs['audit'].$el.getBoundingClientRect().top +
          window.pageYOffset -
          100,
        behavior: 'smooth',
      })
    },
  },
  computed: {
    basicPrice() {
      let price =
        this.computerCount * 900 +
        this.serverCount * 2600 +
        this.virtualServerCount * 1600 +
        this.netCount * 680 +
        this.accessPoints * 260
      if (this.computerCount >= 60) {
        this.discount = 30
      } else if (this.computerCount >= 40 || this.serverCount >= 4) {
        this.discount = 25
      } else if (this.computerCount >= 25) {
        this.discount = 20
      } else if (this.computerCount >= 15 || this.serverCount >= 2) {
        this.discount = 15
      } else {
        this.discount = 0
      }
      price = price - price * (this.discount / 100)
      if (price === 0) return price
      return Math.round(price > 5000 ? price : 5000)
    },
    standardPrice() {
      let price =
        this.computerCount * 900 +
        this.serverCount * 2600 +
        this.virtualServerCount * 1600 +
        this.netCount * 680 +
        this.accessPoints * 260

      if (price === 0) return price
      price =
        price - price * (this.discount / 100) > 5000
          ? price - price * (this.discount / 100)
          : 5000
      return Math.round(price * 0.35 > 5000 ? price * 1.35 : price + 5000)
    },
    sysadminPrice() {
      if (this.computerCount >= 50 && this.serverCount >= 4) {
        this.sysadminCount = 2
        return 59872 * 2
      } else {
        this.sysadminCount = 1
        return 82316
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
@import '~/assets/colors';

.hero-block {
  &__user-form {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    @include _600() {
      flex-direction: column;
    }
    .blue-dialog-button {
      background-color: #009ee3;

      &:hover {
        background-color: #17b8ff;
      }
    }
    .dialog-button {
      width: fit-content;
    }
    .dialog-button:nth-child(1) {
      margin-right: 1em;
      @include _600() {
        margin-bottom: 1em;
      }
    }
  }
}

.page-content {
  .sla {
  }
  .icon {
    width: 1.25em;
    height: 1.25em;
    vertical-align: middle;
  }

  .solution-message {
    font-size: 1em;
  }
  .bottom-info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    @include _1300() {
      flex-direction: column;
    }
    &__left-block {
    }
    &__right-block {
      padding: 1em;
      border-radius: 6px;
      background-color: $form-bg-color;
    }
  }
}

.container {
  display: flex;
  flex-direction: column;
}
</style>
