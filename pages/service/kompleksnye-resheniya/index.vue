<template>
  <div class="container">
    <hero-block :is-anchor="true" @onClick="scrollToServices">
      <template v-slot:header> Комплексные решения </template>
      <template v-slot:description>
        <div class="description">
          <p class="article">
            Благодаря точному пониманию специфики региона и потребностей наших
            клиентов, Oyster Telecom предлагает отработанные и проверенные
            комплексные решения для любого вида бизнеса в Санкт-Петербурге.
          </p>
          <p class="article">
            Примите верное решение. Подключите услуги Oyster Telecom!
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
          <service-block
            :background-color="'#0e7829'"
            @onClick="
              $router.push('kompleksnye-resheniya/reshenie-dlya-horeca')
            "
            :type="'link'"
          >
            <template v-slot:header> Решение для HoReCa </template>
            <template v-slot:description>
              <p class="article">
                Пакет услуг связи для кафе, баров, ресторанов - это современный
                подход к сервису. Быстрый и бесплатный доступ в интернет для
                посетителей превратит случайного гостя в постоянного клиента.
              </p>
            </template>

            <template v-slot:button
              ><button class="dialog-button">Подробнее</button>
            </template>
          </service-block>
          <service-block
            :background-color="'#0e7829'"
            @onClick="
              $router.push(
                '/service/kompleksnye-resheniya/reshenie-dlya-magazinov-i-tochek-prodazh/'
              )
            "
            :type="'link'"
          >
            <template v-slot:header>
              Решение для магазинов и точек&nbsp;продаж
            </template>
            <template v-slot:description>
              <p class="article">
                С пакетом услуг от Oyster Telecom вы забудете о проблемах с
                соединением онлайн-кассы через симкарту и не эффективных
                сотрудниках. Очередей станет меньше, а довольных клиентов
                больше.
              </p>
            </template>

            <template v-slot:button
              ><button class="dialog-button">Подробнее</button>
            </template>
          </service-block>
          <service-block
            :background-color="'#0e7829'"
            :type="'link'"
            @onClick="
              $router.push(
                '/service/kompleksnye-resheniya/resheniya-dlya-sfery-turizma/'
              )
            "
          >
            <template v-slot:header> Решения для сферы туризма </template>
            <template v-slot:description>
              <p class="article">
                Многие операторы связи предлагают комплексные решения для
                отелей, но весь проект рассыпается, когда приходится
                согласовывать интеграцию СКС в памятники архитектуры либо
                сращивать сервисы провайдера с существующими системами
                управления отелем. За 18 лет на телеком рынке мы стали
                настоящими профи в обеспечении гостиничного бизнеса Петербурга
                услугами связи.
              </p>
            </template>

            <template v-slot:button
              ><button class="dialog-button">Подробнее</button>
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
        <question-block
          ref="question"
          :question="'Например:\nКак подключить POS терминалы c помощью разделения Wi-Fi на 2 SSID ?'"
        >
          <template v-slot:top-text>
            <h5 class="header">
              Задайте любой вопрос о подключении вашего бизнеса
            </h5>
            <p class="article">
              Не нашли подходящее именно вам решение? Мы бесплатно ответим на
              любые вопросы из области корпоративных телекоммуникационных услуг.
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
            <p class="article">
              Наши специалисты разработают для вас индивидуальный тарифный план,
              в&nbsp;соответствии с &nbsp;особенностями вашего бизнеса,
              количеством и&nbsp;оснащенностью рабочих мест, степенью нагрузки
              на&nbsp;интернет канал.
            </p>
            <p class="article">
              Конкретное решение зависит от ваших потребностей
            </p>
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
import SpecialPrice from '~/components/Common/SpecialPrice'

export default {
  components: {
    HeroBlock,
    ServiceBlock,
    ServiceList,
    QuestionBlock,
    SpecialPrice,
       
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('~/static/images/backgrounds/kompleksnye-resheniya-bg.jpg');
  .description {
    margin-bottom: 1em;
  }
}
.container {
  display: flex;
  flex-direction: column;
}
</style>
