export const tableHeaderData = [
  {
    title: 'Договор',
    isSorted: false
  },
  {
    title: 'Подписание',
    isSorted: false
  },
  {
    title: 'Статус МПП',
    isSorted: false
  },
  {
    title: '1C',
    isSorted: true
  },
  {
    title: 'TO',
    isSorted: true
  },
  {
    title: `Ожид. обесп-я`,
    isSorted: true
  },
  {
    title: 'Произв',
    isSorted: true
  },
  {
    title: 'Закрыт Расторгнут',
    isSorted: true
  },
  {
    title: 'Простой',
    isSorted: false
  },
  {
    title: 'Текущее состояние',
    isSorted: false
  },
  {
    title: 'Дата и время',
    isSorted: false
  },
  {
    title: 'Клиент',
    isSorted: false
  },
  {
    title: 'Сумма МПП',
    isSorted: false
  },
  {
    title: 'Аванс МПП',
    isSorted: false
  },
  {
    title: 'Оплата 1С',
    isSorted: false
  },
  {
    title: 'РГП',
    isSorted: false
  },
  {
    title: 'Регион',
    isSorted: false
  },
  {
    title: 'Адрес доставки',
    isSorted: false
  },
  {
    title: 'Телефон клиента',
    isSorted: false
  }
]

