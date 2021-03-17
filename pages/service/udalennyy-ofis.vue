<template>
  <div class="container">
    <hero-block :is-anchor="true" @onClick="scrollToContent">
      <template v-slot:header>Виртуализация Бизнеса</template>
      <template v-slot:description>
        <div class="description">
          <p class="article">
            Поможем настроить ИТ-инфраструктуру так, чтобы ваша компания
            работала еще эффективнее. Обеспечим безопасность данных.
          </p>
          <p class="article">
            Мы про сервис уровня B2B - быстрый и безопасный комплексный переход
            вашего бизнеса «в облако».
          </p>
          <p class="article">
            Быть готовым к любой реальности и подготовить своих
            клиентов/партнеров - первоочередная задача Oyster Telecom.
          </p>
        </div>
      </template>
      <template v-slot:form-prefix>
        Проверьте возможность подключения сервисов и услуг:
      </template>
    </hero-block>
    <div class="wrapper">
      <advantage-block></advantage-block>
      <service-list ref="next-page">
        <service-block :background-color="'#ff7d05'" @onClick="scrollToOrder">
          <template v-slot:header> Экспресс аудит </template>
          <template v-slot:description>
            <p class="article">
              Наша задача – оценить, подобрать и внедрить инструменты, наиболее
              подходящие для Вашей компании, которые обеспечат беспроблемную
              удаленную работу сотрудников. Мы собираем ваши требования и
              пожелания. В сжатые сроки проводим экспертный анализ Вашей
              ИТ-инфраструктуры. Быстро подбираем и согласуем подходящий
              инструментарий для решения Вашей задачи.
            </p>
          </template>
          <template v-slot:button
            ><button class="dialog-button">Заказать</button>
          </template>
        </service-block>
        <service-block :background-color="'#ff7d05'" @onClick="scrollToOrder">
          <template v-slot:header> Виртуальные рабочие места VDI </template>
          <template v-slot:description>
            <p class="article">
              Готовые к работе стандартизованные виртуальные рабочие места с
              операционной системой, установленными приложениями и своим набором
              документов, недоступных для других пользователей. <br />
              Данные хранятся не на пользовательских устройствах, а в
              корпоративной инфраструктуре и дата-центре Oyster Telecom. Если
              сотрудник потеряет ноутбук или планшет, нашедший не получит доступ
              к корпоративным данным, так как на устройстве нет не только самих
              данных, но и данных для входа на VDI. <br />
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
              эффективно организовать дистанционную работу в компании. В состав
              Ofﬁce 365 входят такие приложения, как Word, Excel, PowerPoint и
              другие. Все службы Ofﬁce предоставляются с гарантией доступности в
              течение 99,9 % времени, подкрепленной финансовыми обязательствами.
              Вы получаете готовый набор инструментов для удаленной работы ваших
              сотрудников в едином информационном пространстве.
            </p>
          </template>
          <template v-slot:button
            ><button class="dialog-button">Заказать</button>
          </template>
        </service-block>
        <service-block :background-color="'#ff7d05'" @onClick="scrollToOrder">
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
        <service-block :background-color="'#ff7d05'" @onClick="scrollToOrder">
          <template v-slot:header> Виртуальные сервера VDS </template>
          <template v-slot:description>
            <p class="article">
              Виртуальный сервер с максимальными привилегиями. VDS эмулирует
              работу реального физического сервера - есть root -доступ, возможна
              установка своих операционных систем и ПО. Готовые безопасные
              рабочие места для своих сотрудников в любом месте. Доступ к
              ИТ-инфраструктуре компании, к ее системам и программам.
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
              справляться с корпоративными задачами? Нет достаточного количества
              лицензий и прав? Храните информацию и ПО на терминальном сервере.
              Он обеспечит реализацию всех вычислительных процессов, благодаря
              чему в качестве рабочих мест могут выступать даже маломощные
              устройства и ПК без жесткого диска. Для вашего удобства мы
              предлагаем несколько вариантов организации рабочего места:<br />
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
        <service-block :background-color="'#ff7d05'" @onClick="scrollToOrder">
          <template v-slot:header> Microsoft Teams </template>
          <template v-slot:description>
            <p class="article">
              Интерактивная платформа для совместной работы, объединяющая в
              рабочем пространстве чат, встречи, заметки и вложения.
              Видеоконференции от 2 до 250 участников. Возможность формировать
              задачи сотрудникам и контролировать их выполнение. 1ТБ места для
              хранения переписок и файлов. Интегрирация с платформой Ofﬁce 365.
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
              голосовое меню, запись звонков и прочие полезные опции. Оказываем
              техническую поддержку сотрудникам при подключении.
            </p>
          </template>
          <template v-slot:button
            ><button class="dialog-button">Заказать</button>
          </template>
        </service-block>
      </service-list>
      <question-block
        ref="question"
        :question="'Например:\nМожно ли организовать L2 канал между офисами компании?'"
      >
        <template v-slot:top-text>
          <h5 class="header">Задайте любой ИТ вопрос бесплатно</h5>
          <p class="article">
            Мы бесплатно ответим на любые вопросы из области Корпоративного ИТ,
            связанные с настройкой сетей и рабочих мест, серверов и облаков.
            <br />
            Поможем разобраться&nbsp; и оптимизировать расходы на ИТ.
          </p>
          <h6 class="header">Наши эксперты</h6>
          <p class="article">
            В Oyster Telecom работают технические специалисты с&nbsp;релевантным
            опытом из&nbsp;различных технических сфер услуг для&nbsp;бизнеса.
          </p>
        </template>
        <template v-slot:bottom-text>
          <p class="article">
            Для всех клиентов виртуальных сервисов мы предоставляем детальное
            соглашение об уровне обслуживания (SLA), гарантирующее точное
            исполнение основных параметров и показателей, за соблюдение которых
            мы несем финансовую ответственность.
          </p>
          <h6 class="header">
            При заключении договора на год - бесплатная настройка удаленного
            доступа и месяц обслуживания в подарок!
          </h6>
        </template>
      </question-block>
    </div>
  </div>
</template>

<script>
import HeroBlock from '~/components/Common/HeroBlock'
import ServiceBlock from '~/components/Common/ServiceBlock'
import ServiceList from '~/components/Common/ServiceList'
import QuestionBlock from '~/components/Common/QuestionBlock'
import AdvantageBlock from '~/components/RemoteOffice/AdvantageBlock'
export default {
  components: {
    HeroBlock,
    ServiceBlock,
    ServiceList,
    QuestionBlock,
    AdvantageBlock,
  },
  methods: {
    scrollToContent: function () {
      this.$refs['next-page'].$el.scrollIntoView({ behavior: 'smooth' })
    },
    scrollToOrder: function () {
      this.$refs['question'].$refs['order'].scrollIntoView({
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.hero-block {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('~/static/images/backgrounds/index-bg.jpg');
  .description {
    margin-bottom: 1em;
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
