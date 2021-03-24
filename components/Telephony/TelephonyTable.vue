<template>
  <div class="telephony-table">
    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th rowspan="2"><strong>Возможности / Тарифный план</strong></th>
            <td class="start"><strong>STANDARD</strong></td>
            <td class="standart"><strong>PRO</strong></td>
            <td class="expert"><strong>ENTERPICE</strong></td>
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
          <tr class="row-expander">
            <th colspan="2">
              <a class="table-expander" @click="changeExpanded(0)">
                <div class="table-expander__content">
                  <icon
                    :icon-name="'expand-icon'"
                    class="expand-icon"
                    :class="{ rotate: expanded[0] }"
                    :view-box="'0 0 6 10'"
                  >
                    <expand-table-icon />
                  </icon>
                  <span>СЕРВЕР / ОБЛАКО</span>
                </div>
              </a>
            </th>
            <td colspan="3"></td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded[0] }">
            <th>Простое резервное копирование</th>
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
          <tr class="default-hidden" :class="{ show: expanded[0] }">
            <th>VMware / Hyper-V / KVM</th>
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
          <tr class="default-hidden" :class="{ show: expanded[0] }">
            <th>Установка на сервере: Debian, Windows / Raspberry Pi</th>
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
          <tr class="default-hidden" :class="{ show: expanded[0] }">
            <th>Установка в облаке: Amazon. Google. Azure</th>
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
          <tr class="default-hidden" :class="{ show: expanded[0] }">
            <th>Хостинг</th>
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
          <tr class="default-hidden" :class="{ show: expanded[0] }">
            <th>Ежедневное резервирование</th>
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
          <tr class="default-hidden" :class="{ show: expanded[0] }">
            <th>Минимальная память хостинга</th>
            <td>
              <icon :icon-name="'rouble-icon'" class="table__icon">
                <rouble-icon />
              </icon>
            </td>
            <td>1 GB</td>
            <td>2 GB</td>
          </tr>
          <tr class="row-expander">
            <th colspan="2">
              <a class="table-expander" @click="changeExpanded(1)">
                <div class="table-expander__content">
                  <icon
                    :icon-name="'expand-icon'"
                    class="expand-icon"
                    :class="{ rotate: expanded[1] }"
                    :view-box="'0 0 6 10'"
                  >
                    <expand-table-icon />
                  </icon>
                  <span>ОСНОВНЫЕ</span>
                </div>
              </a>
            </th>
            <td colspan="3"></td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded[1] }">
            <th>Пользователи</th>
            <td>Неограниченно</td>
            <td>Неограниченно</td>
            <td>Неограниченно</td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded[1] }">
            <th>Приложения для iOS и Android</th>
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
          <tr class="default-hidden" :class="{ show: expanded[1] }">
            <th>Подключение своих SIP-линий</th>
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
          <tr class="default-hidden" :class="{ show: expanded[1] }">
            <th>Голосовая почта на e-mail</th>
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
          <tr class="default-hidden" :class="{ show: expanded[1] }">
            <th>Интерком / пейджинг / система публичного оповещения</th>
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
          <tr class="default-hidden" :class="{ show: expanded[1] }">
            <th>Парковка / перехват вызова</th>
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
          <tr class="default-hidden" :class="{ show: expanded[1] }">
            <th>Кнопки - индикаторы Busy Lamp Field (BLF)</th>
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
          <tr class="default-hidden" :class="{ show: expanded[1] }">
            <th>Визуализация статуса АТС в реальном времени</th>
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
          <tr class="default-hidden" :class="{ show: expanded[1] }">
            <th>Голосовая почта</th>
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
          <tr class="default-hidden" :class="{ show: expanded[1] }">
            <th>Распознавание голосовой почты в текст</th>
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
          <tr class="default-hidden" :class="{ show: expanded[1] }">
            <th>Собственный FQDN сервера</th>
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
          <tr class="default-hidden" :class="{ show: expanded[1] }">
            <th>Собственный SMTP сервер</th>
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
          <tr class="row-expander">
            <th colspan="2">
              <a class="table-expander" @click="changeExpanded(2)">
                <div class="table-expander__content">
                  <icon
                    :icon-name="'expand-icon'"
                    class="expand-icon"
                    :class="{ rotate: expanded[2] }"
                    :view-box="'0 0 6 10'"
                  >
                    <expand-table-icon />
                  </icon>
                  <span>ДЛЯ БИЗНЕСА</span>
                </div>
              </a>
            </th>
            <td colspan="3"></td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded[2] }">
            <th>Голосовое меню / IVR</th>
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
          <tr class="default-hidden" :class="{ show: expanded[2] }">
            <th>Одновременный вызов на внутренний и мобильный</th>
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
          <tr class="default-hidden" :class="{ show: expanded[2] }">
            <th>Интегрированный факс-сервер</th>
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
          <tr class="default-hidden" :class="{ show: expanded[2] }">
            <th>
              Централизованное управление телефонами в локальной сети и облаке
            </th>
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
          <tr class="default-hidden" :class="{ show: expanded[2] }">
            <th>Настройка и подключение телефонов Plug & Play</th>
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
          <tr class="default-hidden" :class="{ show: expanded[2] }">
            <th>
              Приложения ЗСХ: клиент для Windows и браузера: для iOS и Android
            </th>
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
          <tr class="default-hidden" :class="{ show: expanded[2] }">
            <th>Общая адресная книга</th>
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
          <tr class="default-hidden" :class="{ show: expanded[2] }">
            <th>Поддержка гарнитур</th>
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
          <tr class="default-hidden" :class="{ show: expanded[2] }">
            <th>Интеграция с Office 365</th>
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
          <tr class="default-hidden" :class="{ show: expanded[2] }">
            <th>Интеграция с CRM</th>
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
          <tr class="default-hidden" :class="{ show: expanded[2] }">
            <th>Запрос данных абонента в CRM и базе данных</th>
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
          <tr class="default-hidden" :class="{ show: expanded[2] }">
            <th>
              Функции АТС для отелей. Совместимость с Fidelio, Mitel и др.
            </th>
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
          <tr class="default-hidden" :class="{ show: expanded[2] }">
            <th>Аудиозвонок в видеоконференцию</th>
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
          <tr class="row-expander">
            <th colspan="2">
              <a class="table-expander" @click="changeExpanded(3)">
                <div class="table-expander__content">
                  <icon
                    :icon-name="'expand-icon'"
                    class="expand-icon"
                    :class="{ rotate: expanded[3] }"
                    :view-box="'0 0 6 10'"
                  >
                    <expand-table-icon />
                  </icon>
                  <span>WEB-КОНФЕРЕНЦИИ</span>
                </div>
              </a>
            </th>
            <td colspan="3"></td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded[3] }">
            <th>Показ своего экрана</th>
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
          <tr class="default-hidden" :class="{ show: expanded[3] }">
            <th>Удаленная поддержка</th>
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
          <tr class="default-hidden" :class="{ show: expanded[3] }">
            <th>Количество участников</th>
            <td>25</td>
            <td>50</td>
            <td>100</td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded[3] }">
            <th>Опросы</th>
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
          <tr class="default-hidden" :class="{ show: expanded[3] }">
            <th>Показ PDF-документов</th>
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
          <tr class="default-hidden" :class="{ show: expanded[3] }">
            <th>Флипчарт</th>
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
          <tr class="row-expander">
            <th colspan="2">
              <a class="table-expander" @click="changeExpanded(4)">
                <div class="table-expander__content">
                  <icon
                    :icon-name="'expand-icon'"
                    class="expand-icon"
                    :class="{ rotate: expanded[4] }"
                    :view-box="'0 0 6 10'"
                  >
                    <expand-table-icon />
                  </icon>
                  <span>КОЛЛ-ЦЕНТР</span>
                </div>
              </a>
            </th>
            <td colspan="3"></td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded[4] }">
            <th>Журнал вызовов</th>
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
          <tr class="default-hidden" :class="{ show: expanded[4] }">
            <th>Расширение для браузера Click2Call</th>
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
          <tr class="default-hidden" :class="{ show: expanded[4] }">
            <th>Конференция по ссылке Click2Meet</th>
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
          <tr class="default-hidden" :class="{ show: expanded[4] }">
            <th>Звонок по ссылке Click2Talk</th>
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
          <tr class="default-hidden" :class="{ show: expanded[4] }">
            <th>Виджет для сайта Live Chat</th>
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
          <tr class="default-hidden" :class="{ show: expanded[4] }">
            <th>CRM-интеграция</th>
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
          <tr class="default-hidden" :class="{ show: expanded[4] }">
            <th>Контакт-центр</th>
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
          <tr class="default-hidden" :class="{ show: expanded[4] }">
            <th>Групповое управление правами в очереди</th>
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
          <tr class="default-hidden" :class="{ show: expanded[4] }">
            <th>Очереди вызовов</th>
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
          <tr class="default-hidden" :class="{ show: expanded[4] }">
            <th>Real Time Statistics & Monitoring</th>
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
          <tr class="default-hidden" :class="{ show: expanded[4] }">
            <th>Установка статуса оператора очереди супервизором</th>
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
          <tr class="default-hidden" :class="{ show: expanded[4] }">
            <th>Предупреждения SLA</th>
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
          <tr class="default-hidden" :class="{ show: expanded[4] }">
            <th>Панель оператора АТС</th>
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
          <tr class="default-hidden" :class="{ show: expanded[4] }">
            <th>Информационная панель колл-центра</th>
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
          <tr class="default-hidden" :class="{ show: expanded[4] }">
            <th>Обратный вызов абоненту из очереди</th>
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
          <tr class="default-hidden" :class="{ show: expanded[4] }">
            <th>Отчеты о вызовах и работе очередей</th>
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
          <tr class="default-hidden" :class="{ show: expanded[4] }">
            <th>Вклинивание в разговор / прослушивание / подсказывание</th>
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
          <tr class="row-expander">
            <th colspan="2">
              <a class="table-expander" @click="changeExpanded(5)">
                <div class="table-expander__content">
                  <icon
                    :icon-name="'expand-icon'"
                    class="expand-icon"
                    :class="{ rotate: expanded[5] }"
                    :view-box="'0 0 6 10'"
                  >
                    <expand-table-icon />
                  </icon>
                  <span>РАСШИРЕННЫЕ</span>
                </div>
              </a>
            </th>
            <td colspan="3"></td>
          </tr>
          <tr class="default-hidden" :class="{ show: expanded[5] }">
            <th>Среда разработки Call Flow Designer</th>
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
          <tr class="default-hidden" :class="{ show: expanded[5] }">
            <th>Совместное использование IP-телефонов</th>
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
          <tr class="default-hidden" :class="{ show: expanded[5] }">
            <th>Восстановление конфигурации по расписанию</th>
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
          <tr class="default-hidden" :class="{ show: expanded[5] }">
            <th>Объединение удаленных систем (транками ЗСХ)</th>
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
          <tr class="default-hidden" :class="{ show: expanded[5] }">
            <th>Запрет отключения записи разговора сотрудником</th>
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
          <tr class="default-hidden" :class="{ show: expanded[5] }">
            <th>Распределение вызовов по квалификации оператора</th>
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
          <tr class="default-hidden" :class="{ show: expanded[5] }">
            <th>Собственный логотип на экране IP-телефона</th>
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
          <tr class="default-hidden" :class="{ show: expanded[5] }">
            <th>Встроенная отказоустойчивость</th>
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
          <tr class="default-hidden" :class="{ show: expanded[5] }">
            <th>Лицензия для резервного сервера</th>
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
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Icon from '~/components/Icons/Icon'
import CheckIcon from '~/components/Icons/CheckIcon'
import RoubleIcon from '~/components/Icons/RoubleIcon'
import ExpandTableIcon from '~/components/Icons/ExpandTableIcon'