export const tableRowData = [
  {
    contractId: 'ХХ_1234567',
    startDate: '16.12.2022',
    status: 'Продан',
    oneC: {
      title: 5,
      status: 'pending'
    },
    TO: '',
    await: '',
    productionDate: '',
    endDate: '',
    downtime: '45м',
    currentState: {
      title: 'Готов к обеспечению',
      status: 'pending-color'
    },
    dateAndTime: '15.02.23 14:00',
    client: 'Иванов И.И.',
    cost: '100 000р',
    advance: '10 000р',
    fee: '15 000 р',
    rgp: 'Петров В.В.',
    region: 'Санкт-Петербург и ЛО',
    deliveryAdress: 'г. Пушкин, наб. реки Фонтанки, 129...',
    clientPhone: '+7 (999) 888-77-66'
  },
  {
    contractId: 'ХХ_1234567',
    startDate: '16.12.2022',
    status: 'Продан',
    oneC: {
      title: 1,
      status: 'completed'
    },
    TO: {
      title: 2,
      status: 'completed'
    },
    await: {
      title: 2,
      status: 'completed'
    },
    productionDate: {
      title: '5 25.12.22',
      status: 'completed'
    },
    endDate: {
      title: '3 - 26.12.23',
      status: 'canceled'
    },
    downtime: '5д 4ч 15м',
    currentState: {
      title: 'Рассторгнут',
      status: 'canceled-color'
    },
    dateAndTime: '15.02.23 14:00',
    client: 'Иванов И.И.',
    cost: '100 000р',
    advance: '10 000р',
    fee: '15 000 р',
    rgp: 'Петров В.В.',
    region: 'Санкт-Петербург и ЛО',
    deliveryAdress: 'г. Пушкин, наб. реки Фонтанки, 129...',
    clientPhone: '+7 (999) 888-77-66',
    options: {
      value: 'canceled'
    }
  },
  {
    contractId: 'ХХ_1234567',
    startDate: '16.12.2022',
    status: 'Исправлен МПП',
    oneC: {
      title: 1,
      status: 'completed'
    },
    TO: {
      title: 3,
      status: 'completed'
    },
    await: {
      title: 2,
      status: 'completed'
    },
    productionDate: {
      title: '5 25.12.22',
      status: 'completed'
    },
    endDate: '',
    downtime: '15м',
    currentState: {
      title: 'Согласован',
      status: 'completed-color'
    },
    dateAndTime: '15.02.23 14:00',
    client: 'Иванов И.И.',
    cost: '100 000р',
    advance: '10 000р',
    fee: '15 000 р',
    rgp: 'Петров В.В.',
    region: 'Санкт-Петербург и ЛО',
    deliveryAdress: 'г. Пушкин, наб. реки Фонтанки, 129...',
    clientPhone: '+7 (999) 888-77-66'
  },
  {
    contractId: 'ХХ_1234567',
    startDate: '16.12.2022',
    status: 'Продан',
    oneC: 5,
    TO: {
      title: 2,
      status: 'canceled'
    },
    await: '',
    productionDate: '',
    endDate: '',
    downtime: '2д 4ч 15м',
    currentState: {
      title: 'Блок',
      status: 'block'
    },
    dateAndTime: '15.02.23 14:00',
    client: 'Иванов И.И.',
    cost: '100 000р',
    advance: '10 000р',
    fee: '15 000 р',
    rgp: 'Петров В.В.',
    region: 'Санкт-Петербург и ЛО',
    deliveryAdress: 'г. Пушкин, наб. реки Фонтанки, 129...',
    clientPhone: '+7 (999) 888-77-66',
    options: {
      value: 'completed'
    }
  },
  {
    contractId: 'ХХ_1234567',
    startDate: '16.12.2022',
    status: 'Отлож. продажа',
    oneC: {
      title: 2,
      status: 'completed'
    },
    TO: '',
    await: '',
    productionDate: '',
    endDate: '',
    downtime: '45м',
    currentState: {
      title: 'Согласован',
      status: 'completed-color'
    },
    dateAndTime: '15.02.23 14:00',
    client: 'Иванов И.И.',
    cost: '100 000р',
    advance: '10 000р',
    fee: '15 000 р',
    rgp: 'Петров В.В.',
    region: 'Санкт-Петербург и ЛО',
    deliveryAdress: 'г. Пушкин, наб. реки Фонтанки, 129...',
    clientPhone: '+7 (999) 888-77-66'
  },
  {
    contractId: 'ХХ_1234567',
    startDate: '16.12.2022',
    status: 'Продан',
    oneC: {
      title: 5,
      status: 'pending'
    },
    TO: {
      title: 2,
      status: 'canceled'
    },
    await: '',
    productionDate: '',
    endDate: '',
    downtime: '2ч 02м',
    currentState: {
      title: 'Блок',
      status: 'block'
    },
    dateAndTime: '15.02.23 14:00',
    client: 'Иванов И.И.',
    cost: '100 000р',
    advance: '10 000р',
    fee: '15 000 р',
    rgp: 'Петров В.В.',
    region: 'Санкт-Петербург и ЛО',
    deliveryAdress: 'г. Пушкин, наб. реки Фонтанки, 129...',
    clientPhone: '+7 (999) 888-77-66'
  },
  {
    contractId: 'ХХ_1234567',
    startDate: '16.12.2022',
    status: 'Продан',
    oneC: {
      title: 3,
      status: 'completed'
    },
    TO: '',
    await: '',
    productionDate: '',
    endDate: '',
    downtime: '5м',
    currentState: {
      title: 'Блок',
      status: 'block'
    },
    dateAndTime: '15.02.23 14:00',
    client: 'Иванов И.И.',
    cost: '100 000р',
    advance: '10 000р',
    fee: '15 000 р',
    rgp: 'Петров В.В.',
    region: 'Санкт-Петербург и ЛО',
    deliveryAdress: 'г. Пушкин, наб. реки Фонтанки, 129...',
    clientPhone: '+7 (999) 888-77-66'
  },
  {
    contractId: 'ХХ_1234567',
    startDate: '16.12.2022',
    status: 'Не Продан',
    oneC: {
      title: 43,
      status: 'completed'
    },
    TO: '',
    await: '',
    productionDate: '',
    endDate: '',
    downtime: '45м',
    currentState: {
      title: 'Согласован',
      status: 'completed-color'
    },
    dateAndTime: '15.02.23 14:00',
    client: 'Иванов И.И.',
    cost: '100 000р',
    advance: '10 000р',
    fee: '15 000 р',
    rgp: 'Петров В.В.',
    region: 'Санкт-Петербург и ЛО',
    deliveryAdress: 'г. Пушкин, наб. реки Фонтанки, 129...',
    clientPhone: '+7 (999) 888-77-66'
  },
  {
    contractId: 'ХХ_1234567',
    startDate: '16.12.2022',
    status: 'Исправлен МПП',
    oneC: {
      title: '5',
      status: 'pending'
    },
    TO: {
      title: '2',
      status: 'canceled'
    },
    await: '',
    productionDate: '',
    endDate: '',
    downtime: '2ч 02м',
    currentState: {
      title: 'Блок',
      status: 'block'
    },
    dateAndTime: '15.02.23 14:00',
    client: 'Иванов И.И.',
    cost: '100 000р',
    advance: '10 000р',
    fee: '15 000 р',
    rgp: 'Петров В.В.',
    region: 'Санкт-Петербург и ЛО',
    deliveryAdress: 'г. Пушкин, наб. реки Фонтанки, 129...',
    clientPhone: '+7 (999) 888-77-66'
  },
  {
    contractId: 'ХХ_1234567',
    startDate: '16.12.2022',
    status: 'Продан',
    oneC: {
      title: 3,
      status: 'сompleted'
    },
    TO: '',
    await: '',
    productionDate: '',
    endDate: '',
    downtime: '25м',
    currentState: {
      title: 'Блок',
      status: 'block'
    },
    dateAndTime: '15.02.23 14:00',
    client: 'Иванов И.И.',
    cost: '100 000р',
    advance: '10 000р',
    fee: '15 000 р',
    rgp: 'Петров В.В.',
    region: 'Санкт-Петербург и ЛО',
    deliveryAdress: 'г. Пушкин, наб. реки Фонтанки, 129...',
    clientPhone: '+7 (999) 888-77-66'
  },
  {
    contractId: 'ХХ_1234567',
    startDate: '16.12.2022',
    status: 'Продан',
    oneC: {
      title: 5,
      status: 'completed'
    },
    TO: {
      title: 2,
      status: 'completed'
    },
    await: {
      title: 2,
      status: 'completed'
    },
    productionDate: {
      title: '5 25.12.22',
      status: 'completed'
    },
    endDate: {
      title: '3 - 26.12.23',
      status: 'canceled'
    },
    downtime: '5д 4ч 15м',
    currentState: {
      title: 'Блок',
      status: 'block'
    },
    dateAndTime: '15.02.23 14:00',
    client: 'Иванов И.И.',
    cost: '100 000р',
    advance: '10 000р',
    fee: '15 000 р',
    rgp: 'Петров В.В.',
    region: 'Санкт-Петербург и ЛО',
    deliveryAdress: 'г. Пушкин, наб. реки Фонтанки, 129...',
    clientPhone: '+7 (999) 888-77-66',
    options: {
      value: 'canceled'
    }
  },
  {
    contractId: 'ХХ_1234567',
    startDate: '16.12.2022',
    status: 'Продан',
    oneC: {
      title: 1,
      status: 'completed'
    },
    TO: {
      title: 2,
      status: 'completed'
    },
    await: {
      title: 2,
      status: 'completed'
    },
    productionDate: '',
    endDate: '',
    downtime: '5д 4ч 15м',
    currentState: {
      title: 'Согласован',
      status: 'completed-color'
    },
    dateAndTime: '15.02.23 14:00',
    client: 'Иванов И.И.',
    cost: '100 000р',
    advance: '10 000р',
    fee: '15 000 р',
    rgp: 'Петров В.В.',
    region: 'Санкт-Петербург и ЛО',
    deliveryAdress: 'г. Пушкин, наб. реки Фонтанки, 129...',
    clientPhone: '+7 (999) 888-77-66'
  },
  {
    contractId: 'ХХ_1234567',
    startDate: '16.12.2022',
    status: 'Продан',
    oneC: {
      title: 4,
      status: 'completed'
    },
    TO: '',
    await: '',
    productionDate: '',
    endDate: '',
    downtime: '2ч 02м',
    currentState: {
      title: 'Согласован',
      status: 'completed-color'
    },
    dateAndTime: '15.02.23 14:00',
    client: 'Иванов И.И.',
    cost: '100 000р',
    advance: '10 000р',
    fee: '15 000 р',
    rgp: 'Петров В.В.',
    region: 'Санкт-Петербург и ЛО',
    deliveryAdress: 'г. Пушкин, наб. реки Фонтанки, 129...',
    clientPhone: '+7 (999) 888-77-66'
  },
  {
    contractId: 'ХХ_1234567',
    startDate: '16.12.2022',
    status: 'Продан',
    oneC: {
      title: 2,
      status: 'completed'
    },
    TO: {
      title: 1,
      status: 'completed'
    },
    await: {
      title: 1,
      status: 'completed'
    },
    productionDate: {
      title: '1 - 25.12.22',
      status: 'completed'
    },
    endDate: {
      title: '3 - 26.12.23',
      status: 'completed'
    },
    downtime: '15м',
    currentState: {
      title: 'В производстве',
      status: 'completed-color'
    },
    dateAndTime: '15.02.23 14:00',
    client: 'Иванов И.И.',
    cost: '100 000р',
    advance: '10 000р',
    fee: '15 000 р',
    rgp: 'Петров В.В.',
    region: 'Санкт-Петербург и ЛО',
    deliveryAdress: 'г. Пушкин, наб. реки Фонтанки, 129...',
    clientPhone: '+7 (999) 888-77-66'
  },
  {
    contractId: 'ХХ_1234567',
    startDate: '16.12.2022',
    status: 'Продан',
    oneC: {
      title: 1,
      status: 'completed'
    },
    TO: '',
    await: '',
    productionDate: '',
    endDate: '',
    downtime: '5д 4ч 15м',
    currentState: {
      title: 'Согласован',
      status: 'completed-color'
    },
    dateAndTime: '15.02.23 14:00',
    client: 'Иванов И.И.',
    cost: '100 000р',
    advance: '10 000р',
    fee: '15 000 р',
    rgp: 'Петров В.В.',
    region: 'Санкт-Петербург и ЛО',
    deliveryAdress: 'г. Пушкин, наб. реки Фонтанки, 129...',
    clientPhone: '+7 (999) 888-77-66',
    options: {
      value: 'completed'
    }
  },
  {
    contractId: 'ХХ_1234567',
    startDate: '16.12.2022',
    status: 'Продан',
    oneC: {
      title: 1,
      status: 'pending'
    },
    TO: {
      title: 2,
      status: 'canceled'
    },
    await: '',
    productionDate: '',
    endDate: '',
    downtime: '5д 4ч 15м',
    currentState: {
      title: 'Блок',
      status: 'block'
    },
    dateAndTime: '15.02.23 14:00',
    client: 'Иванов И.И.',
    cost: '100 000р',
    advance: '10 000р',
    fee: '15 000 р',
    rgp: 'Петров В.В.',
    region: 'Санкт-Петербург и ЛО',
    deliveryAdress: 'г. Пушкин, наб. реки Фонтанки, 129...',
    clientPhone: '+7 (999) 888-77-66'
  },
  {
    contractId: 'ХХ_1234567',
    startDate: '16.12.2022',
    status: 'Продан',
    oneC: {
      title: 2,
      status: 'completed'
    },
    TO: '',
    await: '',
    productionDate: '',
    endDate: '',
    downtime: '5д 4ч 15м',
    currentState: {
      title: 'Согласован',
      status: 'completed-color'
    },
    dateAndTime: '15.02.23 14:00',
    client: 'Иванов И.И.',
    cost: '100 000р',
    advance: '10 000р',
    fee: '15 000 р',
    rgp: 'Петров В.В.',
    region: 'Санкт-Петербург и ЛО',
    deliveryAdress: 'г. Пушкин, наб. реки Фонтанки, 129...',
    clientPhone: '+7 (999) 888-77-66'
  },
  {
    contractId: 'ХХ_1234567',
    startDate: '16.12.2022',
    status: 'Продан',
    oneC: {
      title: 4,
      status: 'completed'
    },
    TO: {
      title: 2,
      status: 'completed'
    },
    await: {
      title: 2,
      status: 'completed'
    },
    productionDate: '',
    endDate: '',
    downtime: '5д 4ч 15м',
    currentState: {
      title: 'Согласован',
      status: 'completed-color'
    },
    dateAndTime: '15.02.23 14:00',
    client: 'Иванов И.И.',
    cost: '100 000р',
    advance: '10 000р',
    fee: '15 000 р',
    rgp: 'Петров В.В.',
    region: 'Санкт-Петербург и ЛО',
    deliveryAdress: 'г. Пушкин, наб. реки Фонтанки, 129...',
    clientPhone: '+7 (999) 888-77-66'
  },
  {
    contractId: 'ХХ_1234567',
    startDate: '16.12.2022',
    status: 'Продан',
    oneC: {
      title: 6,
      status: 'completed'
    },
    TO: '',
    await: '',
    productionDate: '',
    endDate: '',
    downtime: '5д 4ч 15м',
    currentState: {
      title: 'Согласован',
      status: 'completed-color'
    },
    dateAndTime: '15.02.23 14:00',
    client: 'Иванов И.И.',
    cost: '100 000р',
    advance: '10 000р',
    fee: '15 000 р',
    rgp: 'Петров В.В.',
    region: 'Санкт-Петербург и ЛО',
    deliveryAdress: 'г. Пушкин, наб. реки Фонтанки, 129...',
    clientPhone: '+7 (999) 888-77-66'
  }
]
