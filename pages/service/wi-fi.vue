<template>
  <div class="container">
    <hero-block :is-anchor="true" @onClick="scrollToServices">
      <template v-slot:header> Wi-Fi для бизнеса </template>
      <template v-slot:description>
        <div class="description">
          <p class="article">
            Бесшовные публичные Wi-Fi зоны.<br />
            Авторизация и идентификация пользователей по закону.<br />
            Гарантированная скорость для всех одновременных подключений.<br />
            <span class="dn-600">
              Удобный конструктор создания кастомизированных страниц
              приветствия.<br />
              Личный кабинет для сбора маркетинговой аналитики и статистики
              подключений.<br />
              Обеспечиваем простое управление. Гарантируем скорость и
              надёжность.
            </span>
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
          <service-block :background-color="'#2dc354'" @onClick="scrollToOrder">
            <template v-slot:header> Wi-Fi в Офис </template>
            <template v-slot:description>
              <p class="article">
                Представьте себе офис без центрального отопления.
                Ни&nbsp;радиаторов, ни&nbsp;обогревателей, а&nbsp;сотрудники
                сидят в&nbsp;тулупах и&nbsp;греют ладони дыханием. Смешно?
                Думаете такого не&nbsp;бывает? А&nbsp;теперь представьте офис
                без wi-fi. Хороший офисный wi-fi не&nbsp;только удобный
                и&nbsp;привычный атрибут нашего со&nbsp;смартфонами симбиоза,
                но&nbsp;и&nbsp;эффективный бизнес-инструмент.
                <br />
                Сеть должна много уметь и&nbsp;быть легкоуправляемой.
                Мы&nbsp;на&nbsp;этом «собаку съели».
              </p>
              <p class="article">
                Приедем, разработаем проект, всё проложим и&nbsp;настроим.
                Сделаем зону wi-fi раздельной для клиентов и&nbsp;сотрудников
                с&nbsp;разграничением доступа и&nbsp;фиксированной скоростью,
                не&nbsp;зависящей от&nbsp;загруженности. Дадим реальные IP-
                адреса по&nbsp;количеству сотрудников. Брендируем страницу
                авторизации для гостей. А&nbsp;к&nbsp;этому и&nbsp;личный
                кабинет, в&nbsp;котором вы&nbsp;сами все настроите.
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block
            :background-color="'#2dc354'"
            @onClick="scrollToOrder"
            :is-grey="true"
          >
            <template v-slot:header> Wi-Fi в Отелях </template>
            <template v-slot:description>
              <p class="article">
                Настройка сети Wi-Fi в гостинице – работа для профи. В питерском
                отеле – для супер-профи. Нужен не просто толковый проект, а с
                интеграцией СКС в памятники архитектуры. И тут мы поднаторели.
                Wi-fi-точки от Ubiquiti Networks поддерживают 35-75
                одновременных wi-fi- пользователей в радиусе 50-60 метров и
                имеют множество модификаций, с креплением на потолок или на
                стену в виде малозаметной накладки на розетку. Оборудование
                Mikrotik отлично работает за подвесными конструкциями и в
                перегородках.<br />
                Обращайтесь и мы бесплатно предложим хорошие инженерные решения,
                учитывающие историческую ценность здания. Настроим сеть с
                разделением зон и лимитом пользования. Интегрируем с вашей
                системой управления отелем. Поможем соблюсти законодательство об
                обязательной идентификации пользователей публичных Wi-Fi-точек –
                сделаем хотспот с авторизацией по закону с доступом для
                иностранных граждан (смотри раздел Wi-Fi авторизация). С нами
                штрафов не будет!
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block :background-color="'#2dc354'" @onClick="scrollToOrder">
            <template v-slot:header> Wi-Fi на мероприятиях </template>
            <template v-slot:description>
              <p class="article">
                Большие территории с&nbsp;множеством постоянно перемещающихся
                людей, особенно на&nbsp;открытом воздухе&nbsp;— кошмарный сон
                подписавшегося на&nbsp;это провайдера. Мы прошли боевое крещение
                на&nbsp;openair-фестивалях Geek Picnic, StereoЛето
                и&nbsp;УсадьбаJazz.
              </p>
              <p class="article">
                За&nbsp;два дня на&nbsp;Geek Picnic нашим wi-fi воспользовались
                более 14000 человек! Но&nbsp;прежде нам пришлось побороться
                и&nbsp;с&nbsp;погодой, и&nbsp;с&nbsp;отсутствием каких-либо
                конструкций, чтобы повесить оборудование,
                и&nbsp;с&nbsp;чиновниками, которые запрещали тянуть кабель мимо
                дерева, на&nbsp;которое когда-тосмотрел Петр 1. Но&nbsp;такие
                проекты делают нас еще более опытными и&nbsp;сегодня для нас уже
                наверное нет невыполнимых задач, связанных с&nbsp;wi-fi.
              </p>
              <p class="article">
                Мы&nbsp;не&nbsp;понаслышке знаем, как работать
                с&nbsp;лавинообразными нагрузками. Умеем настраивать бесшовный
                роуминг.&nbsp;Обеспечиваем отказоустойчивость сети, при которой
                зависание отдельных точек не&nbsp;приводит к&nbsp;появлению дыр
                в&nbsp;покрытии.
              </p>
              <p class="article">
                Бонусом&nbsp;— удобная авторизация и&nbsp;брендированная
                страница приветствия, на которой вы можете разместить любую
                рекламу и информацию ( например расписание вашего мероприятия).
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block
            :background-color="'#2dc354'"
            @onClick="scrollToOrder"
            :is-grey="true"
          >
            <template v-slot:header> Wi-Fi в Кафе и Ресторанах </template>
            <template v-slot:description>
              <p class="article">
                Сегодня первый вопрос посетителя&nbsp;— про меню, второй про
                Wi-Fi. Это уже «маст хэв». Авторизация должна быть лёгкой,
                а&nbsp;скорость высокой при полной загрузке кафе или ресторана.
                Важно также ограничить трафик охотников за&nbsp;публичным Wi-
                Fi, иначе чашечка кофе может дорого обойтись заведению.<br />
                Мы&nbsp;всё учтём:
              </p>
              <ul class="article">
                <li>
                  разделим зоны Wi-Fi на&nbsp;техническую и&nbsp;гостевую
                  с&nbsp;лимитом пользования;
                </li>
                <li>
                  настроим авторизацию по&nbsp;закону с&nbsp;брендированной
                  страницей приветствия;
                </li>
                <li>
                  обеспечим фиксированную скорость&nbsp;— наше оборудование
                  отлично тянет 15–20 одновременных пользователей, потребляя
                  меньше лампочки;
                </li>
                <li>
                  бесплатно подключим кассу и&nbsp;POS-терминал
                  по&nbsp;защищённому каналу;
                </li>
                <li>
                  в&nbsp;личном кабинете вы&nbsp;сами сможете
                  за&nbsp;5&nbsp;минут создать свой дизайн страницы приветствия
                  с&nbsp;рекламными баннерами и&nbsp;логотипом
                </li>
                <li>
                  плюс, получать, статистику посещений и&nbsp;подключений.
                </li>
              </ul>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block :background-color="'#2dc354'" @onClick="scrollToOrder">
            <template v-slot:header> Wi-Fi авторизация </template>
            <template v-slot:description>
              <p class="article">
                Согласно постановлению No575 от&nbsp;10 сентября 2007 года все
                юрлица и&nbsp;ИП, при наличии точек доступа в&nbsp;интернет
                с&nbsp;помощью wi-fi, обязаны проводить идентификацию
                пользователей по&nbsp;закону и&nbsp;хранить данные подключенных
                в&nbsp;течении 3-х лет. Если этого не&nbsp;делать&nbsp;—
                придется платить штраф от&nbsp;100&nbsp;000
                до&nbsp;300&nbsp;000&nbsp;рублей.
              </p>
              <p class="article">
                Но&nbsp;откровенно говоря, вы&nbsp;и&nbsp;сами можете соблюсти
                закон, не&nbsp;привлекая провайдера.
              </p>
              <p class="article">
                Для этого нужно: сканировать паспорта при каждом подключении
                каждого пользователя, вести журнал учета, назначить
                ответственного за&nbsp;ведение журнала учета. Если что&nbsp;—
                мы&nbsp;готовы вам бесплатно привезти журнал учета, сургуч
                и&nbsp;суровую нитку, чтобы подшивать бесконечную вереницу
                листов.
              </p>
              <p class="article">
                Ну, а&nbsp;для всех остальных мы&nbsp;разработали услугу удобной
                Wi-Fi авторизации.<br />
                Мы&nbsp;сами установим необходимое оборудование и&nbsp;настроим
                точки. Вам нужно только зайти в&nbsp;личный кабинет,
                в&nbsp;удобном конструкторе установить на&nbsp;страницу
                приветствия ваш логотип, рекламный баннер, фон, текст
                и&nbsp;всё! Ваши клиенты и&nbsp;сотрудники наслаждаются быстрым
                интернетом, а&nbsp;вы&nbsp;лояльными клиентами. Но&nbsp;это
                не&nbsp;всё! В&nbsp;личном кабинете у&nbsp;вас будет доступ
                к&nbsp;исчерпывающей статистике всех подключений.
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
        </service-list>
        <special-price class="page-content-block" :background-color="'#2dc354'"
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
.hero-block {
}
.container {
  display: flex;
  flex-direction: column;
}
</style>
