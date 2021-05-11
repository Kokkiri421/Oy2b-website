<template>
  <div class="container">
    <hero-block :is-anchor="true" :user-form="true" @onClick="scrollToServices">
      <template v-slot:header>Кейсы</template>
      <template v-slot:description>
        <div class="description">
          <p class="article dn-600">
            Мы специализируемся на комплексных проектах, решаем сложные задачи и
            работаем только с корпоративными клиентами. Ценим честность и
            прозрачность в работе и всегда готовы обсудить с заказчиком нюансы
            работы оборудования, продуктов и сервисов. Благодаря
            профессионализму наших сотрудников Oyster Telecom входит в пятерку
            лидеров на рынке частных B2B операторов связи и IT сервисов
            Санкт-Петербурга.
          </p>
          <p class="article">
            Ниже собраны рабочие кейсы, в которых подробно рассказано о
            поставленных задачах, принятых решениях и результатах работы.
            Познакомьтесь с клиентами, которые нам доверяют, и станьте одним из
            них!
          </p>
        </div>
      </template>
    </hero-block>
    <div class="wrapper">
      <div class="page-content">
        <service-list class="page-content-block" ref="next-page">
          <service-block
            :background-color="'#ea172c'"
            type="block"
            @onClick="scrollToOrder"
          >
            <template v-slot:header> WaveAccess </template>
            <template v-slot:description>
              <p class="article">
                Обеспечение офисной телефонии на трех этажах старого фонда +
                подключение по протоколу SIP к имеющейся телефонной
                инфраструктуре.
              </p>
              <p class="article">
                IT компания WaveAccess - поставщик услуг по разработке
                программного обеспечения для международных клиентов. Компания
                создает ПО для наукоемких разработок, блокчейн-проектов и
                внедрения искусственного интеллекта. Благодаря WaveAccess
                заказчики могут усилить IT направление своей компании и повысить
                конкурентоспособность.<br />
                WaveAccess и Oyster Telecom сотрудничают с 2008 года.
              </p>
              <p class="article strong">Основная задача</p>
              <p class="article">
                В 2019 году Петербургскому отделению WaveAccess для связи
                офисов, расположенных на разных этажах здания, требовалось
                подключение офисной телефонии на базе DECT: 1 стационарный
                многоканальный аппарат и дополнительно 20 беспроводных трубок
                для сотрудников. Нюансы: безразрывная связь, качественное
                соединение, хороший звук.
              </p>
              <p class="article strong">Сложности</p>
              <p class="article">
                Офисы компании располагаются на 3,4 и 5 этажах в здании старого
                фонда. Значит, новое оборудование должно иметь достаточно
                большую площадь покрытия, устойчивый роуминг и хэндовер.<br />
                Также WaveAccess уже имеет собственную телефонную
                инфраструктуру. Новое оборудование должно иметь возможность
                подключаться по протоколу SIP к имеющейся инфраструктуре
                оператора.
              </p>
              <p class="article strong">Решение</p>
              <p class="article">
                Технические специалисты Oyster Telecom провели исследования на
                территории заказчика, уточнили бизнес задачу и
                проконсультировались с вендорами. После согласования деталей был
                сделан выбор в пользу базовой станции N870 IP PRO Multicell
                System европейской компании Gigaset. Система дает возможность
                подключения до 250 беспроводных трубок и может быть цельно
                интегрирована в корпоративную сеть.
              </p>
              <p class="article">
                Для согласованного качества связи было установлено 5 базовых
                блоков Gigaset N870 IP PRO, настроена иерархическая структура
                микросотовой сети и синхронизация между базовыми блоками. Это
                обеспечило устойчивый роуминг и бесшовный хэндовер на всех
                этажах здания.
              </p>
              <p class="article">
                С 2019 года до сегодняшнего дня качество связи клиента полностью
                устраивает.
              </p>
              <p class="article strong">Отзыв клиента</p>
              <p class="article">
                Мы попросили представителя компании WaveAccess дать комментарий
                по работе офисной телефонии. Ответ был кратким, но ёмким: "У
                меня сотовый работает хуже, чем ваш DECT!”
              </p>
            </template>
          </service-block>
        </service-list>
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
  head() {
    return {
      title: 'Кейсы',
    }
  },
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
.strong {
  font-weight: 600;
}
</style>
