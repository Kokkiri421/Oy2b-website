<template>
  <div class="container">
    <hero-block :is-anchor="true" @onClick="scrollToServices">
      <template v-slot:header> Облачные решения </template>
      <template v-slot:description>
        <div class="description">
          <p class="article">
            Думаете начать эксплуатировать сторонние мощности?<br />
            Используйте наши&nbsp;— сервера Dell, панели управления Plesk,
            системы виртуализации от&nbsp;VMware, системы хранения данных
            NetApp, резервирование от&nbsp;Veeam Software.
          </p>
          <span class="dn-600">
            <p class="article">
              Облачные сервисы, хостинг, аренда серверов&nbsp;— мы&nbsp;всё
              делаем. Круглосуточная поддержка по&nbsp;первому звонку.
            </p>
          </span>
        </div>
      </template>
      <template v-slot:form-prefix>
        Проверьте возможность подключения сервисов и услуг:
      </template>
    </hero-block>
    <div class="wrapper">
      <div class="page-content">
        <service-list class="page-content-block" ref="next-page">
          <service-block :background-color="'#a652a8'" @onClick="scrollToOrder">
            <template v-slot:header> Аренда виртуального сервера </template>
            <template v-slot:description>
              <p class="article">
                Не&nbsp;хватает ресурсов хостинга? Хочется собственный сервер,
                но выделенный брать дорого? Решение -&nbsp; VDS.
              </p>
              <p class="article">
                Обращайтесь и&nbsp;мы&nbsp;выделим полностью настроенный
                виртуальный сервер с&nbsp;установленной операционной системой.
                От&nbsp;реального не&nbsp;отличишь, но&nbsp;экономичней.
              </p>
              <p class="article">
                В&nbsp;любой момент, одним нажатием, вы&nbsp;сможете изменять
                мощность процессора, объём оперативной памяти и&nbsp;дискового
                пространства.
              </p>
              <p class="article">
                Виртуальные возможности поддерживаются вполне реальным железом:
                мощными серверами Dell&nbsp;— 6 процессоров и&nbsp;полтерабайта
                оперативки на&nbsp;сервер.
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block
            :background-color="'#a652a8'"
            @onClick="scrollToOrder"
            :is-grey="true"
          >
            <template v-slot:header>Аренда сервера </template>
            <template v-slot:description>
              <p class="article">
                Арендуйте сервер и&nbsp;забудьте о&nbsp;расходах
                на&nbsp;обновление, содержание и&nbsp;ремонт. Мы&nbsp;всё
                возьмём на&nbsp;себя. Понадобится новая конфигурация&nbsp;—
                сборка будет сделана за&nbsp;два дня. Что-то сломается&nbsp;—
                заменим детали за&nbsp;6 часов по&nbsp;программе ProSupport
                от&nbsp;Dell. Захотите увеличить память, емкость канала
                до&nbsp;сервера или добавить жесткий диск&nbsp;— поможет личный
                менеджер.
              </p>
              <p class="article">
                Доступ к&nbsp;серверу&nbsp;— в&nbsp;том числе
                и&nbsp;терминальный&nbsp;— 24 часа в&nbsp;сутки, выходные
                и&nbsp;праздники.
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block
            :background-color="'#a652a8'"
            @onClick="scrollToOrder"
            :is-grey="true"
          >
            <template v-slot:header>Хостинг </template>
            <template v-slot:description>
              <p class="article">
                Хотите разместиться там, где соседей поменьше? Где
                производительность сервера не&nbsp;падает при нагрузках
                на&nbsp;сотни чужих сайтов? И&nbsp;дисковым пространством
                не&nbsp;обделяют? Тогда вам к&nbsp;нам.
              </p>
              <p class="article">
                Система управления Plesk&nbsp;— монстр на&nbsp;рынке хостинга
                и&nbsp;виртуализации с&nbsp;кучей патентов призов и&nbsp;наград
              </p>
              <p class="article">
                Почта, антивирус, логи, аналитика и&nbsp;дружелюбный
                веб-интерфейс. А&nbsp;ещё круглосуточная поддержка быстрого
                реагирования.
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block :background-color="'#a652a8'" @onClick="scrollToOrder">
            <template v-slot:header>Удаленное рабочее место </template>
            <template v-slot:description>
              <p class="article">
                Заботимся о&nbsp;вашем оборудовании, как о&nbsp;своём. Бережно
                размещаем в&nbsp;19" шкафах Conteg. Обеспечиваем доступ
                в&nbsp;любое время дня и&nbsp;ночи&nbsp;— надо, значит надо.
                Мониторим температуру&nbsp;&nbsp;и влажность в&nbsp;каждом ряду.
                Дата-центр использует два независимых ввода электропитания.
                Бесперебойность электропитания обеспечивается двумя группами из
                шести источников бесперебойного питания Eaton, с общим
                резервированием N+1 и гарантированным временем работы под полной
                нагрузкой 10 минут. На случай отключения двух вводов
                электропитания, предусмотрен дизель-генератор Onis Visa,
                оборудованный системой автоматического ввода резерва. ДГУ
                резервируют полную мощность дата-центра и готов держать оборону
                целые сутки на одном баке. <br />
                Поработаем «удалёнными руками», если вы&nbsp;не&nbsp;сможете
                приехать: посмотрим лампочки, переткнём шнур питания,
                пересбросим сервер, подключим IP-консоль
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
        </service-list>
        <special-price class="page-content-block" :background-color="'#a652a8'"
          ><template v-slot:text
            ><span
              >При заключении договора на год -
              <strong
                >бесплатная настройка удаленного доступа и месяц обслуживания в
                подарок!</strong
              >.
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
.hero-block {
  &__user-form {
    margin-top: 2em;

    .blue-dialog-button {
      background-color: #009ee3;
      &:hover {
        background-color: #17b8ff;
      }
    }
    .dialog-button:nth-child(1) {
      margin-right: 1em;
    }
  }
}
.container {
  display: flex;
  flex-direction: column;
}
</style>
