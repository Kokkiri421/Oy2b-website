<template>
  <div class="ratio-table">
    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th rowspan="2"><strong>Услуга / Тарифный план</strong></th>
            <td class="start"><strong>Стартовый</strong></td>
            <td class="standart"><strong>Стандартный</strong></td>
            <td class="expert"><strong>Экспертный</strong></td>
          </tr>
          <tr>
            <td>
              <button
                class="dialog-button dialog-button-base"
                @click="showModal"
              >
                Заказать
              </button>
            </td>
            <td>
              <button
                class="dialog-button dialog-button-base"
                @click="showModal"
              >
                Заказать
              </button>
            </td>
            <td>
              <button
                class="dialog-button dialog-button-base"
                @click="showModal"
              >
                Заказать
              </button>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Обслуживание ПК</th>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr>
            <th>Обслуживание cерверов</th>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr>
            <th>Антивирусная защита</th>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr>
            <th>Подменная техника</th>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Удаленная поддержка инфраструктуры</th>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>УОбслуживание сетевого оборудования</th>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Поддержка базового ПО</th>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Управление службой единого каталога</th>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Управление файловыми ресурсами</th>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Консалтинг</th>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Обслуживание электронной почты</th>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Резервное копирование и восстановление данных</th>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Мониторинг ИТ-инфраструктуры (24/7)</th>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Поддержка дополнительного ПО</th>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Ответственный технический специалист</th>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Сопровождение приобретения и модернизации Техники</th>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Управление средой виртуализации</th>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Сопровождение сторонних поставщиков услуг</th>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Учет лицензий ПО</th>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Телефония и АТС</th>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Организация и управление удаленным доступом к рабочей сети</th>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Объединение офисов в единую рабочую сеть</th>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Значительное изменение ИТ-инфраструктуры</th>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Аудит ИТ-Инфраструктуры</th>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>
              <icon :icon-name="'check-icon'" class="table__icon">
                <check-icon />
              </icon>
            </td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Чистка Техники (по запросу)</th>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>1 раз в год</td>
            <td>2 раза в год</td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Ежемесячные плановые выезды</th>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>1 раз в мес.</td>
            <td>2 раза в мес.</td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Срочные выезды</th>
            <td>1 раз в мес.</td>
            <td>5 раз в мес.</td>
            <td>Неограниченный</td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Формирование отчетов (по запросу)</th>
            <td>Ежегодный</td>
            <td>Ежеквартальный</td>
            <td>Ежемесячный</td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded }">
            <th>Уровень сервиса</th>
            <td>Базовый</td>
            <td>Полный</td>
            <td>Расширенный</td>
          </tr>
          <tr>
            <td colspan="4">
              <a class="table-expander" @click="changeExpanded">
                {{ !expanded ? 'Показать' : 'Скрыть' }}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <modal-window :show="isModalShown" @onClick="showModal"
      ><TicketModalForm @onClick="showModal"
    /></modal-window>
  </div>
</template>

<script>
import Icon from '~/components/Icons/Icon'
import CheckIcon from '~/components/Icons/CheckIcon'
import RoubleIcon from '~/components/Icons/RoubleIcon'
import ModalWindow from '~/components/Common/ModalWindow'
import TicketModalForm from '~/components/Common/TicketModalForm.vue'

export default {
  data() {
    return {
      isModalShown: false,
      expanded: false,
    }
  },
  methods: {
    showModal() {
      dataLayer.push({ event: 'zayavka_tarif' })
      this.isModalShown = !this.isModalShown
    },
    changeExpanded: function () {
      this.expanded = !this.expanded
    },
  },
  components: {
    Icon,
    CheckIcon,
    RoubleIcon,
    ModalWindow,
    TicketModalForm,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.blue-dialog-button {
  background-color: #009ee3;
  &:hover {
    background-color: #17b8ff;
  }
}
.table-expander {
  cursor: pointer;
  color: #069;
  transition: background-color 0.3s ease-out, color 0.3s ease-out,
    border-color 0.2s ease-out;
  font-weight: 700;
  &:hover {
    color: #d81428;
  }
}
</style>
