<template>
  <div class="container">
    <hero-block :is-anchor="true" @onClick="scrollToServices">
      <template v-slot:header> Решение для HoReCa </template>
      <template v-slot:description>
        <div class="description">
          <p class="article">
            Наши специалисты разработают для вас индивидуальный тарифный план, в
            соответствии с особенностями вашего бизнеса, количеством и
            оснащенностью рабочих мест, степенью нагрузки на интернет-канал.
            Конкретное решение зависит от ваших потребностей. Все услуги
            адаптированы под HoReCa специфику.
          </p>
          <p class="article">Подключаем за 3 дня!</p>
        </div>
      </template>
      <template v-slot:form-prefix>
        Проверьте возможность подключения сервисов и услуг:
      </template>
    </hero-block>
    <div class="wrapper">
      <div class="page-content">
        <service-list class="page-content-block" ref="next-page">
          <service-block :background-color="'#0e7829'" @onClick="scrollToOrder">
            <template v-slot:header> Выделенный интернет </template>
            <template v-slot:description>
              <ul class="article">
                <li>
                  интернет канал от 5 Мбит/с до 10 Гбит/с отдельным волокном
                </li>
                <li>
                  гарантированная скорость не меняется от общей загрузки сети
                </li>
                <li>
                  настраиваемый firewall и разграничение доступа к определенным
                  ресурсам
                </li>
                <li>
                  реальные ip адреса по количеству рабочих мест + 4 резервных
                </li>
                <li>
                  возможность расширить канал при увеличении количества
                  посетителей
                </li>
              </ul>
            </template>

            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block
            :background-color="'#0e7829'"
            @onClick="scrollToOrder"
            :is-grey="true"
          >
            <template v-slot:header> Управляемый Wi-Fi </template>
            <template v-slot:description>
              <ul class="article">
                <li>
                  разделение зон Wi-Fi&nbsp;на&nbsp;техническую и&nbsp;гостевую
                  с&nbsp;лимитом пользования
                </li>
                <li>авторизация посетителей согласно законодательству РФ</li>
                <li>
                  брендированная страница приветствия и удобный конструктор для
                  ее создания
                </li>
                <li>
                  личный кабинет с возможностью аналитики и статистикой
                  подключений клиентов
                </li>
                <li>
                  отдельный защищенный канал для подключения онлайн кассы и
                  pos-терминалов
                </li>
              </ul>
            </template>

            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block :background-color="'#0e7829'" @onClick="scrollToOrder">
            <template v-slot:header> Удобная телефония </template>
            <template v-slot:description>
              <ul class="article">
                <li>возможность подключить красивый номер и номер 8-800</li>
                <li>бесплатный многоканальный телефонный аппарат</li>
                <li>
                  перевод звонков и переадресация на любой другой телефонный
                  номер
                </li>
                <li>режимы «не беспокоить» и «удержание на линии»</li>
                <li>
                  музыка на линии при удержании звонка, переводе звонка и
                  переключении
                </li>
                <li>бесплатные короткие внутренние номера</li>
              </ul>
            </template>

            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block
            :background-color="'#0e7829'"
            @onClick="scrollToOrder"
            :is-grey="true"
          >
            <template v-slot:header> Видеонаблюдение </template>
            <template v-slot:description>
              <ul class="article">
                <li>
                  Хранение видеоархива на операторском оборудовании в
                  собственном Дата-Центре
                </li>
                <li>
                  Доступ из любой точки мира, где есть интернет через приложение
                  или веб-интерфейс
                </li>
                <li>
                  Независимый от остальных услуг канал связи к каждой камере и
                  оповещения о детекции
                </li>
                <li>
                  Отсутствие затрат на покупку дорогостоящего ПО, оборудования и
                  найм сотрудников
                </li>
                <li>Автоматический контроль за сотрудниками и объектами</li>
              </ul>
              <p class="article">
                Современные системы видеонаблюдения обеспечивают не только
                контроль в установленных местах, но и умеют анализировать
                происходящее, собирать статистику и формировать отчеты. <br />

                Если понадобится, обеспечим доступ к&nbsp;существующей системе
                видеонаблюдения с&nbsp;помощью услуги «проброс портов».
              </p>
            </template>

            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block :background-color="'#0e7829'" @onClick="scrollToOrder">
            <template v-slot:header> Публичное ТВ </template>
            <template v-slot:description>
              <ul class="article">
                <li>только легальный ТВ контент</li>
                <li>
                  более 80 федеральных, региональных и зарубежных каналов на
                  любую тематику
                </li>
                <li>
                  Каналы IP TV не «зависают» во время популярных передач и
                  трансляций
                </li>
                <li>четкая картинка и качественный звук</li>
                <li>отложенный просмотр</li>
              </ul>
            </template>

            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block
            :background-color="'#0e7829'"
            @onClick="scrollToOrder"
            :is-grey="true"
          >
            <template v-slot:header> Поддержка </template>
            <template v-slot:description>
              <ul class="article">
                <li>личный менеджер с момента подписания договора</li>
                <li>служба поддержки 24/7</li>
                <li>обслуживание IT и телеком обрудования вашего бизнеса</li>
              </ul>
            </template>

            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
        </service-list>
        <special-price class="page-content-block" :background-color="'#0e7829'"
          ><template v-slot:text
            ><span
              >При оплате услуг связи за&nbsp;6&nbsp;месяцев -&nbsp;
              <strong>до&nbsp;половины скорости в&nbsp;подарок!</strong></span
            ></template
          ></special-price
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
