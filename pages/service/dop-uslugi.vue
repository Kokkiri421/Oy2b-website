<template>
  <div class="container">
    <hero-block :is-anchor="true" @onClick="scrollToServices">
      <template v-slot:header> Услуги операторам связи </template>
      <template v-slot:description>
        <div class="description">
          <p class="article">
            Мы&nbsp;готовы сдать в&nbsp;аренду каналы связи и&nbsp;тёмное
            волокно.
          </p>
          <p class="article">
            Разветвительные муфты на&nbsp;каждом километре трассы. Ёмкость
            кабелей&nbsp;— до&nbsp;256 волокон.
          </p>
          <p class="article">
            Расчёт проекта сделаем быстро. Поможем решить вопросы
            с&nbsp;надзорными органами.
          </p>
          <p class="article">
            Если будет нужно, пропустим через себя ваш трафик: и&nbsp;интернет,
            и&nbsp;телефонный.
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
          <service-block :background-color="'#777'" @onClick="scrollToOrder">
            <template v-slot:header> Пропуск трафика </template>
            <template v-slot:description>
              <p class="article">
                Легко пропустим через себя трафик&nbsp;— и&nbsp;данные,
                и&nbsp;голос. Подключим по&nbsp;Ethernet с&nbsp;лимитом
                от&nbsp;100&nbsp;Мбит/с до&nbsp;10Гбит/c. Предложим разные
                варианты тарификации: Burst Rate или «по&nbsp;полосе»&nbsp;—
                вы&nbsp;сами решите, какая скорость пропуска трафика нужна.<br />
                Дадим доступ к&nbsp;Looking Glass&nbsp;— вы&nbsp;сможете
                заглянуть за&nbsp;кулисы сетей.<br />
                По&nbsp;телефонному трафику тоже масса опций,
                ну&nbsp;и&nbsp;телефонные номера (812) предоставляем&nbsp;—
                никаких потоков E1, только SIP.
              </p>
            </template>

            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block
            :background-color="'#777'"
            @onClick="scrollToOrder"
            :is-grey="true"
          >
            <template v-slot:header> Аренда IP адресов </template>
            <template v-slot:description>
              <p class="article">
                Предлагаем в аренду IP (IPv4) адреса из собственных сетей. Мы
                имеем статус LIR&nbsp; в RIPE, что позволяет предлагать своим
                клиентам наиболее выгодные условия обслуживания.<br />
                Вы получаете:
              </p>

              <div class="text-container mobile-view">
                <p class="article">
                  Предлагаем в аренду IP (IPv4) адреса из собственных сетей. Мы
                  имеем статус LIR&nbsp; в RIPE, что позволяет предлагать своим
                  клиентам наиболее выгодные условия обслуживания.
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
                  базе RIPE, помощь и консультирование в использовании базы
                  данных RIPE и управления объектами. <br />Объекты назначаются
                  в соответствии с договором, гарантирующим предоставление услуг
                  и возможность использования объектов согласованное время. Имея
                  статус LIR, мы можем выделять в аренду PA-блоки IPv6-адресов
                  из собственного диапазона на ваши данные.
                </p>
              </div>
            </template>

            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block
            :background-color="'#777'"
            @onClick="scrollToOrder"
            :is-grey="true"
          >
            <template v-slot:header> Аренда каналов связи </template>
            <template v-slot:description>
              <p class="article">
                Нужен выделенный канал связи? Готовы поделиться L2 и&nbsp;L3 VPN
                с&nbsp;гарантированной пропускной способностью
                от&nbsp;100&nbsp;Мбит/с до&nbsp;10 Гбит/с. Предложим каналы
                до&nbsp;любых российских и&nbsp;международных точек обмена
                трафиком. Обеспечим резервирование. Гарантируем соответствие
                характеристик канала вашим техническим требованиями. Возьмём
                на&nbsp;себя все хлопоты по&nbsp;обслуживанию и&nbsp;ремонту.
              </p>
            </template>

            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block :background-color="'#777'" @onClick="scrollToOrder">
            <template v-slot:header> Аренда волокон </template>
            <template v-slot:description>
              <p class="article">
                Большой трафик? Переходите на&nbsp;аренду волокна
                на&nbsp;ключевых участках сети.<br />
                Мы&nbsp;всё быстро подключим, обеспечим резервирование каналов,
                мониторинг и&nbsp;защиту от&nbsp;несанкционированного доступа.
                Оперативно устраним повреждения в&nbsp;случае аварий.<br />
                А&nbsp;ещё обеспечим круглосуточную поддержку, консультируя
                по&nbsp;любым вопросам в&nbsp;режиме 24/7/365.
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block
            :background-color="'#777'"
            @onClick="scrollToOrder"
            :is-grey="true"
          >
            <template v-slot:header> Последняя миля </template>
            <template v-slot:description>
              <p class="article">
                Вот такие мы&nbsp;— непростые телекомщики, не&nbsp;мудрствуя
                лукаво все то, чего не&nbsp;хватает, чтоб подключить клиента
                от&nbsp;ближайшего узла, притом не&nbsp;факт, что от&nbsp;своего
                обозвали последней милей. Как правило, это может быть больше чем
                морская миля и&nbsp;даже больше чем шведская миля. Да&nbsp;что
                мне вам рассказывать&nbsp;— вы&nbsp;сами операторы и&nbsp;сами
                все знаете. Бывают сложные ситуации, когда дотянутся
                до&nbsp;клиента сложно, но&nbsp;нужно и&nbsp;тогда хочешь
                не&nbsp;хочешь, а&nbsp;бросаешь клич по&nbsp;рынку:&nbsp;— «Кто
                сделает последнюю милю до&nbsp;клиента?» и&nbsp;тут
                мы&nbsp;впереди планеты всей: сроки не&nbsp;сорвем,
                за&nbsp;качество отвечаем, нейтралитет соблюдаем,
                да&nbsp;и&nbsp;о&nbsp;нашей этичности ходят легенды. Кто
                у&nbsp;нас только не&nbsp;берет последнюю милю:
                и&nbsp;ростелеком, и&nbsp;мтс, и&nbsp;мегафон, и&nbsp;билайн…
                некоторые операторы даже не&nbsp;строят свою сеть, пользуясь
                нашей. Эгоистично конечно, но&nbsp;что делать, если так
                выгоднее? Строим как по&nbsp;канализации, так
                и&nbsp;по&nbsp;воздуху. Будем и&nbsp;обслуживать, если захотите.
                Видели машинки oyster по&nbsp;городу? Это наши. Вы&nbsp;вот
                читаете, а&nbsp;мы&nbsp;в&nbsp;этот момент делаем вашему
                конкуренту последнюю милю. Обращайтесь, сделаем
                и&nbsp;вам&nbsp;— будете удивлены, как с&nbsp;нами все просто
                и&nbsp;легко: без бюрократии и&nbsp;без подводных камней.
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
        </service-list>
        <div class="sla page-content-block">
          <h4>
            Гарантируем юридическую ответственность в&nbsp;случае нарушения
            показателей&nbsp;SLA
          </h4>
          <sla-block class="page-content-block" />
        </div>
        <div class="page-content-block">
          <h4 class="header">Задайте любой вопрос о Телефонии бесплатно</h4>
          <p class="article">
            Мы бесплатно ответим на любые вопросы из области Телефонии для
            бизнеса, Виртуальных АТС, Коллтрекинга, интеграциями с популярными и
            самописными CRM/ERP системами и др. . <br />
            Поможем разобраться и оптимизировать расходы на услуги связи.
          </p>
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
import SlaBlock from '~/components/ItOutsource/SlaBlock'
import CallUsBlock from '~/components/Index/CallUsBlock'
import PriceForm from '~/components/ItOutsource/PriceForm'
export default {
  components: {
    HeroBlock,
    ServiceBlock,
    ServiceList,
    QuestionBlock,
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
