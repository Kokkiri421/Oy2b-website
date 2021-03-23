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
              <button class="dialog-button blue-dialog-button">Заказать</button>
            </td>
            <td>
              <button class="dialog-button blue-dialog-button">Заказать</button>
            </td>
            <td>
              <button class="dialog-button blue-dialog-button">Заказать</button>
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
            <th>Подменная техника</th>
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
            <td colspan="4">
              <a class="table-expander" @click="changeExpanded">
                {{ !expanded ? 'Показать' : 'Скрыть' }}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Icon from '~/components/Icons/Icon'
import CheckIcon from '~/components/Icons/CheckIcon'
import RoubleIcon from '~/components/Icons/RoubleIcon'

export default {
  data() {
    return {
      expanded: false,
    }
  },
  methods: {
    changeExpanded: function () {
      this.expanded = !this.expanded
    },
  },
  components: {
    Icon,
    CheckIcon,
    RoubleIcon,
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
.table-container {
  overflow-x: auto;
  .table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    max-width: 100vw;
    position: relative;
    border: 1px solid #eee;
    thead {
      width: 100%;
      th {
        &:first-child {
          position: sticky;
          left: 0;
          z-index: 2;
          background-color: #fff;
        }
      }
    }
    tbody {
      tr {
        &:nth-child(even) {
          background-color: #fff;
        }
        &:nth-child(odd) {
          background-color: #eee;
        }
      }
      th {
        position: sticky;
        left: 0;
        z-index: 1;
        background-color: inherit;
      }
      .default-hidden {
        display: none;
        opacity: 0;
        transition: 1s ease-out;
      }
      .show {
        display: table-row;
        opacity: 1;
      }
    }
    th,
    td {
      padding: 0.66em 2.12em;
      border: 1px solid #eee;
      text-align: center;
      @include _900() {
        font-size: 0.9em;
        padding: 0.25em 0.5em;
      }
      @include _600() {
        font-size: 0.8em;
        line-height: 1.2em;
      }
    }
    th {
      text-align: left;
      font-weight: 400;
    }
    &__icon {
      width: 1.25em;
      height: 1.25em;
      vertical-align: middle;
    }
    .dialog-button {
      padding: 0.4em 1em;
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
  }
}
</style>
