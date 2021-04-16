<template>
  <div class="container">
    <hero-block :is-anchor="true" :user-form="true" @onClick="scrollToServices">
      <template v-slot:header> Профессиональный IT&nbsp;Аутсорсинг</template>
      <template v-slot:description>
        <div class="description">
          <p class="article">
            Эффективное решение задач, связанных с техническим обеспечением
            работы вашего бизнеса.
          </p>
          <p class="article">
            Создание и настройка рабочих мест и переадресация корпоративных
            звонков на сотовые и домашние номера.
          </p>
          <p class="article">
            Полное или частичное делегирование работ по обслуживанию
            компьютерной техники, сетей и программного обеспечения.
          </p>
          <p class="article">
            Используйте новейшие технологии и сервисы, без дополнительных
            вложений — развивайтесь вместе с Oyster Telecom!
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
          <service-block :background-color="'#08b4ff'" @onClick="scrollToOrder">
            <template v-slot:header> Обслуживание компьютеров</template>
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
            <template v-slot:button>
              <button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block :background-color="'#08b4ff'" @onClick="scrollToOrder">
            <template v-slot:header>Обслуживание серверов</template>
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
            <template v-slot:button>
              <button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block :background-color="'#08b4ff'" @onClick="scrollToOrder">
            <template v-slot:header>Обслуживание оргтехники</template>
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
            <template v-slot:button>
              <button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block :background-color="'#08b4ff'" @onClick="scrollToOrder">
            <template v-slot:header>Удаленное рабочее место</template>
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
            <template v-slot:button>
              <button class="dialog-button">Заказать</button>
            </template>
          </service-block>
        </service-list>
        <audit-form class="page-content-block" ref="audit"></audit-form>
        <div class="sla page-content-block">
          <h4>Стандарты обслуживания SLA</h4>
          <p class="grey-text">
            Всем вашим обращениям присваивается категория, в зависимости от
            которой заявке назначается срок выполнения, согласованный с вами. Мы
            гарантируем устранение неисправности за 2 часа, если у заявки
            соответствующая категория.
          </p>
        </div>
        <calculator
          class="page-content-block"
          ref="calculator"
          :computerCount="Number(computerCount)"
          :serverCount="Number(serverCount)"
          :netCount="Number(netCount)"
          :phone-count="Number(phoneCount)"
          :cctv="cctv"
          :officeEquipmentCount="Number(officeEquipmentCount)"
          :changeComputerCount="changeComputerCount"
          :changeServerCount="changeServerCount"
          :changeNetCount="changeNetCount"
          :changeOfficeEquipmentCount="changeOfficeEquipmentCount"
          :change-phone-count="changePhoneCount"
          :changeCCTV="changeCCTV"
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
          <h5>Как сэкономить:</h5>
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
        <solution-form></solution-form>
        <p class="solution-message grey-text">
          Сегодняшний рынок характеризуется высоким уровнем конкуренции, и успех
          компании полностью зависит от способности предложить уникальные
          продукты. В этой гонке выигрывают компании, которые вкладывают в свою
          основную деятельность максимум ресурсов. Аутсорсинг ИТ дает вашему
          бизнесу возможность получить доступ к высококвалифицированным кадрам в
          сфере информационных технологий без серьезных затрат. Если
          перечисленные выше преимущества для вас звучат достаточно убедительно
          – возможно, именно сотрудничество с Oyster Telecom приведет вашу
          компанию к повышению прибыльности
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
import SolutionForm from '~/components/ItOutsource/SolutionForm'
import Icon from '~/components/Icons/Icon'
import RoubleIcon from '~/components/Icons/RoubleIcon'
import AdvantageBlock from '~/components/Common/AdvantageBlock'
import AdvantageList from '~/components/Common/AdvantageList'

export default {
  data() {
    return {
      computerCount: 10,
      serverCount: 1,
      netCount: 1,
      officeEquipmentCount: 5,
      phoneCount: 10,
      discount: 0,
      sysadminCount: 0,
      cctv: false,
    }
  },
  components: {
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
    SolutionForm,
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
      this.cctv = e.target.checked
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
        this.computerCount * 680 + this.serverCount * 2600 + this.netCount * 680
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
      return Math.round(price > 10000 ? price : 10000)
    },
    standardPrice() {
      let price =
        this.computerCount * 680 + this.serverCount * 2600 + this.netCount * 680

      if (price === 0) return price
      price =
        price - price * (this.discount / 100) > 10000
          ? price - price * (this.discount / 100)
          : 10000
      return Math.round(price * 0.35 > 5000 ? price * 1.35 : price + 5000)
    },
    sysadminPrice() {
      if (this.computerCount >= 50 && this.serverCount >= 4) {
        this.sysadminCount = 2
        return 59872 * 2
      } else if (this.computerCount >= 25 && this.serverCount >= 2) {
        this.sysadminCount = 1
        return 82316
      } else {
        this.sysadminCount = 0
        return 0
      }
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
    margin-top: 1em;

    .blue-dialog-button {
      background-color: #009ee3;

      &:hover {
        background-color: #17b8ff;
      }
    }

    .dialog-button {
      margin-bottom: 1em;
    }

    .dialog-button:nth-child(1) {
      margin-right: 1em;
    }
  }
}

.page-content {
  .sla {
  }

  .grey-text {
    line-height: 1.62em;
    color: #999;
    font-size: 0.9em;
  }

  .icon {
    width: 1.25em;
    height: 1.25em;
    vertical-align: middle;
  }

  .solution-message {
    font-size: 1em;
  }
}

.container {
  display: flex;
  flex-direction: column;
}
</style>
