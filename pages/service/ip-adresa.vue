<template>
  <div class="container">
    <hero-block :is-anchor="true" @onClick="scrollToServices">
      <template v-slot:header> IP Адреса </template>
      <template v-slot:description>
        <div class="description">
          <p class="article">
            IP-Адреса IPv4&nbsp;и&nbsp;IPv6 из&nbsp;собственных подсетей.
          </p>
          <p class="article">
            Имея статус LIR&nbsp;в&nbsp;RIPE мы&nbsp;предлагаем своим клиентам
            наиболее выгодные условия обслуживания.
          </p>
          <p class="article">
            Все адреса будут зарегистрированы на&nbsp;вашу&nbsp;организацию.
          </p>
          <p class="article">На рынке с&nbsp;2000 года.</p>
        </div>
      </template>
      <template v-slot:form-prefix>
        Заполните форму для&nbsp;связи со&nbsp;специалистом:
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
              <template v-slot:header>Документы на&nbsp;русском&nbsp;языке</template>
              <template v-slot:description
                >Мы ведем документооборот только на русском языке</template
              >
            </advantage-block>
            <advantage-block :style="{ '--color': '#ff7d05' }">
              <template v-slot:header>Оформление под&nbsp;ключ</template>
              <template v-slot:description
                >Мы поможем принять и&nbsp;оформить сеть под&nbsp;себя</template
              >
            </advantage-block>
          </template>
        </advantage-list>
        <service-list class="page-content-block" ref="next-page">
          <service-block :background-color="'#2dc354'" @onClick="scrollToOrder">
            <template v-slot:header> Аренда IP Адресов: </template>
            <template v-slot:description>
              <p class="article">IPv4-адреса из&nbsp;собственных PA-блоков</p>
              <p class="article">
                Каждый IP перед активацией проверяется на&nbsp;присутствие
                в&nbsp;«черных&nbsp; списках»
              </p>
              <p class="article">
                Бухгалтерские документы в&nbsp;соответствии с&nbsp;требованиями
                законодательства&nbsp;РФ&nbsp;(счет,&nbsp;акт,&nbsp;счет-фактура).
              </p>
              <p class="article">
                В&nbsp;запросах whois отображаются ваши&nbsp;данные
              </p>
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
          <service-block :background-color="'#2dc354'" @onClick="scrollToOrder">
            <template v-slot:header> Регистрация AS: </template>
            <template v-slot:description>
              <p class="article">
                Консультационные услуги по анонсирвоанию вашей автономной
                системы (AS) или блока IP-адресов по&nbsp;протоколу&nbsp;BGP
                в&nbsp;РФ&nbsp;или&nbsp;ЕС.
              </p>
              <p class="article">
                Подача заявки от&nbsp;вашего имени на&nbsp;регистрацию АС
              </p>
              <p class="article">Помощь в оплате взносов</p>
              <p class="article">
                Поддержка квалифицированными специалистами&nbsp;24/7/365
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
          <service-block :background-color="'#2dc354'" @onClick="scrollToOrder">
            <template v-slot:header> Покупка IP Адресов: </template>
            <template v-slot:description>
              <p class="article">
                Мы располагаем базой подсетей IPv4-адресов, из&nbsp;которой
                возможно оперативно подобрать предложение
                под&nbsp;ваш&nbsp;бюджет.
              </p>
              <p class="article">
                Каждый IP перед активацией проверяется на&nbsp;присутствие
                в&nbsp;«черных&nbsp; списках»
              </p>
              <p class="article">
                Бухгалтерские документы в&nbsp;соответствии с&nbsp;требованиями
                законодательства&nbsp;РФ&nbsp;(счет,&nbsp;акт,&nbsp;счет-фактура).
              </p>
              <p class="article">
                В&nbsp;запросах whois отображаются ваши&nbsp;данные
              </p>
              <p class="article">
                <b
                  >Купите IPv4 адреса и&nbsp;получите полный контроль
                  над&nbsp;вашими объектами</b
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
                Перенос блоков IPv4, IPv6 или&nbsp;AS от&nbsp;другого&nbsp;LIR
              </p>
              <p class="article">Поддержка блоков IPv4&nbsp;и&nbsp;IPv6</p>
              <p class="article">
                Покупка ваших блоков, сетей, подсетей&nbsp;IPv4
              </p>
            </template>
            <template v-slot:button
              ><button class="dialog-button">Заказать</button>
            </template>
          </service-block>
        </service-list >
      </div>
      <ip-form ref="order" />
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
.hero-block {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('~/static/images/backgrounds/wi-fi-bg.jpg');
  .description {
    margin-bottom: 1em;
  }
}
.container {
  display: flex;
  flex-direction: column;
}
</style>
