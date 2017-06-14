
calendar-month
==============
[![npm](https://img.shields.io/npm/v/calendar-month.svg)](https://www.npmjs.com/package/calendar-month)
[![Build Status](https://travis-ci.org/kiltjs/month.svg?branch=master)](https://travis-ci.org/kiltjs/month)

> node

``` sh
npm i calendar-month --save
```

> bower

``` sh
bower i calendar-month --save
```

> example:

``` js
var Month = require('./month');

// startDay to set Monday as first week day
Month.setFirstWeekDay(1);

// months from 0 (january) ... to 11 (december)
new Month(2017, 5);
```

> returns:

``` js
Month {
  meta: {
    date: '2018-06-01T00:00:00.000Z',
    last_day: 31,
    last_week_day: 4,
    week_day: 5,
    month_last_day: '2018-06-30T00:00:00.000Z'
  },
  year: 2018,
  month: 5,
  days: [
    { date: 28, month: 4, year: 2018, previous: true },
    { date: 29, month: 4, year: 2018, previous: true },
    { date: 30, month: 4, year: 2018, previous: true },
    { date: 31, month: 4, year: 2018, previous: true },
    { date: 1, month: 5, year: 2018, current: true },
    { date: 2, month: 5, year: 2018, current: true },
    { date: 3, month: 5, year: 2018, current: true },
    { date: 4, month: 5, year: 2018, current: true },
    { date: 5, month: 5, year: 2018, current: true },
    { date: 6, month: 5, year: 2018, current: true },
    { date: 7, month: 5, year: 2018, current: true },
    { date: 8, month: 5, year: 2018, current: true },
    { date: 9, month: 5, year: 2018, current: true },
    { date: 10, month: 5, year: 2018, current: true },
    { date: 11, month: 5, year: 2018, current: true },
    { date: 12, month: 5, year: 2018, current: true },
    { date: 13, month: 5, year: 2018, current: true },
    { date: 14, month: 5, year: 2018, current: true },
    { date: 15, month: 5, year: 2018, current: true },
    { date: 16, month: 5, year: 2018, current: true },
    { date: 17, month: 5, year: 2018, current: true },
    { date: 18, month: 5, year: 2018, current: true },
    { date: 19, month: 5, year: 2018, current: true },
    { date: 20, month: 5, year: 2018, current: true },
    { date: 21, month: 5, year: 2018, current: true },
    { date: 22, month: 5, year: 2018, current: true },
    { date: 23, month: 5, year: 2018, current: true },
    { date: 24, month: 5, year: 2018, current: true },
    { date: 25, month: 5, year: 2018, current: true },
    { date: 26, month: 5, year: 2018, current: true },
    { date: 27, month: 5, year: 2018, current: true },
    { date: 28, month: 5, year: 2018, current: true },
    { date: 29, month: 5, year: 2018, current: true },
    { date: 30, month: 5, year: 2018, current: true },
    { date: 1, month: 6, year: 2018, next: true },
    { date: 2, month: 6, year: 2018, next: true },
    { date: 3, month: 6, year: 2018, next: true },
    { date: 4, month: 6, year: 2018, next: true },
    { date: 5, month: 6, year: 2018, next: true },
    { date: 6, month: 6, year: 2018, next: true },
    { date: 7, month: 6, year: 2018, next: true },
    { date: 8, month: 6, year: 2018, next: true }
  ]
}
```
