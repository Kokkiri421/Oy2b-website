<template>
  <div class="container">
    <hero-block :is-anchor="true" @onClick="scrollToServices">
      <template v-slot:header> IP Адреса </template>
      <template v-slot:description>
        <div class="description">
          <p class="article">IP-Адреса IPv4 и IPv6 из собственных подсетей.</p>
          <p class="article">
            Имея статус LIR в RIPE мы предлагаем своим клиентам наиболее
            выгодные условия обслуживания.
          </p>
          <p class="article">
            Все адреса будут зарегистрированы на вашу организацию.
          </p>
          <p class="article">На рынке с 2000 года.</p>
        </div>
      </template>
      <template v-slot:form-prefix>
        Заполните форму для связи со специалистом:
      </template>
    </hero-block>
    <div class="wrapper">
      <div class="page-content">
        <h4 class="header">Нам доверяют, потому что мы:</h4>
        <advantage-list class="page-content-block">
          <template v-slot:advantage-list>
            <advantage-block :style="{ '--color': '#ff7d05' }">
              <template v-slot:header>LIR в России</template>
              <template v-slot:description
                >Мы являемся партнерами RIPE по предоставлению IP адресов в РФ
              </template>
            </advantage-block>
            <advantage-block :style="{ '--color': '#ff7d05' }">
              <template v-slot:header>Документы на русском языке</template>
              <template v-slot:description
                >Мы ведем документооборот только на русском языке</template
              >
            </advantage-block>
            <advantage-block :style="{ '--color': '#ff7d05' }">
              <template v-slot:header>Оформление под ключ</template>
              <template v-slot:description
                >Мы поможем принять и оформить сеть под себя</template
              >
            </advantage-block>
          </template>
        </advantage-list>
        <service-list class="page-content-block" ref="next-page">
          <service-block :background-color="'#2dc354'" @onClick="scrollToOrder">
            <template v-slot:header> Аренда IP Адресов: </template>
            <template v-slot:description>
              <p class="article">IPv4-адреса из собственных PA-блоков</p>
              <p class="article">
                Каждый IP перед активацией проверяется на присутствие в «черных
                списках»
              </p>
              <p class="article">
                Бухгалтерские документы в соответствии с требованиями
                законодательства РФ (счет, акт, счет-фактура).
              </p>
              <p class="article">В запросах whois отображаются ваши данные</p>
              <p class="article">
                В стоимость входит поддержка и сопровождение данных объектов в
                базе RIPE, помощь и консультирование в использовании базы данных
                RIPE и управления объектами.<br />
                Объекты назначаются в соответствии с договором, гарантирующим
                предоставление услуг и возможность использования объектов
                согласованное время.
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
            <template v-slot:header> Регистрация AS: </template>
            <template v-slot:description>
              <p class="article">
                Консультационные услуги по анонсирвоанию вашей автономной
                системы (AS) или блока IP-адресов по протоколу BGP в РФ или ЕС.
              </p>
              <p class="article">
                Подача заявки от вашего имени на регистрацию АС
              </p>
              <p class="article">Помощь в оплате взносов</p>
              <p class="article">
                Поддержка квалифицированными специалистами 24/7/365
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
            <template v-slot:header> Покупка IP Адресов: </template>
            <template v-slot:description>
              <p class="article">
                Мы располагаем базой подсетей IPv4-адресов, из которой возможно
                оперативно подобрать предложение под ваш бюджет.
              </p>
              <p class="article">
                Каждый IP перед активацией проверяется на присутствие в «черных
                списках»
              </p>
              <p class="article">
                Бухгалтерские документы в соответствии с требованиями
                законодательства РФ (счет, акт, счет-фактура).
              </p>
              <p class="article">В запросах whois отображаются ваши данные</p>
              <p class="article">
                <b
                  >Купите IPv4 адреса и получите полный контроль над вашими
                  объектами</b
                >
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block :background-color="'#2dc354'" @onClick="scrollToOrder">
            <template v-slot:header> Дополнительно: </template>
            <template v-slot:description>
              <p class="article">
                Перенос блоков IPv4, IPv6 или AS от другого LIR
              </p>
              <p class="article">Поддержка блоков IPv4 и IPv6</p>
              <p class="article">Покупка ваших блоков, сетей, подсетей IPv4</p>
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
          <h4 class="header">Задайте любой ИТ вопрос бесплатно</h4>
          <p class="article">
            Мы бесплатно ответим на любые вопросы из области Корпоративного ИТ,
            связанные с настройкой сетей и рабочих мест, серверов и облаков.
            <br />
            Поможем разобраться&nbsp; и оптимизировать расходы на ИТ.
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
import SpecialPrice from '~/components/Common/SpecialPrice'
import AdvantageList from '~/components/Common/AdvantageList'
import AdvantageBlock from '~/components/Common/AdvantageBlock'
import IpForm from '~/components/IPaddresses/IpForm'
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
    AdvantageList,
    AdvantageBlock,
    IpForm,
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
          this.$refs['order'].$el.getBoundingClientRect().top +
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
