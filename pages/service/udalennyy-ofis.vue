<template>
  <div class="container">
    <hero-block :is-anchor="true" :user-form="true" @onClick="scrollToServices">
      <template v-slot:header>Виртуализация Бизнеса</template>
      <template v-slot:description>
        <div class="description">
          <p class="article">
            Обеспечим безопасность данных. <br />
            Настроим ИТ-инфраструктуру так, чтобы вы работали еще
            эффективнее.<br />
            Обеспечим быстрый комплексный переход вашего бизнеса «в облако».<br />
            <span class="dn-600">
              Быть готовым к любой реальности и подготовить своих
              клиентов/партнеров - первоочередная задача Oyster&nbsp;Telecom.
            </span>
          </p>
        </div>
      </template>
      <!--      <template v-slot:form-prefix>-->
      <!--        Проверьте возможность подключения сервисов и услуг:-->
      <!--      </template>-->
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
    <div class="wrapper">
      <div class="page-content">
        <advantage-list class="page-content-block">
          <template v-slot:advantage-list>
            <advantage-block :style="{ '--color': '#ff7d05' }">
              <template v-slot:header>Удобство</template>
              <template v-slot:description
                >Быстрое подключение к привычным системам и программам.<br />
                Корпоративная телефония не выходя из дома.</template
              >
            </advantage-block>
            <advantage-block :style="{ '--color': '#ff7d05' }">
              <template v-slot:header>Надежность</template>
              <template v-slot:description
                >Доступ к локальной сети компании получают только ваши
                сотрудники.<br />
                Все каналы защищены от взлома и повреждений.</template
              >
            </advantage-block>
            <advantage-block :style="{ '--color': '#ff7d05' }">
              <template v-slot:header>Сервис</template>
              <template v-slot:description
                >Дистанционное обслуживание всей ИТ инфраструктуры.<br />
                Личный менеджер и техническая поддержка 24/7.</template
              >
            </advantage-block>
          </template>
        </advantage-list>
        <service-list class="page-content-block" ref="next-page">
          <service-block :background-color="'#ff7d05'" @onClick="scrollToOrder">
            <template v-slot:header> Экспресс аудит </template>
            <template v-slot:description>
              <p class="article">
                Наша задача – оценить, подобрать и внедрить инструменты,
                наиболее подходящие для Вашей компании, которые обеспечат
                беспроблемную удаленную работу сотрудников. Мы собираем ваши
                требования и пожелания. В сжатые сроки проводим экспертный
                анализ Вашей ИТ-инфраструктуры. Быстро подбираем и согласуем
                подходящий инструментарий для решения Вашей задачи.
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block
            :background-color="'#ff7d05'"
            @onClick="scrollToOrder"
            :is-grey="true"
          >
            <template v-slot:header> Виртуальные рабочие места VDI </template>
            <template v-slot:description>
              <p class="article">
                Готовые к работе стандартизованные виртуальные рабочие места с
                операционной системой, установленными приложениями и своим
                набором документов, недоступных для других пользователей. <br />
                Данные хранятся не на пользовательских устройствах, а в
                корпоративной инфраструктуре и дата-центре Oyster Telecom. Если
                сотрудник потеряет ноутбук или планшет, нашедший не получит
                доступ к корпоративным данным, так как на устройстве нет не
                только самих данных, но и данных для входа на VDI. <br />
                Для быстрого старта мы поможем установить на ваши рабочие места
                все необходимое ПО.
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block :background-color="'#ff7d05'" @onClick="scrollToOrder">
            <template v-slot:header> Ofﬁce 365 </template>
            <template v-slot:description>
              <p class="article">
                Интегрированный набор служб и приложений, который помогает
                эффективно организовать дистанционную работу в компании. В
                состав Ofﬁce 365 входят такие приложения, как Word, Excel,
                PowerPoint и другие. Все службы Ofﬁce предоставляются с
                гарантией доступности в течение 99,9 % времени, подкрепленной
                финансовыми обязательствами. Вы получаете готовый набор
                инструментов для удаленной работы ваших сотрудников в едином
                информационном пространстве.
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block
            :background-color="'#ff7d05'"
            @onClick="scrollToOrder"
            :is-grey="true"
          >
            <template v-slot:header> Интернет </template>
            <template v-slot:description>
              <p class="article">
                Для обеспечения устойчивого доступа сотрудников к удаленным
                рабочим столам необходимо иметь надежный канал интернета с
                качественным доступом. Мы, на базе своей оптоволоконной сети,
                гарантируем скорость до 10 Гбит/с. Статичные и динамичные IP
                адреса. Прямые пиринговые стыки со всеми домашними операторами
                Петербурга. Надежное резервирование и оптимизация маршрутов.
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block
            :background-color="'#ff7d05'"
            @onClick="scrollToOrder"
            :is-grey="true"
          >
            <template v-slot:header> Виртуальные сервера VDS </template>
            <template v-slot:description>
              <p class="article">
                Виртуальный сервер с максимальными привилегиями. VDS эмулирует
                работу реального физического сервера - есть root -доступ,
                возможна установка своих операционных систем и ПО. Готовые
                безопасные рабочие места для своих сотрудников в любом месте.
                Доступ к ИТ-инфраструктуре компании, к ее системам и программам.
                Техническая поддержка 24/7. Дистанционное обслуживание согласно
                SLA.
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block :background-color="'#ff7d05'" @onClick="scrollToOrder">
            <template v-slot:header> Терминальные сервера в облаке </template>
            <template v-slot:description>
              <p class="article">
                Не у всех ваших сотрудников достаточно мощные ПК, чтобы
                справляться с корпоративными задачами? Нет достаточного
                количества лицензий и прав? Храните информацию и ПО на
                терминальном сервере. Он обеспечит реализацию всех
                вычислительных процессов, благодаря чему в качестве рабочих мест
                могут выступать даже маломощные устройства и ПК без жесткого
                диска. Для вашего удобства мы предлагаем несколько вариантов
                организации рабочего места:<br />
                - Мы присылаем вашему сотруднику программу, установив которую на
                свой домашний ПК, он автоматически подключается к удаленному
                рабочему месту;<br />
                - Мы выдаем вам тонкий клиент на базе Raspberry Pi, на котором
                сразу прописаны все необходимые настройки для подключения.
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block
            :background-color="'#ff7d05'"
            @onClick="scrollToOrder"
            :is-grey="true"
          >
            <template v-slot:header> Microsoft Teams </template>
            <template v-slot:description>
              <p class="article">
                Интерактивная платформа для совместной работы, объединяющая в
                рабочем пространстве чат, встречи, заметки и вложения.
                Видеоконференции от 2 до 250 участников. Возможность формировать
                задачи сотрудникам и контролировать их выполнение. 1ТБ места для
                хранения переписок и файлов. Интегрирация с платформой Ofﬁce
                365.
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block :background-color="'#ff7d05'" @onClick="scrollToOrder">
            <template v-slot:header> Телефония </template>
            <template v-slot:description>
              <p class="article">
                Настройка Вашей телефонии для того, чтобы компания оставалась на
                связи. Звонки клиентов не теряются, сотрудники доступны по
                корпоративным номерам. Если в компании не используется
                IP-телефония, делаем «быстрое внедрение» облачной или выделенной
                IP-АТС с сохранением номеров. При необходимости настраиваем
                голосовое меню, запись звонков и прочие полезные опции.
                Оказываем техническую поддержку сотрудникам при подключении.
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
        </service-list>
        <virtual-calculator-form class="page-content-block" ref="calculator" />
        <special-price class="page-content-block" :background-color="'#ff7d05'"
          ><template v-slot:text
            ><span
              >При заключении договора&nbsp;на&nbsp;год -&nbsp;
              <strong
                >бесплатная настройка удаленного доступа и&nbsp;месяц
                обслуживания в&nbsp;подарок!</strong
              >
            </span>
          </template></special-price
        >
        <div class="sla page-content-block">
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
        <price-form class="page-content-block" ref="order"></price-form>
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
import AdvantageBlock from '~/components/Common/AdvantageBlock'
import AdvantageList from '~/components/Common/AdvantageList'
import SpecialPrice from '~/components/Common/SpecialPrice'
import SlaBlock from '~/components/ItOutsource/SlaBlock'
import CallUsBlock from '~/components/Index/CallUsBlock'
import PriceForm from '~/components/ItOutsource/PriceForm'
import VirtualCalculatorForm from '~/components/VirtualService/VirtualCalculatorForm'
export default {
  head() {
    return {
      title: 'Виртуальные сервисы',
    }
  },
  components: {
    HeroBlock,
    ServiceBlock,
    ServiceList,
    QuestionBlock,
    AdvantageBlock,
    AdvantageList,
    SpecialPrice,
    SlaBlock,
    CallUsBlock,
    PriceForm,
    VirtualCalculatorForm,
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
          this.$refs['order'].$el.getBoundingClientRect().top +
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
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
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
.container {
  display: flex;
  flex-direction: column;
}
.dialog-button-inverted-colors {
  background-color: #fff;
  color: #ea172c;
  &:hover {
    background-color: transparent;
    color: #fff;
  }
}
</style>