export default {
  data() {
    return {
      expanded: Array(6).fill(true),
    }
  },
  methods: {
    changeExpanded: function (index) {
      this.$set(this.expanded, index, !this.expanded[index])
    },
  },

  components: {
    Icon,
    CheckIcon,
    RoubleIcon,
    ExpandTableIcon,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/media_mixin';
.telephony-table {
}
.blue-dialog-button {
  background-color: #ff7a00;
  &:hover {
    background-color: #ff9533;
  }
}
.row-expander {
  th {
    background-color: #fbca9b !important;
    border-right: none !important;
  }
  td {
    background-color: #fbca9b !important;
    border-left: none !important;
    text-align: left;
  }
}
.table-expander {
  cursor: pointer;
  vertical-align: center;
  transition: fill 0.3s ease-out, background-color 0.3s ease-out,
    color 0.3s ease-out, border-color 0.2s ease-out;
  font-weight: 700;
  &:hover {
    color: #ff7a00;
    fill: #ff7a00;
    @include _600() {
      color: #000;
      fill: #000;
    }
  }
  &__content {
    max-height: min-content;
    display: flex;
    overflow-x: visible;
    flex-direction: row;
    align-items: center;
    line-height: normal;

    .expand-icon {
      height: 10px;
      width: 6px;
      transition: transform 0.2s;
      vertical-align: middle;
    }
    span {
      margin-left: 0.5em;
      white-space: nowrap;
    }
  }
  .rotate {
    transform: rotate(90deg);
    display: flex;
    align-items: center;
  }
}
</style>
