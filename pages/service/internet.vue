<template>
  <div class="container">
    <hero-block :is-anchor="true" @onClick="scrollToServices">
      <template v-slot:header>Интернет до&nbsp;10Гбит/с</template>
      <template v-slot:description>
        <div class="description">
          <p class="article">
            Подключение за 3 дня по оптоволокну.<br />
            Отказоустойчивость сети 99,8%, техподдержка 24/7.<br />
            Резервирование каналов связи на каждом километре трассы.<br />
            Статистические и динамические IP-адреса IPv4 и IPv6 в аренду.<br />
            Межоператорские стыки с крупнейшими международными операторами.<br />
            Конкретное решение зависит от ваших бизнес задач.
          </p>
        </div>
      </template>
      <template v-slot:form-prefix>
        Проверьте возможность подключения сервисов и услуг:
      </template>
    </hero-block>
    <div class="wrapper">
      <div class="page-content">
        <service-list class="page-content-block" ref="next-page">
          <service-block :background-color="'#ea172c'" @onClick="scrollToOrder">
            <template v-slot:header> Доступ в интернет </template>
            <template v-slot:description>
              <p class="article">
                Каждый бизнес уникален. У всех свои цели и преимущества. Но для
                их достижения нужны инструменты и ресурсы. <br />
                Каналы связи уровня B2B - это надежный партнер вашего
                бизнеса.<br />
                Скорость подключения, качество сервиса, резервирование и саппорт
                у нас на высоте.
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block
            :background-color="'#ea172c'"
            @onClick="scrollToOrder"
            :is-grey="true"
          >
            <template v-slot:header> Канал «точка-точка» </template>
            <template v-slot:description>
              <p class="article">
                Нужно соединить два офиса? Офис и склад? Сеть банкоматов или pos
                терминалов? Или просто 2 адреса? Канал точка-точка это то, что
                вам нужно. <br />
                Среду передачи можем сделать Ethernet с оптическим или медным
                окончанием, E1 по G.703 или вообще выдадим темное волокно. Как
                пожелаете.
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block :background-color="'#ea172c'" @onClick="scrollToOrder">
            <template v-slot:header> Объединение офисов </template>
            <template v-slot:description>
              <p class="article">
                Защищенная корпоративная сеть для объединения офисов необходима
                компаниям, которым важны бесперебойная связь между сотрудниками,
                высокая надежность и скорость каналов передачи данных.<br />
                У нас есть 1400 км оптики по городу, собственный дата-центр и 20
                лет опыта в телекоммуникациях. Именно поэтому нам доверяют
                создание закрытых, защищенных от несанкционированного доступа
                извне сеть.<br />
                В рамках услуги разрабатывается индивидуальная конфигурация
                сети, технологии решения и прописываются правила доступа.
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block
            :background-color="'#ea172c'"
            @onClick="scrollToOrder"
            :is-grey="true"
          >
            <template v-slot:header> Аренда IP адресов </template>
            <template v-slot:description>
              <p class="article">
                Предлагаем в аренду IP (IPv4) адреса из собственных сетей. Мы
                имеем статус LIR в RIPE, что позволяет предлагать своим клиентам
                наиболее выгодные условия обслуживания.<br />
                Вы получаете:
              </p>
              <ul class="article">
                <li>IPv4-адреса из собственных PA-блоков</li>
                <li>
                  Каждый IP перед активацией проверяется на присутствие в
                  «черных списках»
                </li>
                <li>
                  Полная консультационная и техническая поддержка специалистов
                  Oyster Telecom
                </li>
                <li>
                  Бухгалтерские документы в соответствии с требованиями
                  законодательства РФ (счет, акт, счет-фактура).
                </li>
                <li>В запросах whois отображаются ваши данные</li>
                <li>При необходимости предоставляется Автономная система</li>
              </ul>
              <p class="article">
                В стоимость входит поддержка и сопровождение данных объектов в
                базе RIPE, помощь и консультирование в использовании базы данных
                RIPE и управления объектами. Объекты назначаются в соответствии
                с договором, гарантирующим предоставление услуг и возможность
                использования объектов согласованное время.<br />
                Имея статус LIR, мы можем выделять в аренду PA-блоки
                IPv6-адресов из собственного диапазона на ваши данные.
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block :background-color="'#ea172c'" @onClick="scrollToOrder">
            <template v-slot:header> Дополнительно </template>
            <template v-slot:description>
              <ul class="article">
                <li>Резервные каналы</li>
                <li>Фильтарция трафика</li>
                <li>Защита от DDoS атак</li>
                <li>IT Аутсорсинг</li>
                <li>Удаленные рабочие места</li>
              </ul>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
        </service-list>
        <special-price class="page-content-block" :background-color="'#ea172c'"
          ><template v-slot:text
            ><span
              >При оплате услуг связи за&nbsp;6&nbsp;месяцев -&nbsp;
              <strong>до&nbsp;половины скорости в&nbsp;подарок!</strong></span
            ></template
          ></special-price
        >
        <div class="sla page-content-block">
          <h4>
            Гарантируем юридическую ответственность в&nbsp;случае нарушения
            показателей&nbsp;SLA
          </h4>
          <sla-block class="page-content-block" />
        </div>
        <div class="page-content-block">
          <h4 class="header">Наши эксперты</h4>
          <p class="article">
            В Oyster Telecom работают технические специалисты с&nbsp;релевантным
            опытом из&nbsp;различных технических сфер услуг для&nbsp;бизнеса.
          </p>
        </div>
        <call-us-block class="page-content-block" />
        <price-form class="page-content-block"></price-form>
        <div class="bottom-text">
          <p class="article">
            Наши специалисты разработают для вас индивидуальный тарифный план,
            в&nbsp;соответствии с &nbsp;особенностями вашего бизнеса,
            количеством и&nbsp;оснащенностью рабочих мест, степенью нагрузки
            на&nbsp;интернет канал.
          </p>
          <p class="article">
            <br />Конкретное решение зависит от ваших потребностей
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroBlock from '~/components/Common/HeroBlock'
import ServiceBlock from '~/components/Common/ServiceBlock'
import ServiceList from '~/components/Common/ServiceList'
import QuestionBlock from '~/components/Common/QuestionBlock'
import SpecialPrice from '~/components/Common/SpecialPrice'
import SlaBlock from '~/components/ItOutsource/SlaBlock'
import CallUsBlock from '~/components/Index/CallUsBlock'
import PriceForm from '~/components/ItOutsource/PriceForm'
export default {
  components: {
    HeroBlock,
    ServiceBlock,
    ServiceList,
    QuestionBlock,
    SpecialPrice,
    SlaBlock,
    CallUsBlock,
    PriceForm,
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

.container {
  display: flex;
  flex-direction: column;
}
</style>
